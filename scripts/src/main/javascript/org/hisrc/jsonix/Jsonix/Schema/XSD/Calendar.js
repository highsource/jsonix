Jsonix.Schema.XSD.Calendar = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'Calendar',
	typeName : Jsonix.Schema.XSD.qname('calendar'),
	parse : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		if (text.match(new RegExp("^" + Jsonix.Schema.XSD.Calendar.DATETIME_PATTERN + "$"))) {
			return this.parseDateTime(text, context, input, scope);
		} else if (text.match(new RegExp("^" + Jsonix.Schema.XSD.Calendar.DATE_PATTERN + "$"))) {
			return this.parseDate(text, context, input, scope);
		} else if (text.match(new RegExp("^" + Jsonix.Schema.XSD.Calendar.TIME_PATTERN + "$"))) {
			return this.parseTime(text, context, input, scope);
		} else if (text.match(new RegExp("^" + Jsonix.Schema.XSD.Calendar.GYEAR_MONTH_PATTERN + "$"))) {
			return this.parseGYearMonth(text, context, input, scope);
		} else if (text.match(new RegExp("^" + Jsonix.Schema.XSD.Calendar.GYEAR_PATTERN + "$"))) {
			return this.parseGYear(text, context, input, scope);
		} else if (text.match(new RegExp("^" + Jsonix.Schema.XSD.Calendar.GMONTH_DAY_PATTERN + "$"))) {
			return this.parseGMonthDay(text, context, input, scope);
		} else if (text.match(new RegExp("^" + Jsonix.Schema.XSD.Calendar.GMONTH_PATTERN + "$"))) {
			return this.parseGMonth(text, context, input, scope);
		} else if (text.match(new RegExp("^" + Jsonix.Schema.XSD.Calendar.GDAY_PATTERN + "$"))) {
			return this.parseGDay(text, context, input, scope);
		} else {
			throw new Error('Value [' + text + '] does not match xs:dateTime, xs:date, xs:time, xs:gYearMonth, xs:gYear, xs:gMonthDay, xs:gMonth or xs:gDay patterns.');
		}
	},
	parseGYearMonth : function(value, context, input, scope) {
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
	parseGYear : function(value, context, input, scope) {
		var gYearExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GYEAR_PATTERN + "$");
		var results = value.match(gYearExpression);
		if (results !== null) {
			var data = {
				year : parseInt(results[1], 10),
				timezone : this.parseTimezoneString(results[5])
			};
			return new Jsonix.XML.Calendar(data);
		}
		throw new Error('Value [' + value + '] does not match the xs:gYear pattern.');
	},
	parseGMonthDay : function(value, context, input, scope) {
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
	parseGMonth : function(value, context, input, scope) {
		var gMonthExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GMONTH_PATTERN + "$");
		var results = value.match(gMonthExpression);
		if (results !== null) {
			var data = {
				month : parseInt(results[2], 10),
				timezone : this.parseTimezoneString(results[3])
			};
			return new Jsonix.XML.Calendar(data);
		}
		throw new Error('Value [' + value + '] does not match the xs:gMonth pattern.');
	},
	parseGDay : function(value, context, input, scope) {
		var gDayExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GDAY_PATTERN + "$");
		var results = value.match(gDayExpression);
		if (results !== null) {
			var data = {
				day : parseInt(results[2], 10),
				timezone : this.parseTimezoneString(results[3])
			};
			return new Jsonix.XML.Calendar(data);
		}
		throw new Error('Value [' + value + '] does not match the xs:gDay pattern.');
	},
	parseDateTime : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		var expression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.DATETIME_PATTERN + "$");
		var results = text.match(expression);
		if (results !== null) {
			var data = {
				year : parseInt(results[1], 10),
				month : parseInt(results[5], 10),
				day : parseInt(results[7], 10),
				hour : parseInt(results[9], 10),
				minute : parseInt(results[10], 10),
				second : parseInt(results[11], 10),
				fractionalSecond : (results[12] ? parseFloat(results[12]) : 0),
				timezone : this.parseTimezoneString(results[14])
			};
			return new Jsonix.XML.Calendar(data);
		}
		throw new Error('Value [' + text + '] does not match the xs:date pattern.');
	},
	parseDate : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		var expression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.DATE_PATTERN + "$");
		var results = text.match(expression);
		if (results !== null) {
			var data = {
				year : parseInt(results[1], 10),
				month : parseInt(results[5], 10),
				day : parseInt(results[7], 10),
				timezone : this.parseTimezoneString(results[9])
			};
			return new Jsonix.XML.Calendar(data);
		}
		throw new Error('Value [' + text + '] does not match the xs:date pattern.');
	},
	parseTime : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		var expression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.TIME_PATTERN + "$");
		var results = text.match(expression);
		if (results !== null) {
			var data = {
				hour : parseInt(results[1], 10),
				minute : parseInt(results[2], 10),
				second : parseInt(results[3], 10),
				fractionalSecond : (results[4] ? parseFloat(results[4]) : 0),
				timezone : this.parseTimezoneString(results[6])
			};
			return new Jsonix.XML.Calendar(data);
		}
		throw new Error('Value [' + text + '] does not match the xs:time pattern.');
	},
	parseTimezoneString : function(text) {
		// (('+' | '-') hh ':' mm) | 'Z'
		if (!Jsonix.Util.Type.isString(text)) {
			return NaN;
		} else if (text === '') {
			return NaN;
		} else if (text === 'Z') {
			return 0;
		} else if (text === '+14:00') {
			return 14 * 60;
		} else if (text === '-14:00') {
			return -14 * 60;
		} else {
			var expression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + "$");
			var results = text.match(expression);
			if (results !== null) {
				var sign = results[1] === '+' ? 1 : -1;
				var hour = parseInt(results[4], 10);
				var minute = parseInt(results[5], 10);
				return sign * (hour * 60 + minute);
			}
			throw new Error('Value [' + text + '] does not match the timezone pattern.');
		}
	},
	print : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		if (Jsonix.Util.NumberUtils.isInteger(value.year) && Jsonix.Util.NumberUtils.isInteger(value.month) && Jsonix.Util.NumberUtils.isInteger(value.day) && Jsonix.Util.NumberUtils.isInteger(value.hour) && Jsonix.Util.NumberUtils.isInteger(value.minute) && Jsonix.Util.NumberUtils.isInteger(value.second)) {
			return this.printDateTime(value);
		} else if (Jsonix.Util.NumberUtils.isInteger(value.year) && Jsonix.Util.NumberUtils.isInteger(value.month) && Jsonix.Util.NumberUtils.isInteger(value.day)) {
			return this.printDate(value);
		} else if (Jsonix.Util.NumberUtils.isInteger(value.hour) && Jsonix.Util.NumberUtils.isInteger(value.minute) && Jsonix.Util.NumberUtils.isInteger(value.second)) {
			return this.printTime(value);
		} else if (Jsonix.Util.NumberUtils.isInteger(value.year) && Jsonix.Util.NumberUtils.isInteger(value.month)) {
			return this.printGYearMonth(value);
		} else if (Jsonix.Util.NumberUtils.isInteger(value.month) && Jsonix.Util.NumberUtils.isInteger(value.day)) {
			return this.printGMonthDay(value);
		} else if (Jsonix.Util.NumberUtils.isInteger(value.year)) {
			return this.printGYear(value);
		} else if (Jsonix.Util.NumberUtils.isInteger(value.month)) {
			return this.printGMonth(value);
		} else if (Jsonix.Util.NumberUtils.isInteger(value.day)) {
			return this.printGDay(value);
		} else {
			throw new Error('Value [' + value + '] is not recognized as dateTime, date or time.');
		}
	},
	printDateTime : function(value) {
		Jsonix.Util.Ensure.ensureObject(value);
		Jsonix.Util.Ensure.ensureInteger(value.year);
		Jsonix.Util.Ensure.ensureInteger(value.month);
		Jsonix.Util.Ensure.ensureInteger(value.day);
		Jsonix.Util.Ensure.ensureInteger(value.hour);
		Jsonix.Util.Ensure.ensureInteger(value.minute);
		Jsonix.Util.Ensure.ensureNumber(value.second);
		if (Jsonix.Util.Type.exists(value.fractionalString)) {
			Jsonix.Util.Ensure.ensureNumber(value.fractionalString);
		}
		if (Jsonix.Util.Type.exists(value.timezone) && !Jsonix.Util.Type.isNaN(value.timezone)) {
			Jsonix.Util.Ensure.ensureInteger(value.timezone);
		}
		var result = this.printDateString(value);
		result = result + 'T';
		result = result + this.printTimeString(value);
		if (Jsonix.Util.Type.exists(value.timezone)) {
			result = result + this.printTimezoneString(value.timezone);
		}
		return result;
	},
	printDate : function(value) {
		Jsonix.Util.Ensure.ensureObject(value);
		Jsonix.Util.Ensure.ensureNumber(value.year);
		Jsonix.Util.Ensure.ensureNumber(value.month);
		Jsonix.Util.Ensure.ensureNumber(value.day);
		if (Jsonix.Util.Type.exists(value.timezone) && !Jsonix.Util.Type.isNaN(value.timezone)) {
			Jsonix.Util.Ensure.ensureInteger(value.timezone);
		}
		var result = this.printDateString(value);
		if (Jsonix.Util.Type.exists(value.timezone)) {
			result = result + this.printTimezoneString(value.timezone);
		}
		return result;
	},
	printTime : function(value) {
		Jsonix.Util.Ensure.ensureObject(value);
		Jsonix.Util.Ensure.ensureNumber(value.hour);
		Jsonix.Util.Ensure.ensureNumber(value.minute);
		Jsonix.Util.Ensure.ensureNumber(value.second);
		if (Jsonix.Util.Type.exists(value.fractionalString)) {
			Jsonix.Util.Ensure.ensureNumber(value.fractionalString);
		}
		if (Jsonix.Util.Type.exists(value.timezone) && !Jsonix.Util.Type.isNaN(value.timezone)) {
			Jsonix.Util.Ensure.ensureInteger(value.timezone);
		}

		var result = this.printTimeString(value);
		if (Jsonix.Util.Type.exists(value.timezone)) {
			result = result + this.printTimezoneString(value.timezone);
		}
		return result;
	},
	printDateString : function(value) {
		Jsonix.Util.Ensure.ensureObject(value);
		Jsonix.Util.Ensure.ensureInteger(value.year);
		Jsonix.Util.Ensure.ensureInteger(value.month);
		Jsonix.Util.Ensure.ensureInteger(value.day);
		return (value.year < 0 ? ('-' + this.printYear(-value.year)) : this.printYear(value.year)) + '-' + this.printMonth(value.month) + '-' + this.printDay(value.day);
	},
	printTimeString : function(value) {
		Jsonix.Util.Ensure.ensureObject(value);
		Jsonix.Util.Ensure.ensureInteger(value.hour);
		Jsonix.Util.Ensure.ensureInteger(value.minute);
		Jsonix.Util.Ensure.ensureInteger(value.second);
		if (Jsonix.Util.Type.exists(value.fractionalSecond)) {
			Jsonix.Util.Ensure.ensureNumber(value.fractionalSecond);
		}
		var result = this.printHour(value.hour);
		result = result + ':';
		result = result + this.printMinute(value.minute);
		result = result + ':';
		result = result + this.printSecond(value.second);
		if (Jsonix.Util.Type.exists(value.fractionalSecond)) {
			result = result + this.printFractionalSecond(value.fractionalSecond);
		}
		return result;
	},
	printTimezoneString : function(value) {
		if (!Jsonix.Util.Type.exists(value) || Jsonix.Util.Type.isNaN(value)) {
			return '';
		} else {
			Jsonix.Util.Ensure.ensureInteger(value);

			var sign = value < 0 ? -1 : (value > 0 ? 1 : 0);
			var data = value * sign;
			var minute = data % 60;
			var hour = Math.floor(data / 60);

			var result;
			if (sign === 0) {
				return 'Z';
			} else {
				if (sign > 0) {
					result = '+';
				} else if (sign < 0) {
					result = '-';
				}
				result = result + this.printHour(hour);
				result = result + ':';
				result = result + this.printMinute(minute);
				return result;
			}
		}
	},
	printGDay : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var day = undefined;
		var timezone = undefined;

		if (value instanceof Date) {
			day = value.getDate();
		} else {
			Jsonix.Util.Ensure.ensureInteger(value.day);
			day = value.day;
			timezone = value.timezone;
		}
		Jsonix.XML.Calendar.validateDay(day);
		Jsonix.XML.Calendar.validateTimezone(timezone);
		return "---" + this.printDay(day) + this.printTimezoneString(timezone);
	},
	printGMonth : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var month = undefined;
		var timezone = undefined;

		if (value instanceof Date) {
			month = value.getMonth() + 1;
		} else {
			Jsonix.Util.Ensure.ensureInteger(value.month);
			month = value.month;
			timezone = value.timezone;
		}
		Jsonix.XML.Calendar.validateMonth(month);
		Jsonix.XML.Calendar.validateTimezone(timezone);
		return "--" + this.printMonth(month) + this.printTimezoneString(timezone);
	},
	printGMonthDay : function(value, context, output, scope) {
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
	},
	printGYear : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var year = undefined;
		var timezone = undefined;

		if (value instanceof Date) {
			year = value.getFullYear();
		} else {
			Jsonix.Util.Ensure.ensureInteger(value.year);
			year = value.year;
			timezone = value.timezone;
		}
		Jsonix.XML.Calendar.validateYear(year);
		Jsonix.XML.Calendar.validateTimezone(timezone);
		return this.printSignedYear(year) + this.printTimezoneString(timezone);
	},
	printGYearMonth : function(value, context, output, scope) {
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
	},
	printSignedYear : function(value) {
		return value < 0 ? ("-" + this.printYear(value * -1)) : (this.printYear(value));
	},
	printYear : function(value) {
		return this.printInteger(value, 4);
	},
	printMonth : function(value) {
		return this.printInteger(value, 2);
	},
	printDay : function(value) {
		return this.printInteger(value, 2);
	},
	printHour : function(value) {
		return this.printInteger(value, 2);
	},
	printMinute : function(value) {
		return this.printInteger(value, 2);
	},
	printSecond : function(value) {
		return this.printInteger(value, 2);
	},
	printFractionalSecond : function(value) {
		Jsonix.Util.Ensure.ensureNumber(value);
		if (value < 0 || value >= 1) {
			throw new Error('Fractional second [' + value + '] must be between 0 and 1.');
		} else if (value === 0) {
			return '';
		} else {
			var string = String(value);
			var dotIndex = string.indexOf('.');
			if (dotIndex < 0) {
				return '';
			} else {
				return string.substring(dotIndex);
			}
		}
	},
	printInteger : function(value, length) {
		Jsonix.Util.Ensure.ensureInteger(value);
		Jsonix.Util.Ensure.ensureInteger(length);
		if (length <= 0) {
			throw new Error('Length [' + value + '] must be positive.');
		}
		if (value < 0) {
			throw new Error('Value [' + value + '] must not be negative.');
		}
		var result = String(value);
		for (var i = result.length; i < length; i++) {
			result = '0' + result;
		}
		return result;
	},
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isObject(value) && ((Jsonix.Util.NumberUtils.isInteger(value.year) && Jsonix.Util.NumberUtils.isInteger(value.month) && Jsonix.Util.NumberUtils.isInteger(value.day)) || (Jsonix.Util.NumberUtils.isInteger(value.hour) && Jsonix.Util.NumberUtils.isInteger(value.minute) && Jsonix.Util.NumberUtils.isInteger(value.second)));
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.Calendar'
});

Jsonix.Schema.XSD.Calendar.YEAR_PATTERN = "-?([1-9][0-9]*)?((?!(0000))[0-9]{4})";
Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN = "Z|([\\-\\+])(((0[0-9]|1[0-3]):([0-5][0-9]))|(14:00))";
Jsonix.Schema.XSD.Calendar.MONTH_PATTERN = "(0[1-9]|1[0-2])";
Jsonix.Schema.XSD.Calendar.SINGLE_MONTH_PATTERN = "\\-\\-" + Jsonix.Schema.XSD.Calendar.MONTH_PATTERN;
Jsonix.Schema.XSD.Calendar.DAY_PATTERN = "(0[1-9]|[12][0-9]|3[01])";
Jsonix.Schema.XSD.Calendar.SINGLE_DAY_PATTERN = "\\-\\-\\-" + Jsonix.Schema.XSD.Calendar.DAY_PATTERN;
Jsonix.Schema.XSD.Calendar.GYEAR_PATTERN = "(" + Jsonix.Schema.XSD.Calendar.YEAR_PATTERN + ")" + "(" + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + ")?";
Jsonix.Schema.XSD.Calendar.GMONTH_PATTERN = "(" + Jsonix.Schema.XSD.Calendar.SINGLE_MONTH_PATTERN + ")" + "(" + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + ")?";
Jsonix.Schema.XSD.Calendar.GDAY_PATTERN = "(" + Jsonix.Schema.XSD.Calendar.SINGLE_DAY_PATTERN + ")" + "(" + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + ")?";
Jsonix.Schema.XSD.Calendar.GYEAR_MONTH_PATTERN = "(" + Jsonix.Schema.XSD.Calendar.YEAR_PATTERN + ")" + "-" + "(" + Jsonix.Schema.XSD.Calendar.DAY_PATTERN + ")" + "(" + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + ")?";
Jsonix.Schema.XSD.Calendar.GMONTH_DAY_PATTERN = "(" + Jsonix.Schema.XSD.Calendar.SINGLE_MONTH_PATTERN + ")" + "-" + "(" + Jsonix.Schema.XSD.Calendar.DAY_PATTERN + ")" + "(" + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + ")?";
Jsonix.Schema.XSD.Calendar.DATE_PART_PATTERN = "(" + Jsonix.Schema.XSD.Calendar.YEAR_PATTERN + ")" + "-" + "(" + Jsonix.Schema.XSD.Calendar.MONTH_PATTERN + ")" + "-" + "(" + Jsonix.Schema.XSD.Calendar.DAY_PATTERN + ")";
Jsonix.Schema.XSD.Calendar.TIME_PART_PATTERN = "([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])(\\.([0-9]+))?";
Jsonix.Schema.XSD.Calendar.TIME_PATTERN = Jsonix.Schema.XSD.Calendar.TIME_PART_PATTERN + '(' + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + ')?';
Jsonix.Schema.XSD.Calendar.DATE_PATTERN = Jsonix.Schema.XSD.Calendar.DATE_PART_PATTERN + '(' + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + ')?';
Jsonix.Schema.XSD.Calendar.DATETIME_PATTERN = Jsonix.Schema.XSD.Calendar.DATE_PART_PATTERN + 'T' + Jsonix.Schema.XSD.Calendar.TIME_PART_PATTERN + '(' + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + ')?';
Jsonix.Schema.XSD.Calendar.INSTANCE = new Jsonix.Schema.XSD.Calendar();
Jsonix.Schema.XSD.Calendar.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Calendar.INSTANCE);