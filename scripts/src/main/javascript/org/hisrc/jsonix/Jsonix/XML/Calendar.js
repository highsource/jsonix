Jsonix.XML.Calendar = Jsonix.Class({
	year : NaN,
	month : NaN,
	day : NaN,
	hour : NaN,
	minute : NaN,
	second : NaN,
	fractionalSecond : NaN,
	timezone : NaN,
	date : null,
	initialize : function(data) {
		Jsonix.Util.Ensure.ensureObject(data);
		// Year
		if (Jsonix.Util.Type.exists(data.year)) {
			Jsonix.Util.Ensure.ensureInteger(data.year);
			Jsonix.XML.Calendar.validateYear(data.year);
			this.year = data.year;
		} else {
			this.year = NaN;
		}
		// Month
		if (Jsonix.Util.Type.exists(data.month)) {
			Jsonix.Util.Ensure.ensureInteger(data.month);
			Jsonix.XML.Calendar.validateMonth(data.month);
			this.month = data.month;
		} else {
			this.month = NaN;
		}
		// Day
		if (Jsonix.Util.Type.exists(data.day)) {
			Jsonix.Util.Ensure.ensureInteger(data.day);
			if (Jsonix.Util.NumberUtils.isInteger(data.year) && Jsonix.Util.NumberUtils.isInteger(data.month)) {
				Jsonix.XML.Calendar.validateYearMonthDay(data.year, data.month, data.day);
			} else if (Jsonix.Util.NumberUtils.isInteger(data.month)) {
				Jsonix.XML.Calendar.validateMonthDay(data.month, data.day);
			} else {
				Jsonix.XML.Calendar.validateDay(data.day);
			}
			this.day = data.day;
		} else {
			this.day = NaN;
		}
		// Hour
		if (Jsonix.Util.Type.exists(data.hour)) {
			Jsonix.Util.Ensure.ensureInteger(data.hour);
			Jsonix.XML.Calendar.validateHour(data.hour);
			this.hour = data.hour;
		} else {
			this.hour = NaN;
		}
		// Minute
		if (Jsonix.Util.Type.exists(data.minute)) {
			Jsonix.Util.Ensure.ensureInteger(data.minute);
			Jsonix.XML.Calendar.validateMinute(data.minute);
			this.minute = data.minute;
		} else {
			this.minute = NaN;
		}
		// Second
		if (Jsonix.Util.Type.exists(data.second)) {
			Jsonix.Util.Ensure.ensureInteger(data.second);
			Jsonix.XML.Calendar.validateSecond(data.second);
			this.second = data.second;
		} else {
			this.second = NaN;
		}
		// Fractional second
		if (Jsonix.Util.Type.exists(data.fractionalSecond)) {
			Jsonix.Util.Ensure.ensureNumber(data.fractionalSecond);
			Jsonix.XML.Calendar.validateFractionalSecond(data.fractionalSecond);
			this.fractionalSecond = data.fractionalSecond;
		} else {
			this.fractionalSecond = NaN;
		}
		// Timezone
		if (Jsonix.Util.Type.exists(data.timezone)) {
			if (Jsonix.Util.Type.isNaN(data.timezone)) {
				this.timezone = NaN;
			} else {
				Jsonix.Util.Ensure.ensureInteger(data.timezone);
				Jsonix.XML.Calendar.validateTimezone(data.timezone);
				this.timezone = data.timezone;
			}
		} else {
			this.timezone = NaN;
		}

		var initialDate = new Date(0);
		initialDate.setUTCFullYear(this.year || 1970);
		initialDate.setUTCMonth(this.month - 1 || 0);
		initialDate.setUTCDate(this.day || 1);
		initialDate.setUTCHours(this.hour || 0);
		initialDate.setUTCMinutes(this.minute || 0);
		initialDate.setUTCSeconds(this.second || 0);
		initialDate.setUTCMilliseconds((this.fractionalSecond || 0) * 1000);
		var timezoneOffset = -60000 * (this.timezone || 0);
		this.date = new Date(initialDate.getTime() + timezoneOffset);
	},
	CLASS_NAME : "Jsonix.XML.Calendar"
});
Jsonix.XML.Calendar.MIN_TIMEZONE = -14 * 60;
Jsonix.XML.Calendar.MAX_TIMEZONE = 14 * 60;
Jsonix.XML.Calendar.DAYS_IN_MONTH = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
Jsonix.XML.Calendar.fromObject = function(object) {
	Jsonix.Util.Ensure.ensureObject(object);
	if (Jsonix.Util.Type.isString(object.CLASS_NAME) && object.CLASS_NAME === 'Jsonix.XML.Calendar') {
		return object;
	}
	return new Jsonix.XML.Calendar(object);
};
Jsonix.XML.Calendar.validateYear = function(year) {
	if (year === 0) {
		throw new Error('Invalid year [' + year + ']. Year must not be [0].');
	}
};
Jsonix.XML.Calendar.validateMonth = function(month) {
	if (month < 1 || month > 12) {
		throw new Error('Invalid month [' + month + ']. Month must be in range [1, 12].');
	}
};
Jsonix.XML.Calendar.validateDay = function(day) {
	if (day < 1 || day > 31) {
		throw new Error('Invalid day [' + day + ']. Day must be in range [1, 31].');
	}
};
Jsonix.XML.Calendar.validateMonthDay = function(month, day) {
	Jsonix.XML.Calendar.validateMonth(month);
	var maxDaysInMonth = Jsonix.XML.Calendar.DAYS_IN_MONTH[month - 1];
	if (day < 1 || day > Jsonix.XML.Calendar.DAYS_IN_MONTH[month - 1]) {
		throw new Error('Invalid day [' + day + ']. Day must be in range [1, ' + maxDaysInMonth + '].');
	}
};
Jsonix.XML.Calendar.validateYearMonthDay = function(year, month, day) {
	// #93 TODO proper validation of 28/29 02
	Jsonix.XML.Calendar.validateYear(year);
	Jsonix.XML.Calendar.validateMonthDay(month, day);
};
Jsonix.XML.Calendar.validateHour = function(hour) {
	if (hour < 0 || hour > 23) {
		throw new Error('Invalid hour [' + hour + ']. Hour must be in range [0, 23].');
	}
};
Jsonix.XML.Calendar.validateMinute = function(minute) {
	if (minute < 0 || minute > 59) {
		throw new Error('Invalid minute [' + minute + ']. Minute must be in range [0, 59].');
	}
};
Jsonix.XML.Calendar.validateSecond = function(second) {
	if (second < 0 || second > 59) {
		throw new Error('Invalid second [' + second + ']. Second must be in range [0, 59].');
	}
};
Jsonix.XML.Calendar.validateFractionalSecond = function(fractionalSecond) {
	if (fractionalSecond < 0 || fractionalSecond > 59) {
		throw new Error('Invalid fractional second [' + fractionalSecond + ']. Fractional second must be in range [0, 1).');
	}
};
Jsonix.XML.Calendar.validateTimezone = function(timezone) {
	if (timezone < Jsonix.XML.Calendar.MIN_TIMEZONE || timezone > Jsonix.XML.Calendar.MAX_TIMEZONE) {
		throw new Error('Invalid timezone [' + timezone + ']. Timezone must not be in range [' + Jsonix.XML.Calendar.MIN_TIMEZONE + ', ' + Jsonix.XML.Calendar.MAX_TIMEZONE + '].');
	}
};