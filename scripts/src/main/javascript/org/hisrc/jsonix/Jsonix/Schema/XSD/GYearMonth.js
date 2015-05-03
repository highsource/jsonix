Jsonix.Schema.XSD.GYearMonth = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GYearMonth',
	typeName : Jsonix.Schema.XSD.qname('gYearMonth'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GYearMonth',

	parse : function(value, context, input, scope) {
		var returnValue = this.splitGYearMonth(value);
		returnValue.toString = function() {
			return "EmptyXMLElement. Call embedded 'year', 'month' or 'timezone' property";
		};

		return returnValue;
	},

	/**
	 * @param {string}
	 *            yearmonth datetype in ISO 8601 format
	 * @returns {object} of year, month, timestamp properties as a number
	 * @throws {Error}
	 *             if the datetype is not valid
	 * 
	 */
	splitGYearMonth : function(value) {

		var gYearMonthExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GYEAR_MONTH_PATTERN + "$");
		var results = value.match(gYearMonthExpression);

		if (results !== null) {
			var splitedGYearMonth = {
				year : parseInt(results[1], 10),
				month : parseInt(results[5], 10),
				timezone : this.convertTimeZoneString(results[7])
			};

			return splitedGYearMonth;
		}

		throw new Error('Value [' + value + '] doesn\'t match the gYear pattern.');
	}

});
Jsonix.Schema.XSD.GYearMonth.INSTANCE = new Jsonix.Schema.XSD.GYearMonth();
Jsonix.Schema.XSD.GYearMonth.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GYearMonth.INSTANCE);