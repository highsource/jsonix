Jsonix.Schema.XSD.AnyType = Jsonix.Class(Jsonix.Model.ClassInfo, {
	typeName : Jsonix.Schema.XSD.qname('anyType'),
	initialize : function() {
		Jsonix.Model.ClassInfo.prototype.initialize.call(this, {
			name : 'AnyType',
			propertyInfos : [ {
				type : 'anyAttribute',
				name : 'attributes'
			}, {
				type : 'anyElement',
				name : 'content',
				collection : true
			} ]
		});
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.AnyType'
});
Jsonix.Schema.XSD.AnyType.INSTANCE = new Jsonix.Schema.XSD.AnyType();