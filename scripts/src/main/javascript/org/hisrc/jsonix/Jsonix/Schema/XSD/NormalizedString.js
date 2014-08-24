Jsonix.Schema.XSD.NormalizedString = Jsonix.Class(Jsonix.Schema.XSD.String, {
	name : 'NormalizedString',
	typeName : Jsonix.Schema.XSD.qname('normalizedString'),
	// TODO Constraints
	CLASS_NAME : 'Jsonix.Schema.XSD.NormalizedString'
});
Jsonix.Schema.XSD.NormalizedString.INSTANCE = new Jsonix.Schema.XSD.NormalizedString();
Jsonix.Schema.XSD.NormalizedString.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.NormalizedString.INSTANCE);