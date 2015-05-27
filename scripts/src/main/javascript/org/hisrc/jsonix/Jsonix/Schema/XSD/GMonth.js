Jsonix.Schema.XSD.GMonth = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GMonth',
	typeName : Jsonix.Schema.XSD.qname('gMonth'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GMonth',

	parse : function(value, context, input, scope) {
		var returnValue = this.splitGMonth(value);
		returnValue.toString = function() {
			return "EmptyXMLElement. Call embedded 'month' or 'timezone' property";
		};

		return returnValue;
	},

	reprint : function(value, context, input, scope) {
		if (value instanceof Date) {
			// TODO: timezoneOffset -> timezone
			return "--" + this.printMonth(value.getMonth() + 1);
		}
		return "--" + this.printMonth(value.month);

	},

	/**
	 * @param {string}
	 *            month datetype in ISO 8601 format
	 * @returns {object} pair of month, timestamp properties as a number, date
	 *          object
	 * @throws {Error}
	 *             if the datetype is not valid
	 * 
	 */
	splitGMonth : function(value) {
		var gMonthExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GMONTH_PATTERN + "$");
		var results = value.match(gMonthExpression);

		if (results !== null) {

			var gmt = "";
			if (Jsonix.Util.Type.exists(results[3])) {
				var splittedTimeZones = results[3].split(":");
				gmt = " GMT" + splittedTimeZones[0] + splittedTimeZones[1];
			}

			var splitedGMonth = {
				month : parseInt(results[2], 10),
				timezone : this.parseTimeZoneString(results[3]),
				date : new Date(results[2] + " 01 1970 00:00:00" + gmt)
			};

			return splitedGMonth;
		}

		throw new Error('Value [' + value + '] doesn\'t match the gMonth pattern.');
	}
});
Jsonix.Schema.XSD.GMonth.INSTANCE = new Jsonix.Schema.XSD.GMonth();
Jsonix.Schema.XSD.GMonth.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GMonth.INSTANCE);