Jsonix.Schema.XSD.Name = Jsonix.Class(Jsonix.Schema.XSD.Token, {
	name : 'Name',
	typeName : Jsonix.Schema.XSD.qname('Name'),
	// TODO Constraints
	CLASS_NAME : 'Jsonix.Schema.XSD.Name'
});
Jsonix.Schema.XSD.Name.INSTANCE = new Jsonix.Schema.XSD.Name();
Jsonix.Schema.XSD.Name.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Name.INSTANCE);