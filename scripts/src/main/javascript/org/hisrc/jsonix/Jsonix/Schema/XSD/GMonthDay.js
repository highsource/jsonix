Jsonix.Schema.XSD.GMonthDay = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GMonthDay',
	typeName : Jsonix.Schema.XSD.qname('gMonthDay'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GMonthDay',

	parse : function(value, context, input, scope) {
		var gMonthDayExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GMONTH_DAY_PATTERN + "$");
		var results = value.match(gMonthDayExpression);
		if (results !== null) {
			var data = {
				month : parseInt(results[2], 10),
				day : parseInt(results[3], 10),
				timezone : this.parseTimezoneString(results[5])
			};
			return new Jsonix.XML.Calendar(data);
		}

		throw new Error('Value [' + value + '] does not match the xs:gMonthDay pattern.');
	},

	print : function(value, context, input, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var month = undefined;
		var day = undefined;
		var timezone = undefined;

		if (value instanceof Date) {
			month = value.getMonth() + 1;
			day = value.getDate();
		} else {
			Jsonix.Util.Ensure.ensureInteger(value.month);
			Jsonix.Util.Ensure.ensureInteger(value.day);
			month = value.month;
			day = value.day;
			timezone = value.timezone;
		}
		Jsonix.XML.Calendar.validateMonthDay(month, day);
		Jsonix.XML.Calendar.validateTimezone(timezone);
		return "--" + this.printMonth(month) + "-" + this.printDay(day) + this.printTimezoneString(timezone);
	}
});
Jsonix.Schema.XSD.GMonthDay.INSTANCE = new Jsonix.Schema.XSD.GMonthDay();
Jsonix.Schema.XSD.GMonthDay.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GMonthDay.INSTANCE);