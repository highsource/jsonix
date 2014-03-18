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

import java.util.HashMap;
import java.util.Map;

import javax.xml.namespace.QName;

import org.apache.commons.lang3.Validate;
import org.hisrc.jscm.codemodel.JSCodeModel;
import org.hisrc.jscm.codemodel.expression.JSAssignmentExpression;
import org.hisrc.jscm.codemodel.expression.JSObjectLiteral;
import org.jvnet.jaxb2_commons.xml.bind.model.MBuiltinLeafInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MClassInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MEnumLeafInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MID;
import org.jvnet.jaxb2_commons.xml.bind.model.MIDREF;
import org.jvnet.jaxb2_commons.xml.bind.model.MIDREFS;
import org.jvnet.jaxb2_commons.xml.bind.model.MList;
import org.jvnet.jaxb2_commons.xml.bind.model.MPackagedTypeInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MTypeInfoVisitor;
import org.jvnet.jaxb2_commons.xml.bind.model.MWildcardTypeInfo;
import org.jvnet.jaxb2_commons.xmlschema.XmlSchemaConstants;

final class CreateTypeInfoDeclarationVisitor<T, C extends T> implements
		MTypeInfoVisitor<T, C, JSAssignmentExpression> {

	private static Map<QName, String> XSD_TYPE_MAPPING = new HashMap<QName, String>();
	{
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.ANYTYPE, "AnyType");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.ANYSIMPLETYPE, "AnySimpleType");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.STRING, "String");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.NORMALIZEDSTRING,
				"NormalizedString");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.TOKEN, "Token");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.LANGUAGE, "Language");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.NAME, "Name");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.NCNAME, "NCName");
		// XSD_TYPE_MAPPING.put(XmlSchemaConstants.ID, "Id");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.ID, "String");
		// XSD_TYPE_MAPPING.put(XmlSchemaConstants.IDREF, "Idref");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.IDREF, "String");
		// XSD_TYPE_MAPPING.put(XmlSchemaConstants.IDREFS, "Idrefs");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.IDREFS, "Strings");
		// XSD_TYPE_MAPPING.put(XmlSchemaConstants.ENTITY, "Entity");
		// XSD_TYPE_MAPPING.put(XmlSchemaConstants.ENTITIES, "Entities");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.NMTOKEN, "NMToken");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.NMTOKENS, "NMTokens");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.BOOLEAN, "Boolean");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.BASE64BINARY, "Base64Binary");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.HEXBINARY, "HexBinary");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.FLOAT, "Float");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.DECIMAL, "Decimal");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.INTEGER, "Integer");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.NONPOSITIVEINTEGER,
				"NonPositiveInteger");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.NEGATIVEINTEGER,
				"NegativeInteger");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.LONG, "Long");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.INT, "Int");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.SHORT, "Short");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.BYTE, "Byte");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.NONNEGATIVEINTEGER,
				"NonNegativeInteger");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.UNSIGNEDLONG, "UnsignedLong");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.UNSIGNEDINT, "UnsignedInt");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.UNSIGNEDSHORT, "UnsignedShort");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.UNSIGNEDBYTE, "UnsignedByte");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.POSITIVEINTEGER,
				"PositiveInteger");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.DOUBLE, "Double");
		// XSD_TYPE_MAPPING.put(XmlSchemaConstants.ANYURI, "AnyURI");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.ANYURI, "String");
		// XSD_TYPE_MAPPING.put(XmlSchemaConstants.QNAME, "QName");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.QNAME, "String");
		// XSD_TYPE_MAPPING.put(XmlSchemaConstants.NOTATION, "Notation");
		// XSD_TYPE_MAPPING.put(XmlSchemaConstants.DURATION, "Duration");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.DURATION, "String");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.DATETIME, "DateTime");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.TIME, "Time");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.DATE, "Date");
		// XSD_TYPE_MAPPING.put(XmlSchemaConstants.GYEARMONTH, "GYearMonth");
		// XSD_TYPE_MAPPING.put(XmlSchemaConstants.GYEAR, "GYear");
		// XSD_TYPE_MAPPING.put(XmlSchemaConstants.GMONTHDAY, "GMonthDay");
		// XSD_TYPE_MAPPING.put(XmlSchemaConstants.GDAY, "GDay");
		// XSD_TYPE_MAPPING.put(XmlSchemaConstants.GMONTH, "GMonth");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.CALENDAR, "Calendar");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.GYEARMONTH, "String");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.GYEAR, "String");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.GMONTHDAY, "String");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.GDAY, "String");
		XSD_TYPE_MAPPING.put(XmlSchemaConstants.GMONTH, "String");
		// XSD_TYPE_MAPPING.put(XmlSchemaConstants.CALENDAR, "String");
	}

	private final JsonixCompiler<T, C> jsonixCompiler;
	private final JSCodeModel codeModel;

	CreateTypeInfoDeclarationVisitor(JsonixCompiler<T, C> jsonixCompiler,
			JSCodeModel codeModel) {
		Validate.notNull(jsonixCompiler);
		Validate.notNull(codeModel);
		this.jsonixCompiler = jsonixCompiler;
		this.codeModel = codeModel;
	}

	private JSAssignmentExpression createTypeInfoDeclaration(
			MPackagedTypeInfo<T, C> info) {
		final JsonixModule module = this.jsonixCompiler.getModule(info);
		return this.codeModel
				.string(module.spaceName
						+ "."
						+ info.getContainerLocalName(JsonixCompiler.DEFAULT_SCOPED_NAME_DELIMITER));

	}

	public JSAssignmentExpression visitEnumLeafInfo(MEnumLeafInfo<T, C> info) {
		// TODO Enums not supported yet, see JSNX-???
		// return null;
		// return createTypeInfoDeclaration(info,
		// this.code.$JsonixModelEnumLeafInfo);
		return info.getBaseTypeInfo().acceptTypeInfoVisitor(this);
	}

	public JSAssignmentExpression visitClassInfo(MClassInfo<T, C> info) {
		return createTypeInfoDeclaration(info);
	}

	public JSAssignmentExpression visitList(MList<T, C> info) {
		final JSObjectLiteral list = this.codeModel.object();
		list.append("type", this.codeModel.string("list"));
		list.append("typeInfo",
				info.getItemTypeInfo().acceptTypeInfoVisitor(this));
		return list;
	}

	public JSAssignmentExpression visitBuiltinLeafInfo(
			MBuiltinLeafInfo<T, C> info) {
		final String name = XSD_TYPE_MAPPING.get(info.getTypeName());
		if (name != null) {
			return this.codeModel.string(name);
		} else {
			return null;
		}
	}

	public JSAssignmentExpression visitWildcardTypeInfo(
			MWildcardTypeInfo<T, C> info) {
		return null;
	}

	@Override
	public JSAssignmentExpression visitID(MID<T, C> info) {
		return this.codeModel.string("ID");
	}

	@Override
	public JSAssignmentExpression visitIDREF(MIDREF<T, C> info) {
		return this.codeModel.string("IDREF");
	}

	@Override
	public JSAssignmentExpression visitIDREFS(MIDREFS<T, C> info) {
		return this.codeModel.string("IDREFS");
	}
}