// REVIEW AV: GYear extends Calendar
Jsonix.Schema.XSD.GYear = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GYear',
	typeName : Jsonix.Schema.XSD.qname('gYear'),
	// TODO: find appropriate place for the regex (e.g.
	// Jsonix.XML.Calendar.regex ?)
	// REVIEW AV: I've first moved as constants to the Calendar 

	parse : function(value, context, input, scope) {
		var returnValue = this.splitGYear(value);
		returnValue.toString = function() {
			return "EmptyXMLElement. Call embedded 'year' or 'timezone' property";
		};

		return returnValue;
	},

	/**
	 * @param {string}
	 *            year datetype in ISO 8601 format
	 * @returns {object} pair of date, timestamp properties as a number
	 * @throws {Error}
	 *             if the datetype is not valid
	 * 
	 */
	splitGYear : function(value) {

		var gYearExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GYEAR_PATTERN + "$");
		var results = value.match(gYearExpression);

		// TODO: underscored functions and properties are for testing proposes
		// only. Must be vanished in the min.js

		if (results !== null) {
			var splitedGYear = {
				// REVIEW AV: Decimal radix
				year : parseInt(results[1], 10),
				_timezone : results[5],
				timezone : this.parseTimeZoneString(results[5])
			// TODO: parseTimeZoneString() function exists also in CALENDAR
			// but inverts the sign, why?
			};

			return splitedGYear;
		}

		throw new Error('Value [' + value + '] doesn\'t match the gYear pattern.');
	},

	parseTimeZoneString : function(text) {
		if (text === "Z" || !Jsonix.Util.Type.exists(text)) {
			return 0;
		}

		var splittedTimeZoneChunks = text.split(":");
		return - (parseInt(splittedTimeZoneChunks[0], 10) * 60 + parseInt(splittedTimeZoneChunks[1], 10));
	},

	// TODO: underscored functions and properties are for testing proposes only.
	// Must be vanished in the min.js

	_validateGYear : function(value) {
		var gYearExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GYEAR_PATTERN + "$");

		if (!gYearExpression.test(value)) {
			throw new Error('Value [' + value + '] doesn\'t match the gYear pattern.');
		}
	},

	_validateYear : function(value) {
		var yearExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.YEAR_PATTERN + "$");

		if (!yearExpression.test(value)) {
			throw new Error('Value [' + value + '] doesn\'t match the year pattern.');
		}
	},

	_validateTimeZone : function(value) {
		var timeZoneExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + "$");

		if (!timeZoneExpression.test(value)) {
			throw new Error('Value [' + value + '] doesn\'t match the time zone pattern.');
		}
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.GYear'
});
Jsonix.Schema.XSD.GYear.INSTANCE = new Jsonix.Schema.XSD.GYear();
Jsonix.Schema.XSD.GYear.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GYear.INSTANCE);