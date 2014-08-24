Jsonix.Schema.XSD.AnyType = Jsonix.Class(Jsonix.Model.TypeInfo, {
	name : 'AnyType',
	typeName : Jsonix.Schema.XSD.qname('anyType'),
	initialize : function() {
		Jsonix.Model.TypeInfo.prototype.initialize.apply(this, []);
	},
	isInstance : function(value) {
		throw new Error('Abstract method [isInstance].');
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.AnyType'
});
Jsonix.Schema.XSD.AnyType.INSTANCE = new Jsonix.Schema.XSD.AnyType();