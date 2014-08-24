Jsonix.Schema.XSD.Strings = Jsonix.Class(Jsonix.Schema.XSD.List, {
	name : 'Strings',
	initialize : function() {
		Jsonix.Schema.XSD.List.prototype.initialize.apply(this, [ Jsonix.Schema.XSD.String.INSTANCE, Jsonix.Schema.XSD.qname('strings'), ' ' ]);
	},
	// TODO Constraints
	CLASS_NAME : 'Jsonix.Schema.XSD.Strings'
});
Jsonix.Schema.XSD.Strings.INSTANCE = new Jsonix.Schema.XSD.Strings();