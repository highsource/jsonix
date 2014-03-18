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

package org.hisrc.jsonix;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.text.MessageFormat;
import java.util.ArrayList;
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
import org.hisrc.jsonix.xjc.plugin.JsonixPlugin;
import org.jvnet.jaxb2_commons.util.CustomizationUtils;
import org.jvnet.jaxb2_commons.xjc.model.concrete.XJCCMInfoFactory;
import org.jvnet.jaxb2_commons.xml.bind.model.MModelInfo;
import org.xml.sax.SAXParseException;

import com.sun.codemodel.JCodeModel;
import com.sun.tools.xjc.ConsoleErrorReporter;
import com.sun.tools.xjc.ErrorReceiver;
import com.sun.tools.xjc.ModelLoader;
import com.sun.tools.xjc.Options;
import com.sun.tools.xjc.model.CPluginCustomization;
import com.sun.tools.xjc.model.Model;
import com.sun.tools.xjc.model.nav.NClass;
import com.sun.tools.xjc.model.nav.NType;

public class JsonixMain {

	public static void main(String[] args) throws Exception {

		final List<String> arguments = new ArrayList<String>(
				Arrays.asList(args));

		if (!arguments.contains("-extension")) {
			arguments.add("-extension");
		}

		if (!arguments.contains(JsonixPlugin.OPTION)) {
			arguments.add(JsonixPlugin.OPTION);
		}
		// Driver.main(arguments.toArray(new String[arguments.size()]));

		Options options = new Options();

		options.parseArguments(arguments.toArray(new String[arguments.size()]));

		final JsonixMain main = new JsonixMain(options);
		main.execute();
	}

	private final Options options;

	public JsonixMain(Options options) {
		Validate.notNull(options);
		this.options = options;
	}

	private void execute() {

		ConsoleErrorReporter receiver = new ConsoleErrorReporter();
		Model model = ModelLoader.load(options, new JCodeModel(), receiver);

		final ErrorReceiver errorReceiver = new ConsoleErrorReporter();

		// final Model model = outline.getModel();

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
					errorReceiver.error(new SAXParseException(
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
				writePrograms(options.targetDir, module.directory,
						module.fileName, module.declarations,
						module.exportDeclarations);
			} catch (IOException ioex) {
				errorReceiver.error(new SAXParseException(MessageFormat.format(
						"Could not create the code for the module [{0}].",
						module.spaceName), null, ioex));
			}

		}
	}

	private File writePrograms(final File targetDir, final String directory,
			final String fileName, JSProgram... programs) throws IOException {
		Validate.notNull(fileName);

		final File dir = new File(targetDir, directory);
		dir.mkdirs();
		final File file = new File(dir, fileName);
		final FileWriter fileWriter = new FileWriter(file);
		try {
			// final StringWriter stringWriter = new StringWriter();
			final CodeWriter codeWriter = new CodeWriter(fileWriter);
			for (JSProgram program : programs) {
				codeWriter.program(program);
				codeWriter.lineTerminator();
			}
		} finally {
			try {
				fileWriter.close();
			} catch (IOException ignored) {
			}
		}
		return file;
	}
}
