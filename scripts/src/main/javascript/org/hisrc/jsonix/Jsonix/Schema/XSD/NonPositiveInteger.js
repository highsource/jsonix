Jsonix.Schema.XSD.NonPositiveInteger = Jsonix.Class(Jsonix.Schema.XSD.Integer, {
	name : 'NonPositiveInteger',
	typeName : Jsonix.Schema.XSD.qname('nonPositiveInteger'),
	MIN_VALUE: -9223372036854775808,
	MAX_VALUE: 0,
	CLASS_NAME : 'Jsonix.Schema.XSD.NonPositiveInteger'
});
Jsonix.Schema.XSD.NonPositiveInteger.INSTANCE = new Jsonix.Schema.XSD.NonPositiveInteger();
Jsonix.Schema.XSD.NonPositiveInteger.INSTANCE.LIST = new Jsonix.Schema.XSD.List(
		Jsonix.Schema.XSD.NonPositiveInteger.INSTANCE);