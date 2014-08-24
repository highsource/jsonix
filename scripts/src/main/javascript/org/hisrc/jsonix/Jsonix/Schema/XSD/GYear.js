Jsonix.Schema.XSD.GYear = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'GYear',
	typeName : Jsonix.Schema.XSD.qname('gYear'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GYear'
});
Jsonix.Schema.XSD.GYear.INSTANCE = new Jsonix.Schema.XSD.GYear();
Jsonix.Schema.XSD.GYear.INSTANCE.LIST = new Jsonix.Schema.XSD.List(
		Jsonix.Schema.XSD.GYear.INSTANCE);