Jsonix.Schema.XSD.GYearMonth = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GYearMonth',
	typeName : Jsonix.Schema.XSD.qname('gYearMonth'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GYearMonth',

	parse : function(value, context, input, scope) {
		return this.parseGYearMonth(value, context, input, scope);
	},

	print : function(value, context, output, scope) {
		return this.printGYearMonth(value, context, output, scope);
	}

});
Jsonix.Schema.XSD.GYearMonth.INSTANCE = new Jsonix.Schema.XSD.GYearMonth();
Jsonix.Schema.XSD.GYearMonth.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GYearMonth.INSTANCE);