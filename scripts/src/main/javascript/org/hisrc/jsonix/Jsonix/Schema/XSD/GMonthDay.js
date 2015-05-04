Jsonix.Schema.XSD.GMonthDay = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GMonthDay',
	typeName : Jsonix.Schema.XSD.qname('gMonthDay'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GMonthDay',

	parse : function(value, context, input, scope) {
		var returnValue = this.splitGMonthDay(value);
		returnValue.toString = function() {
			return "EmptyXMLElement. Call embedded 'month', 'day' or 'timezone' property";
		};

		return returnValue;
	},

	/**
	 * @param {string}
	 *            monthday datetype in ISO 8601 format
	 * @returns {object} pair of dey, timestamp properties as a number
	 * @throws {Error}
	 *             if the datetype is not valid
	 * 
	 */
	splitGMonthDay : function(value) {

		var gMonthDayExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GMONTH_DAY_PATTERN + "$");
		var results = value.match(gMonthDayExpression);

		if (results !== null) {
			var splitedGMonthDay = {
				month : parseInt(results[2], 10),
				day : parseInt(results[3], 10),
				timezone : this.convertTimeZoneString(results[5])
			};

			var shortMonths = [ 4, 6, 9, 11 ];
			var validationFailed = false;

			if (splitedGMonthDay.month === 2 && splitedGMonthDay.day > 29) {
				validationFailed = true;
			} else {
				for ( var shortMonth in shortMonths) {
					if (splitedGMonthDay.month === shortMonths[shortMonth] && splitedGMonthDay.day > 30) {
						validationFailed = true;
						break;
					}
				}
			}

			if (validationFailed === false) {
				return splitedGMonthDay;
			}
		}

		throw new Error('Value [' + value + '] doesn\'t match the gMonthDay pattern.');
	}
});
Jsonix.Schema.XSD.GMonthDay.INSTANCE = new Jsonix.Schema.XSD.GMonthDay();
Jsonix.Schema.XSD.GMonthDay.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GMonthDay.INSTANCE);