Jsonix.Schema.XSD.GMonthDay = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GMonthDay',
	typeName : Jsonix.Schema.XSD.qname('gMonthDay'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GMonthDay',

	parse : function(value, context, input, scope) {
		return this.parseGMonthDay(value, context, input, scope);
	},

	print : function(value, context, output, scope) {
		return this.printGMonthDay(value, context, output, scope);
	}
});
Jsonix.Schema.XSD.GMonthDay.INSTANCE = new Jsonix.Schema.XSD.GMonthDay();
Jsonix.Schema.XSD.GMonthDay.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GMonthDay.INSTANCE);