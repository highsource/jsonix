Jsonix.Schema.XSD.DateTime = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'DateTime',
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
		var timezoneOffset;
		var unknownTimezone;
		var localTimezoneOffset = date.getTimezoneOffset();
		if (Jsonix.Util.NumberUtils.isInteger(calendar.timezone))
		{
			timezoneOffset = - calendar.timezone;
			unknownTimezone = false;
		}
		else
		{
			// Unknown timezone
			timezoneOffset = localTimezoneOffset;
			unknownTimezone = true;
		}
		//
		var result = new Date(date.getTime() + (60000 * (timezoneOffset - localTimezoneOffset)));
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
		var timezoneOffset;
		var localTimezoneOffset = value.getTimezoneOffset();
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
				timezoneOffset = - value.originalTimezone;
				correctedValue = new Date(value.getTime() - (60000 * (timezoneOffset - localTimezoneOffset)));
			}
			// If original timezone was not specified, do not correct and use the local time zone
			else
			{
				timezoneOffset = localTimezoneOffset;
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
				timezone: - timezoneOffset
			}));
			return x;
		}
	},
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isDate(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.DateTime'
});
Jsonix.Schema.XSD.DateTime.INSTANCE = new Jsonix.Schema.XSD.DateTime();
Jsonix.Schema.XSD.DateTime.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.DateTime.INSTANCE);
