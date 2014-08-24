Jsonix.Schema.XSD.Language = Jsonix.Class(Jsonix.Schema.XSD.Token, {
	name : 'Language',
	typeName : Jsonix.Schema.XSD.qname('language'),
	// TODO Constraints
	CLASS_NAME : 'Jsonix.Schema.XSD.Language'
});
Jsonix.Schema.XSD.Language.INSTANCE = new Jsonix.Schema.XSD.Language();
Jsonix.Schema.XSD.Language.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Language.INSTANCE);