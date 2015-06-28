Jsonix.Schema.XSD.GDay = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GDay',
	typeName : Jsonix.Schema.XSD.qname('gDay'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GDay',

	parse : function(value, context, input, scope) {
		return this.parseGDay(value, context, input, scope);
	},

	print : function(value, context, output, scope) {
		return this.printGDay(value, context, output, scope);
	}

});
Jsonix.Schema.XSD.GDay.INSTANCE = new Jsonix.Schema.XSD.GDay();
Jsonix.Schema.XSD.GDay.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GDay.INSTANCE);