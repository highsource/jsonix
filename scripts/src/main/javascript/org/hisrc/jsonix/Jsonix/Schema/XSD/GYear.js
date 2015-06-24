Jsonix.Schema.XSD.GYear = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GYear',
	typeName : Jsonix.Schema.XSD.qname('gYear'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GYear',

	parse : function(value, context, input, scope) {
		var gYearExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GYEAR_PATTERN + "$");
		var results = value.match(gYearExpression);
		if (results !== null) {
			var data = {
				year : parseInt(results[1], 10),
				timezone : this.parseTimezoneString(results[5])
			};
			return new Jsonix.XML.Calendar(data);
		}
		throw new Error('Value [' + value + '] does not match the xs:gYear pattern.');
	},

	print : function(value, context, input, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var year = undefined;
		var timezone = undefined;

		if (value instanceof Date) {
			year = value.getFullYear();
		} else {
			Jsonix.Util.Ensure.ensureInteger(value.year);
			year = value.year;
			timezone = value.timezone;
		}
		Jsonix.XML.Calendar.validateYear(year);
		Jsonix.XML.Calendar.validateTimezone(timezone);
		return this.printSignedYear(year) + this.printTimezoneString(timezone);
	}
});
Jsonix.Schema.XSD.GYear.INSTANCE = new Jsonix.Schema.XSD.GYear();
Jsonix.Schema.XSD.GYear.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GYear.INSTANCE);