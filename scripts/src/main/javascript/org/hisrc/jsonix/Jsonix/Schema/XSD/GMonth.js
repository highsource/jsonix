Jsonix.Schema.XSD.GMonth = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'GMonth',
	typeName : Jsonix.Schema.XSD.qname('gMonth'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GMonth'
});
Jsonix.Schema.XSD.GMonth.INSTANCE = new Jsonix.Schema.XSD.GMonth();
Jsonix.Schema.XSD.GMonth.INSTANCE.LIST = new Jsonix.Schema.XSD.List(
		Jsonix.Schema.XSD.GMonth.INSTANCE);