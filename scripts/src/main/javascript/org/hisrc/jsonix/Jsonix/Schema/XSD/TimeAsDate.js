Jsonix.Schema.XSD.TimeAsDate = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'TimeAsDate',
	typeName : Jsonix.Schema.XSD.qname('time'),
	parse : function(value, context, input, scope) {
		var calendar = this.parseTime(value);
		var date = new Date();
		date.setFullYear(1970);
		date.setMonth(0);
		date.setDate(1);
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
		var result = new Date(date.getTime() + (60000 * ( - timezone + localTimezone)));
		if (unknownTimezone)
		{
			// null denotes "unknown timezone"
			result.originalTimezone = null;
		}
		else
		{
			result.originalTimezone = timezone;
		}
		return result;
	},
	print : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureDate(value);
		var time = value.getTime();
		if (time <= -86400000 && time >= 86400000) {
			throw new Error('Invalid time [' + value + '].');
		}
		// Original timezone was unknown, just use current time, no timezone
		if (value.originalTimezone === null)
		{
			return this.printTime(new Jsonix.XML.Calendar({
				hour : value.getHours(),
				minute : value.getMinutes(),
				second : value.getSeconds(),
				fractionalSecond : (value.getMilliseconds() / 1000)
			}));
		}
		else
		{
			var correctedValue;
			var timezone;
			var localTimezone = - value.getTimezoneOffset();
			if (Jsonix.Util.NumberUtils.isInteger(value.originalTimezone))
			{
				timezone = value.originalTimezone;
				correctedValue = new Date(value.getTime() - (60000 * ( - timezone + localTimezone)));
			}
			else
			{
				timezone = localTimezone;
				correctedValue = value;
			}
			var correctedTime = correctedValue.getTime();
			if (correctedTime >= (- localTimezone * 60000)) {
				return this.printTime(new Jsonix.XML.Calendar({
					hour : correctedValue.getHours(),
					minute : correctedValue.getMinutes(),
					second : correctedValue.getSeconds(),
					fractionalSecond : (correctedValue.getMilliseconds() / 1000),
					timezone: timezone
				}));
			} else {
				var timezoneHours = Math.ceil(-correctedTime / 3600000);
				
				var correctedTimeInSeconds = correctedValue.getSeconds() +
					correctedValue.getMinutes() * 60 +
					correctedValue.getHours() * 3600 +
					timezoneHours * 3600 -
					timezone * 60;
				
				return this.printTime(new Jsonix.XML.Calendar({
					hour : correctedTimeInSeconds % 86400,
					minute : correctedTimeInSeconds % 3600,
					second : correctedTimeInSeconds % 60,
					fractionalSecond : (correctedValue.getMilliseconds() / 1000),
					timezone : timezoneHours * 60
				}));
			}
		}
	},
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isDate(value) && value.getTime() > -86400000 && value.getTime() < 86400000;
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.TimeAsDate'
});
Jsonix.Schema.XSD.TimeAsDate.INSTANCE = new Jsonix.Schema.XSD.TimeAsDate();
Jsonix.Schema.XSD.TimeAsDate.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.TimeAsDate.INSTANCE);