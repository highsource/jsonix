Jsonix.Schema.XSD.GYearMonth = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GYearMonth',
	typeName : Jsonix.Schema.XSD.qname('gYearMonth'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GYearMonth',

	parse : function(value, context, input, scope) {
		var gYearMonthExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GYEAR_MONTH_PATTERN + "$");
		var results = value.match(gYearMonthExpression);
		if (results !== null) {
			var gYearMonth = {
				year : parseInt(results[1], 10),
				month : parseInt(results[5], 10),
				timezone : this.parseTimeZoneString(results[7]),
				date : this.xmlCalendarToDate(results[1], results[5], "01", "00", "00", "00", results[7])
			};
			return gYearMonth;
		}
		throw new Error('Value [' + value + '] doesn\'t match the gYearMonth pattern.');
	},

	print : function(value, context, input, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var year = undefined;
		var month = undefined;
		var timezone = undefined;

		if (value instanceof Date) {
			year = value.getFullYear();
			month = value.getMonth + 1;
			timezone = value.getTimezoneOffset() * -1;
		} else {
			Jsonix.Util.Ensure.ensureInteger(value.year);
			year = value.year;
			month = value.month;
			timezone = value.timezone;
		}

		// TODO: validation_issue (month range)
		this.validateMonthRange(month);

		// TODO: validation_issue (timezone range)
		this.validateTimeZoneRange(timezone);

		// TODO: validation_issue (signedYear)
		return this.printSignedYear(year) + "-" + this.printMonth(month) + this.printTimeZoneString(timezone);
	}

});
Jsonix.Schema.XSD.GYearMonth.INSTANCE = new Jsonix.Schema.XSD.GYearMonth();
Jsonix.Schema.XSD.GYearMonth.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GYearMonth.INSTANCE);