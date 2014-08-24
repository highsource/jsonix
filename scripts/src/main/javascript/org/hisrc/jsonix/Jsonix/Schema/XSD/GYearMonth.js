Jsonix.Schema.XSD.GYearMonth = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'GYearMonth',
	typeName : Jsonix.Schema.XSD.qname('gYearMonth'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GYearMonth'
});
Jsonix.Schema.XSD.GYearMonth.INSTANCE = new Jsonix.Schema.XSD.GYearMonth();
Jsonix.Schema.XSD.GYearMonth.INSTANCE.LIST = new Jsonix.Schema.XSD.List(
		Jsonix.Schema.XSD.GYearMonth.INSTANCE);