Jsonix.Schema.XSD.Date = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'Date',
	typeName : Jsonix.Schema.XSD.qname('date'),
	parse : function(value) {
		var calendar = this.parseDate(value);
		var date = new Date();
		date.setFullYear(calendar.year);
		date.setMonth(calendar.month - 1);
		date.setDate(calendar.day);
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);
		if (Jsonix.Util.Type.isNumber(calendar.fractionalSecond)) {
			date.setMilliseconds(Math.floor(1000 * calendar.fractionalSecond));
		}
		var timezoneOffset;
		var unknownTimezone;
		var localTimezoneOffset = date.getTimezoneOffset();
		if (Jsonix.Util.NumberUtils.isInteger(calendar.timezone))
		{
			timezoneOffset = calendar.timezone;
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
			result.originalTimezoneOffset = null;
		}
		else
		{
			result.originalTimezoneOffset = timezoneOffset;
		}
		return result;
	},
	print : function(value) {
		Jsonix.Util.Ensure.ensureDate(value);
		var localDate = new Date(value.getTime());
		localDate.setHours(0);
		localDate.setMinutes(0);
		localDate.setSeconds(0);
		localDate.setMilliseconds(0);
		
		// Original timezone is unknown
		if (value.originalTimezoneOffset === null)
		{
			return this.printDate(new Jsonix.XML.Calendar({
				year : value.getFullYear(),
				month : value.getMonth() + 1,
				day : value.getDate()
			}));
		}
		else
		{
			// If original timezone was known, correct and print the value with the timezone
			if (Jsonix.Util.NumberUtils.isInteger(value.originalTimezoneOffset))
			{
				var correctedValue = new Date(value.getTime() - (60000 * (value.originalTimezoneOffset - value.getTimezoneOffset())));
				return this.printDate(new Jsonix.XML.Calendar({
					year : correctedValue.getFullYear(),
					month : correctedValue.getMonth() + 1,
					day : correctedValue.getDate(),
					timezone : value.originalTimezoneOffset
				}));
			}
			// If original timezone was not specified, do not correct and use the local time zone
			else
			{
				// We assume that the difference between the date value and local midnight
				// should be interpreted as a timezone offset.
				// In case there's no difference, we assume default/unknown timezone
				var localTimezoneOffset = value.getTime() - localDate.getTime();
				if (localTimezoneOffset === 0) {
					return this.printDate(new Jsonix.XML.Calendar({
						year : value.getFullYear(),
						month : value.getMonth() + 1,
						day : value.getDate()
					}));
				} else {
					var timezoneOffset = localTimezoneOffset + (60000 * value.getTimezoneOffset());
					if (timezoneOffset <= 43200000) {
						return this.printDate(new Jsonix.XML.Calendar({
							year : value.getFullYear(),
							month : value.getMonth() + 1,
							day : value.getDate(),
							timezone : Math.floor(timezoneOffset / 60000)
						}));
					} else {
						var nextDay = new Date(value.getTime() + 86400000);
						return this.printDate(new Jsonix.XML.Calendar({
							year : nextDay.getFullYear(),
							month : nextDay.getMonth() + 1,
							day : nextDay.getDate(),
							timezone : (Math.floor(timezoneOffset / 60000) - 1440)
						}));
					}
				}
			}
		}
	},
	isInstance : function(value) {
		return Jsonix.Util.Type.isDate(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.Date'
});
Jsonix.Schema.XSD.Date.INSTANCE = new Jsonix.Schema.XSD.Date();
Jsonix.Schema.XSD.Date.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Date.INSTANCE);