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

package org.hisrc.jsonix.compiler;

import java.util.Objects;

import javax.xml.namespace.QName;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.Validate;
import org.hisrc.jscm.codemodel.JSCodeModel;
import org.hisrc.jscm.codemodel.JSProgram;
import org.hisrc.jscm.codemodel.expression.JSArrayLiteral;
import org.hisrc.jscm.codemodel.expression.JSFunctionExpression.Function;
import org.hisrc.jscm.codemodel.expression.JSGlobalVariable;
import org.hisrc.jscm.codemodel.expression.JSMemberExpression;
import org.hisrc.jscm.codemodel.expression.JSObjectLiteral;
import org.hisrc.jscm.codemodel.statement.JSIfStatement;
import org.hisrc.jscm.codemodel.statement.JSVariableStatement;
import org.hisrc.jsonix.xjc.customizations.PackageMapping;

public class JsonixModule {

	private final JSCodeModel codeModel;
	public final String outputPackageName;
	public final String spaceName;
	public final JSProgram declarations;
	public final JSProgram exportDeclarations;
	private final JSVariableStatement spaceFactoryVariable;
	private final JSVariableStatement space;

	private final String defaultElementNamespaceURI;
	private final String defaultAttributeNamespaceURI;

	public final String directory;
	public final String fileName;
	private JSArrayLiteral typeInfos;
	private JSArrayLiteral elementInfos;
	private Function spaceFactoryFunction;

	public JsonixModule(JSCodeModel codeModel, PackageMapping packageMapping) {
		Validate.notEmpty(packageMapping.getSpaceName());
		Validate.notNull(packageMapping.getDirectory());
		Validate.notEmpty(packageMapping.getFileName());
		this.codeModel = codeModel;
		this.declarations = codeModel.program();
		this.exportDeclarations = codeModel.program();

		this.outputPackageName = packageMapping.getOutputPackageName();
		this.spaceName = packageMapping.getSpaceName();

		this.directory = packageMapping.getDirectory();
		this.fileName = packageMapping.getFileName();
		final JSObjectLiteral spaceBody = codeModel.object();

		spaceBody.append("name", codeModel.string(this.spaceName));

		this.defaultElementNamespaceURI = packageMapping
				.getDefaultElementNamespaceURI();
		if (this.defaultElementNamespaceURI != null) {
			spaceBody.append("defaultElementNamespaceURI",
					codeModel.string(this.defaultElementNamespaceURI));
		}

		this.defaultAttributeNamespaceURI = packageMapping
				.getDefaultAttributeNamespaceURI();
		if (this.defaultAttributeNamespaceURI != null) {
			spaceBody.append("defaultAttributeNamespaceURI",
					codeModel.string(this.defaultAttributeNamespaceURI));
		}

		this.spaceFactoryFunction = codeModel.function();
		this.spaceFactoryVariable = this.declarations.var("_" + this.spaceName
				+ "_factory", this.spaceFactoryFunction);

		this.space = this.spaceFactoryFunction.getBody().var(this.spaceName,
				spaceBody);
		this.spaceFactoryFunction.getBody()._return(
				codeModel.object().append(this.spaceName, this.space.getVariable()));

		final JSGlobalVariable define = this.codeModel.globalVariable("define");
		final JSIfStatement ifDefine = this.exportDeclarations._if(define
				.typeof().eeq(codeModel.string("function"))
				.and(define.p("amd")));

		ifDefine._then()
				.block()
				.expression(
						define.i().args(codeModel.array(),
								this.spaceFactoryVariable.getVariable()));

		final JSGlobalVariable module = this.codeModel.globalVariable("module");
		final JSIfStatement ifModuleExports = ifDefine
				._else()
				.block()
				._if(module.typeof().nee(codeModel.string("undefined"))
						.and(module.p("exports")));
		ifModuleExports
				._then()
				.block()
				.expression(
						module.p("exports")
								.p(this.spaceName)
								.assign(this.spaceFactoryVariable.getVariable()
										.i().p(this.spaceName)));

		ifModuleExports
				._else()
				.block()
				.var(this.spaceName,
						this.spaceFactoryVariable.getVariable().i().p(this.spaceName));

		typeInfos = codeModel.array();
		spaceBody.append("typeInfos", typeInfos);

		elementInfos = codeModel.array();
		spaceBody.append("elementInfos", elementInfos);

	}

	public JSMemberExpression createElementNameExpression(final QName name) {
		Validate.notNull(name);
		return createNameExpression(name, this.defaultElementNamespaceURI);
	}

	public JSMemberExpression createAttributeNameExpression(final QName name) {
		Validate.notNull(name);
		return createNameExpression(name, this.defaultAttributeNamespaceURI);
	}

	private JSMemberExpression createNameExpression(final QName name,
			final String defaultNamespaceURI) {
		final String draftNamespaceURI = name.getNamespaceURI();
		final String namespaceURI = StringUtils.isEmpty(draftNamespaceURI) ? null
				: draftNamespaceURI;

		if (Objects.equals(defaultNamespaceURI, namespaceURI)) {
			return this.codeModel.string(name.getLocalPart());
		} else {

			final JSObjectLiteral nameExpression = this.codeModel.object();

			nameExpression.append("localPart",
					this.codeModel.string(name.getLocalPart()));

			if (!StringUtils.isEmpty(namespaceURI)) {
				nameExpression.append("namespaceURI",
						this.codeModel.string(namespaceURI));

			}
			return nameExpression;
		}
	}

	public void registerTypeInfo(JSObjectLiteral classInfo) {
		typeInfos.append(classInfo);
	}

	public void registerElementInfo(JSObjectLiteral elementInfo) {
		elementInfos.append(elementInfo);
	}
}
