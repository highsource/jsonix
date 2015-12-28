Jsonix.Schema.XSD.DateTimeAsDate = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'DateTimeAsDate',
	typeName : Jsonix.Schema.XSD.qname('dateTime'),
	parse : function(value, context, input, scope) {
		var calendar = this.parseDateTime(value);
		var date = new Date();
		date.setFullYear(calendar.year);
		date.setMonth(calendar.month - 1);
		date.setDate(calendar.day);
		date.setHours(calendar.hour);
		date.setMinutes(calendar.minute);
		date.setSeconds(calendar.second);
		if (Jsonix.Util.Type.isNumber(calendar.fractionalSecond)) {
			date.setMilliseconds(Math.floor(1000 * calendar.fractionalSecond));
		}
		var timezone;
		var unknownTimezone;
		var localTimezone = - date.getTimezoneOffset();
		if (Jsonix.Util.NumberUtils.isInteger(calendar.timezone))
		{
			timezone = calendar.timezone;
			unknownTimezone = false;
		}
		else
		{
			// Unknown timezone
			timezone = localTimezone;
			unknownTimezone = true;
		}
		//
		var result = new Date(date.getTime() + (60000 * (- timezone + localTimezone)));
		if (unknownTimezone)
		{
			// null denotes "unknown timezone"
			result.originalTimezone = null;
		}
		else
		{
			result.originalTimezone = calendar.timezone;
		}
		return result;
	},
	print : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureDate(value);
		var timezone;
		var localTimezone = - value.getTimezoneOffset();
		var correctedValue;
		// If original time zone was unknown, print the given value without
		// the timezone
		if (value.originalTimezone === null)
		{
			return this.printDateTime(new Jsonix.XML.Calendar({
				year : value.getFullYear(),
				month : value.getMonth() + 1,
				day : value.getDate(),
				hour : value.getHours(),
				minute : value.getMinutes(),
				second : value.getSeconds(),
				fractionalSecond : (value.getMilliseconds() / 1000)
			}));
		}
		else
		{
			// If original timezone was known, correct and print the value with the timezone
			if (Jsonix.Util.NumberUtils.isInteger(value.originalTimezone))
			{
				timezone = value.originalTimezone;
				correctedValue = new Date(value.getTime() - (60000 * ( - timezone + localTimezone)));
			}
			// If original timezone was not specified, do not correct and use the local time zone
			else
			{
				timezone = localTimezone;
				correctedValue = value;
			}
			var x = this.printDateTime(new Jsonix.XML.Calendar({
				year : correctedValue.getFullYear(),
				month : correctedValue.getMonth() + 1,
				day : correctedValue.getDate(),
				hour : correctedValue.getHours(),
				minute : correctedValue.getMinutes(),
				second : correctedValue.getSeconds(),
				fractionalSecond : (correctedValue.getMilliseconds() / 1000),
				timezone: timezone
			}));
			return x;
		}
	},
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isDate(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.DateTimeAsDate'
});
Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE = new Jsonix.Schema.XSD.DateTimeAsDate();
Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE);
