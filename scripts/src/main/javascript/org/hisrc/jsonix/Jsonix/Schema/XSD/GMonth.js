Jsonix.Schema.XSD.GMonth = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GMonth',
	typeName : Jsonix.Schema.XSD.qname('gMonth'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GMonth',

	parse : function(value, context, input, scope) {
		var gMonthExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GMONTH_PATTERN + "$");
		var results = value.match(gMonthExpression);

		if (results !== null) {
			var splitedGMonth = {
				month : parseInt(results[2], 10),
				// TODO: validation_issue (parseTimeZoneString is redundant)
				timezone : this.parseTimeZoneString(results[3]),
				date : this.xmlCalendarToDate("1970", results[2], "01", "00", "00", "00", results[3])
			};
			return splitedGMonth;
		}
		throw new Error('Value [' + value + '] does not match the gMonth pattern.');
	},

	print : function(value, context, input, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var month = undefined;
		var timezone = undefined;

		if (value instanceof Date) {
			month = value.getMonth() + 1;
			timezone = value.getTimezoneOffset() * -1;
		} else {
			Jsonix.Util.Ensure.ensureInteger(value.month);
			month = value.month;
			timezone = value.timezone;
		}
		// TODO: validation_issue (month range)
		this.validateMonthRange(month);

		// TODO: validation_issue (timezone range)
		this.validateTimeZoneRange(timezone);

		return "--" + this.printMonth(month) + this.printTimeZoneString(timezone);
	}
});
Jsonix.Schema.XSD.GMonth.INSTANCE = new Jsonix.Schema.XSD.GMonth();
Jsonix.Schema.XSD.GMonth.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GMonth.INSTANCE);