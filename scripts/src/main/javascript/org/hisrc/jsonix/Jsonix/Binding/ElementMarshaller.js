Jsonix.Binding.ElementMarshaller = Jsonix.Class({
	marshalElementNode : function(value, context, output, scope) {
		var elementInfo = this.getOutputElementInfo(value, context, output, scope);
		var typeInfo = this.getOutputTypeInfo(elementInfo, context, output, scope);
		if (Jsonix.Util.Type.exists(typeInfo))
		{
			this.marshalElementTypeInfo(elementInfo.name, elementInfo.value, typeInfo, context, output, scope);
		}
		else
		{
			throw new Error("Element [" + elementValue.name.key + "] is not known in this context.");
		}
	},
	marshalElementTypeInfo : function(name, value, typeInfo, context, output, scope) {
		output.writeStartElement(name);
		if (Jsonix.Util.Type.exists(value)) {
			typeInfo.marshal(value, context, output, scope);
		}
		output.writeEndElement();
	},
	getOutputElementInfo : function (value, context, output, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var elementValue = this.convertFromElementValue(value, context, output, scope);
		return elementValue;
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
	getOutputTypeInfo : function (value, context, output, scope)
	{
		return this.getElementTypeInfo(value.name, context, scope);
	},
	getElementTypeInfo : function(name, context, scope) {
		var elementInfo = context.getElementInfo(name, scope);
		if (Jsonix.Util.Type.exists(elementInfo)) {
			return elementInfo.typeInfo;
		} else {
			return undefined;
		}
	}
});