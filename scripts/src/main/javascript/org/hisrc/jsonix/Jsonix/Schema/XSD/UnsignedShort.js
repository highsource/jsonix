Jsonix.Schema.XSD.UnsignedShort = Jsonix.Class(Jsonix.Schema.XSD.UnsignedInt, {
	name : 'UnsignedShort',
	typeName : Jsonix.Schema.XSD.qname('unsignedShort'),
	MIN_VALUE : 0,
	MAX_VALUE : 65535,
	CLASS_NAME : 'Jsonix.Schema.XSD.UnsignedShort'
});
Jsonix.Schema.XSD.UnsignedShort.INSTANCE = new Jsonix.Schema.XSD.UnsignedShort();
Jsonix.Schema.XSD.UnsignedShort.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.UnsignedShort.INSTANCE);