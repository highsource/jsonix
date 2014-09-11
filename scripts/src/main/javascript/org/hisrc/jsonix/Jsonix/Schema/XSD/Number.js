Jsonix.Schema.XSD.Number = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'Number',
	typeName : Jsonix.Schema.XSD.qname('number'),
	print : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureNumberOrNaN(value);
		if (Jsonix.Util.Type.isNaN(value)) {
			return 'NaN';
		} else if (value === Infinity) {
			return 'INF';
		} else if (value === -Infinity) {
			return '-INF';
		} else {
			var text = String(value);
			return text;
		}
	},
	parse : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		if (text === '-INF') {
			return -Infinity;
		} else if (text === 'INF') {
			return Infinity;
		} else if (text === 'NaN') {
			return NaN;
		} else {
			var value = Number(text);
			Jsonix.Util.Ensure.ensureNumber(value);
			return value;
		}
	},
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isNumberOrNaN(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.Number'
});
Jsonix.Schema.XSD.Number.INSTANCE = new Jsonix.Schema.XSD.Number();
Jsonix.Schema.XSD.Number.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Number.INSTANCE);