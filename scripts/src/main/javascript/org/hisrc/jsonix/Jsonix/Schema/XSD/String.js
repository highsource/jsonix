Jsonix.Schema.XSD.String = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'String',
	typeName : Jsonix.Schema.XSD.qname('string'),
	unmarshal : function(context, input, scope) {
		var text = input.getElementText();
		return this.parse(text, context, input, scope);
	},
	print : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureString(value);
		return value;
	},
	parse : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		return text;
	},
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isString(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.String'
});
Jsonix.Schema.XSD.String.INSTANCE = new Jsonix.Schema.XSD.String();
Jsonix.Schema.XSD.String.INSTANCE.LIST = new Jsonix.Schema.XSD.List(
		Jsonix.Schema.XSD.String.INSTANCE);