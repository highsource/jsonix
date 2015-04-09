Jsonix.Binding.ElementMarshaller = Jsonix.Class({
	marshalElement : function(value, context, output, scope) {
		var elementValue = this.getOutputElementValue(value, context, output, scope);
		var declaredTypeInfo = elementValue.typeInfo;
		var typeInfo = declaredTypeInfo;
		if (Jsonix.Util.Type.exists(declaredTypeInfo))
		{
			output.writeStartElement(elementValue.name);
			if (Jsonix.Util.Type.exists(elementValue.value)) {
				if (context.supportXsiType) {
					var actualTypeInfo = context.getTypeInfoByValue(elementValue.value);
					if (actualTypeInfo && actualTypeInfo.typeName && declaredTypeInfo !== actualTypeInfo)
					{
						typeInfo = actualTypeInfo;
						var xsiTypeName = actualTypeInfo.typeName;
						var xsiType = Jsonix.Schema.XSD.QName.INSTANCE.print(xsiTypeName, context, output, scope);
						output.writeAttribute(Jsonix.Schema.XSI.TYPE_QNAME, xsiType);
					}
				}
				typeInfo.marshal(elementValue.value, context, output, scope);
			}
			output.writeEndElement();
		}
		else
		{
			throw new Error("Element [" + elementValue.name.key + "] is not known in this context.");
		}
	},
	getOutputElementValue : function (value, context, output, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var elementValue = this.convertFromElementValue(value, context, output, scope);
		return {
			name : elementValue.name,
			value : elementValue.value,
			typeInfo : this.getTypeInfoByElementName(elementValue.name, context, scope)
		};
	},
	convertFromElementValue : function(elementValue, context, output, scope) {
		var name;
		var value;
		if (Jsonix.Util.Type.exists(elementValue.name) && !Jsonix.Util.Type.isUndefined(elementValue.value)) {
			name = Jsonix.XML.QName.fromObjectOrString(elementValue.name, context);
			value = Jsonix.Util.Type.exists(elementValue.value) ? elementValue.value : null;
			return {
				name : name,
				value : value
			};
		} else {
			for ( var propertyName in elementValue) {
				if (elementValue.hasOwnProperty(propertyName)) {
					name = Jsonix.XML.QName.fromObjectOrString(propertyName, context);
					value = elementValue[propertyName];
					return {
						name : name,
						value : value
					};
				}
			}
		}
		throw new Error("Invalid element value [" + elementValue + "]. Element values must either have {name:'myElementName', value: elementValue} or {myElementName:elementValue} structure.");
	},
	getTypeInfoByElementName : function(name, context, scope) {
		var elementInfo = context.getElementInfo(name, scope);
		if (Jsonix.Util.Type.exists(elementInfo)) {
			return elementInfo.typeInfo;
		} else {
			return undefined;
		}
	}
});