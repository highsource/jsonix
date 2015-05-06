Jsonix.Schema.XSD.GYear = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GYear',
	typeName : Jsonix.Schema.XSD.qname('gYear'),
	parse : function(value, context, input, scope) {
		var gYearExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GYEAR_PATTERN + "$");
		var results = value.match(gYearExpression);
		if (results !== null) {
			var splitedGYear = {
				year : parseInt(results[1], 10),
				timezone : this.parseTimeZoneString1(results[5])
			};
			return splitedGYear;
		} else {
			throw new Error('Value [' + value + '] does not match the gYear pattern.');
		}
	},
	print: function(value) {
		Jsonix.Util.Ensure.ensureObject(value);
		Jsonix.Util.Ensure.ensureInteger(value.year);
		var result = (value.year < 0 ? ('-' + this.printYear(-value.year)): this.printYear(value.year));
		if (Jsonix.Util.NumberUtils.isInteger(value.timezone)) {
			result = result + this.printTimeZoneString(value.timezone);
		}
		return result;
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.GYear'
});
Jsonix.Schema.XSD.GYear.INSTANCE = new Jsonix.Schema.XSD.GYear();
Jsonix.Schema.XSD.GYear.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GYear.INSTANCE);