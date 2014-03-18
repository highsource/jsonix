/**
 * Jsonix is a JavaScript library which allows you to convert between XML
 * and JavaScript object structures.
 *
 * Copyright (c) 2010 - 2014, Alexey Valikov, Highsource.org
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice, this
 *   list of conditions and the following disclaimer in the documentation and/or
 *   other materials provided with the distribution.
 *
 * * Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

package org.hisrc.jsonix.xjc.plugin;

import java.io.IOException;
import java.io.StringWriter;
import java.text.MessageFormat;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.xml.bind.JAXBException;

import org.apache.commons.lang3.Validate;
import org.hisrc.jscm.codemodel.JSProgram;
import org.hisrc.jscm.codemodel.writer.CodeWriter;
import org.hisrc.jsonix.compiler.JsonixCompiler;
import org.hisrc.jsonix.compiler.JsonixModule;
import org.hisrc.jsonix.xjc.customizations.JsonixCustomizationsConstants;
import org.hisrc.jsonix.xjc.customizations.PackageMapping;
import org.jvnet.jaxb2_commons.util.CustomizationUtils;
import org.jvnet.jaxb2_commons.xjc.model.concrete.XJCCMInfoFactory;
import org.jvnet.jaxb2_commons.xml.bind.model.MModelInfo;
import org.xml.sax.ErrorHandler;
import org.xml.sax.SAXException;
import org.xml.sax.SAXParseException;

import com.sun.codemodel.JPackage;
import com.sun.codemodel.fmt.JTextFile;
import com.sun.tools.xjc.BadCommandLineException;
import com.sun.tools.xjc.Options;
import com.sun.tools.xjc.Plugin;
import com.sun.tools.xjc.model.CPluginCustomization;
import com.sun.tools.xjc.model.Model;
import com.sun.tools.xjc.model.nav.NClass;
import com.sun.tools.xjc.model.nav.NType;
import com.sun.tools.xjc.outline.Outline;

public class JsonixPlugin extends Plugin {

	public static final String OPTION_NAME = "Xjsonix";
	public static final String OPTION = "-" + OPTION_NAME;

	@Override
	public String getOptionName() {
		return OPTION_NAME;
	}

	@Override
	public String getUsage() {
		return "TBD";
	}

	@Override
	public void onActivated(Options opts) throws BadCommandLineException {
	}

	@Override
	public void postProcessModel(Model model, ErrorHandler errorHandler) {
	}

	@Override
	public List<String> getCustomizationURIs() {
		return Arrays.asList(JsonixCustomizationsConstants.NAMESPACE_URI);
	}

	@Override
	public boolean isCustomizationTagName(String nsUri, String localName) {
		return (JsonixCustomizationsConstants.NAMESPACE_URI.equals(nsUri) && JsonixCustomizationsConstants.PACKAGE_MAPPING_LOCAL_NAME
				.equals(localName));
	}

	@Override
	public boolean run(Outline outline, Options opt, ErrorHandler errorHandler)
			throws SAXException {

		final Model model = outline.getModel();

		Map<String, PackageMapping> packageMappings = new HashMap<String, PackageMapping>();
		{
			List<CPluginCustomization> customizations = CustomizationUtils
					.findCustomizations(model,
							JsonixCustomizationsConstants.PACKAGE_MAPPING_NAME);

			for (CPluginCustomization customization : customizations) {
				try {
					final PackageMapping packageMapping = JsonixCustomizationsConstants
							.unmarshalPackageMapping(customization.element);
					// TODO check parameters
					packageMappings.put(packageMapping.getPackageName(),
							packageMapping);
				} catch (JAXBException jaxbex) {
					errorHandler.error(new SAXParseException(
							"Could not unmarshal the customization element.",
							customization.locator, jaxbex));
				}
			}
		}

		MModelInfo<NType, NClass> mModel = new XJCCMInfoFactory(model)
				.createModel();

		final JsonixCompiler<NType, NClass> compiler = new JsonixCompiler<NType, NClass>(
				mModel, packageMappings);
		final Map<String, JsonixModule> modules = compiler.compile();

		for (JsonixModule module : modules.values()) {
			try {
				final JPackage _package = model.codeModel
						._package(module.outputPackageName);
				_package.addResourceFile(createTextFile(module.fileName,
						module.declarations, module.exportDeclarations));
			} catch (IOException ioex) {
				errorHandler.error(new SAXParseException(MessageFormat.format(
						"Could not create the code for the module [{0}].",
						module.spaceName), null, ioex));
			}

		}

		return true;
	}

	private JTextFile createTextFile(String fileName, JSProgram... programs)
			throws IOException {
		Validate.notNull(fileName);
		final JTextFile textFile = new JTextFile(fileName);
		final StringWriter stringWriter = new StringWriter();
		final CodeWriter codeWriter = new CodeWriter(stringWriter);
		for (JSProgram program : programs) {
			codeWriter.program(program);
			codeWriter.lineTerminator();
		}
		textFile.setContents(stringWriter.toString());
		return textFile;
	}

}
