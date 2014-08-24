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
		if (Jsonix.Util.Type.isString(value)) {
			return this.print(this.parse(value, context, scope), context, scope);
		}
		else
		{
			return this.print(value, context, scope);
		}
	},
	unmarshal : function(context, input) {
		var text = input.getElementText();
		if (Jsonix.Util.StringUtils.isNotBlank(text)) {
			return this.parse(text, context);
		} else {
			return null;
		}
	},
	marshal : function(context, value, output) {
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
