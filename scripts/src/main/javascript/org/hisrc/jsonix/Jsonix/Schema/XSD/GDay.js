Jsonix.Schema.XSD.GDay = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GDay',
	typeName : Jsonix.Schema.XSD.qname('gDay'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GDay',

	parse : function(value, context, input, scope) {

		var gDayExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GDAY_PATTERN + "$");
		var results = value.match(gDayExpression);
		if (results !== null) {
			var gDay = {
				day : parseInt(results[2], 10),
				// TODO: validation_issue (parseTimeZoneString is redundant)
				timezone : this.parseTimeZoneString(results[3]),
				date : this.xmlCalendarToDate("1970", "01", results[2], "00", "00", "00", results[3])
			};
			return gDay;
		}
		throw new Error('Value [' + value + '] doesn\'t match the gDay pattern.');
	},

	print : function(value, context, input, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var day = undefined;
		var timezone = undefined;

		if (value instanceof Date) {
			day = value.getDate();
			timezone = value.getTimezoneOffset() * -1;
		} else {
			Jsonix.Util.Ensure.ensureInteger(value.day);
			day = value.day;
			timezone = value.timezone;
		}
		// TODO: validation_issue (day range)
		this.validateDayRange(day);

		// TODO: validation_issue (timezone range)
		this.validateTimeZoneRange(timezone);

		return "---" + this.printDay(day) + this.printTimeZoneString(timezone);
	}

});
Jsonix.Schema.XSD.GDay.INSTANCE = new Jsonix.Schema.XSD.GDay();
Jsonix.Schema.XSD.GDay.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GDay.INSTANCE);