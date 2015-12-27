Jsonix.Schema.XSD.AnySimpleType = Jsonix.Class(Jsonix.Model.TypeInfo, {
	name : 'AnySimpleType',
	typeName : Jsonix.Schema.XSD.qname('anySimpleType'),
	initialize : function() {
		Jsonix.Model.TypeInfo.prototype.initialize.apply(this, []);
	},	
	print : function(value, context, output, scope) {
		return value;
	},
	parse : function(text, context, input, scope) {
		return text;
	},
	isInstance : function(value, context, scope) {
		return true;
	},
	reprint : function(value, context, output, scope) {
		// Only reprint when the value is a string but not an instance
		if (Jsonix.Util.Type.isString(value) && !this.isInstance(value, context, scope)) {
			// Using null as input as input is not available
			return this.print(this.parse(value, context, null, scope), context, output, scope);
		}
		else
		{
			return this.print(value, context, output, scope);
		}
	},
	unmarshal : function(context, input, scope) {
		var text = input.getElementText();
		if (Jsonix.Util.StringUtils.isNotBlank(text)) {
			return this.parse(text, context, input, scope);
		}
		else
		{
			return null;
		}
	},
	marshal : function(value, context, output, scope) {
		if (Jsonix.Util.Type.exists(value)) {
			output.writeCharacters(this.reprint(value, context, output, scope));
		}
	},
	build: function(context, module)
	{
		// Nothing to do
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.AnySimpleType'
});
Jsonix.Schema.XSD.AnySimpleType.INSTANCE = new Jsonix.Schema.XSD.AnySimpleType();