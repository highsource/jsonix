Jsonix.Binding.ElementUnmarshaller = Jsonix.Class({
	allowTypedObject : true,
	allowDom : false,
	unmarshalElement : function(context, input, scope, callback) {
		if (input.eventType != 1) {
			throw new Error("Parser must be on START_ELEMENT to read next element.");
		}
		var typeInfo = this.getInputTypeInfo(context, input, scope);
		var name = input.getName();
		var elementValue;
		if (this.allowTypedObject && Jsonix.Util.Type.exists(typeInfo)) {
			var value = typeInfo.unmarshal(context, input, scope);
			elementValue = this.convertToElementValue({
				name : name,
				value : value
			}, context, input, scope);
		} else if (this.allowDom) {
			elementValue = input.getElement();
		} else {
			// TODO better exception
			throw new Error("Element [" + name.toString() + "] is not known in this context and property does not allow DOM.");
		}
		callback(elementValue);
	},
	getInputTypeInfo : function (context, input, scope)
	{
		// Issue #70 work in progress here
		var xsiTypeInfo = null;
		if (context.supportXsiType) {
			var xsiType = input.getAttributeValueNS(Jsonix.Schema.XSI.NAMESPACE_URI, Jsonix.Schema.XSI.TYPE);
			if (Jsonix.Util.StringUtils.isNotBlank(xsiType))
			{
				var xsiTypeName = Jsonix.Schema.XSD.QName.INSTANCE.parse(xsiType, context, input, scope);
				xsiTypeInfo = context.getTypeInfoByTypeNameKey(xsiTypeName.key);
			}
		}
		var name = input.getName();
		var typeInfo = xsiTypeInfo ? xsiTypeInfo : this.getElementTypeInfo(name, context, scope);
		return typeInfo;
		
	},
	convertToElementValue : function(elementValue, context, input, scope) {
		return elementValue;
	}
});

Jsonix.Binding.ElementUnmarshaller.Simplified = Jsonix.Class(Jsonix.Binding.ElementUnmarshaller, {
	convertToElementValue : function(elementValue, context, input, scope) {
		var propertyName = elementValue.name.toCanonicalString(context);
		var value = {};
		value[propertyName] = elementValue.value;
		return value;
	}
});