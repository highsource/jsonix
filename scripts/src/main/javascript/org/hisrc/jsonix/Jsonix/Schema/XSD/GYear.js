Jsonix.Schema.XSD.GYear = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GYear',
	typeName : Jsonix.Schema.XSD.qname('gYear'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GYear',

	parse : function(value, context, input, scope) {
		return this.parseGYear(value, context, input, scope);
	},

	print : function(value, context, output, scope) {
		return this.printGYear(value, context, output, scope);
	}
});
Jsonix.Schema.XSD.GYear.INSTANCE = new Jsonix.Schema.XSD.GYear();
Jsonix.Schema.XSD.GYear.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GYear.INSTANCE);