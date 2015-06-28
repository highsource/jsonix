Jsonix.Schema.XSD.GMonth = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GMonth',
	typeName : Jsonix.Schema.XSD.qname('gMonth'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GMonth',
	parse : function(value, context, input, scope) {
		return this.parseGMonth(value, context, input, scope);
	},
	print : function(value, context, output, scope) {
		return this.printGMonth(value, context, output, scope);
	}
});
Jsonix.Schema.XSD.GMonth.INSTANCE = new Jsonix.Schema.XSD.GMonth();
Jsonix.Schema.XSD.GMonth.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GMonth.INSTANCE);