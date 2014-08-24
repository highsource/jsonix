Jsonix.Schema.XSD.IDREF = Jsonix.Class(Jsonix.Schema.XSD.String, {
	name : 'IDREF',
	typeName : Jsonix.Schema.XSD.qname('IDREF'),
	CLASS_NAME : 'Jsonix.Schema.XSD.IDREF'
});
Jsonix.Schema.XSD.IDREF.INSTANCE = new Jsonix.Schema.XSD.IDREF();
Jsonix.Schema.XSD.IDREF.INSTANCE.LIST = new Jsonix.Schema.XSD.List(
		Jsonix.Schema.XSD.IDREF.INSTANCE);