Jsonix.Schema.XSD.AnySimpleType = Jsonix.Class(Jsonix.Schema.XSD.AnyType, {
	name : 'AnySimpleType',
	typeName : Jsonix.Schema.XSD.qname('anySimpleType'),
	simpleType : true,
	print : function(value) {
		throw new Error('Abstract method [print].');
	},
	parse : function(text) {
		throw new Error('Abstract method [parse].');
	},
	reprint : function(value, context, scope) {
		// Only reprint when the value is a string but not an instance
		if (Jsonix.Util.Type.isString(value) && !this.isInstance(value)) {
			return this.print(this.parse(value, context, scope), context, scope);
		}
		else
		{
			return this.print(value, context, scope);
		}
	},
	unmarshal : function(context, input, scope) {
		var text = input.getElementText();
		if (Jsonix.Util.StringUtils.isNotBlank(text)) {
			return this.parse(text, context);
		} else {
			return null;
		}
	},
	marshal : function(value, context, output, scope) {
		if (Jsonix.Util.Type.exists(value)) {
			output.writeCharacters(this.reprint(value, context));
		}
	},
	build: function(context, module)
	{
		// Nothing to do
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.AnySimpleType'
});
