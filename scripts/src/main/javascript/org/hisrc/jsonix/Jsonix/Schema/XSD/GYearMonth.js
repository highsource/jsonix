Jsonix.Schema.XSD.GYearMonth = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GYearMonth',
	typeName : Jsonix.Schema.XSD.qname('gYearMonth'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GYearMonth',

	parse : function(value, context, input, scope) {
		var gYearMonthExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GYEAR_MONTH_PATTERN + "$");
		var results = value.match(gYearMonthExpression);
		if (results !== null) {
			var data = {
				year : parseInt(results[1], 10),
				month : parseInt(results[5], 10),
				timezone : this.parseTimezoneString(results[7])
			};
			return new Jsonix.XML.Calendar(data);
		}
		throw new Error('Value [' + value + '] does not match the xs:gYearMonth pattern.');
	},

	print : function(value, context, input, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var year = undefined;
		var month = undefined;
		var timezone = undefined;

		if (value instanceof Date) {
			year = value.getFullYear();
			month = value.getMonth() + 1;
		} else {
			Jsonix.Util.Ensure.ensureInteger(value.year);
			year = value.year;
			month = value.month;
			timezone = value.timezone;
		}
		Jsonix.XML.Calendar.validateYear(year);
		Jsonix.XML.Calendar.validateMonth(month);
		Jsonix.XML.Calendar.validateTimezone(timezone);
		return this.printSignedYear(year) + "-" + this.printMonth(month) + this.printTimezoneString(timezone);
	}

});
Jsonix.Schema.XSD.GYearMonth.INSTANCE = new Jsonix.Schema.XSD.GYearMonth();
Jsonix.Schema.XSD.GYearMonth.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GYearMonth.INSTANCE);