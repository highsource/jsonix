Jsonix.Schema.XSD.NCName = Jsonix.Class(Jsonix.Schema.XSD.Name, {
	name : 'NCName',
	typeName : Jsonix.Schema.XSD.qname('NCName'),
	// TODO Constraints
	CLASS_NAME : 'Jsonix.Schema.XSD.NCName'
});
Jsonix.Schema.XSD.NCName.INSTANCE = new Jsonix.Schema.XSD.NCName();
Jsonix.Schema.XSD.NCName.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.NCName.INSTANCE);