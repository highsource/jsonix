Jsonix.Binding.ElementUnmarshaller = Jsonix.Class({
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