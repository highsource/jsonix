Jsonix.Schema.XSD.GMonthDay = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GMonthDay',
	typeName : Jsonix.Schema.XSD.qname('gMonthDay'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GMonthDay',

	parse : function(value, context, input, scope) {
		var gMonthDayExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GMONTH_DAY_PATTERN + "$");
		var results = value.match(gMonthDayExpression);

		if (results !== null) {
			var gMonthDay = {
				month : parseInt(results[2], 10),
				day : parseInt(results[3], 10),
				timezone : this.parseTimeZoneString(results[5]),
				date : this.xmlCalendarToDate("1970", results[2], results[3], "00", "00", "00", results[5])
			};

			// TODO: validation_issue (day range in month)
			this.validateMonthDayRange(gMonthDay.month, gMonthDay.day);

			return gMonthDay;
		}

		throw new Error('Value [' + value + '] doesn\'t match the gMonthDay pattern.');
	},

	print : function(value, context, input, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var month = undefined;
		var day = undefined;
		var timezone = undefined;

		if (value instanceof Date) {
			month = value.getMonth() + 1;
			day = value.getDate();
			timezone = value.getTimezoneOffset() * -1;
		} else {
			Jsonix.Util.Ensure.ensureInteger(value.month);
			Jsonix.Util.Ensure.ensureInteger(value.day);
			month = value.month;
			day = value.day;
			timezone = value.timezone;
		}

		// TODO: validation_issue (day range in month)
		this.validateMonthDayRange(month, day);

		// TODO: validation_issue (timezone range)
		this.validateTimeZoneRange(timezone);

		return "--" + this.printMonth(month) + "-" + this.printDay(day) + this.printTimeZoneString(timezone);
	}
});
Jsonix.Schema.XSD.GMonthDay.INSTANCE = new Jsonix.Schema.XSD.GMonthDay();
Jsonix.Schema.XSD.GMonthDay.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GMonthDay.INSTANCE);