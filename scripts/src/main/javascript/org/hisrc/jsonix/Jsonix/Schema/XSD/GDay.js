Jsonix.Schema.XSD.GDay = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GDay',
	typeName : Jsonix.Schema.XSD.qname('gDay'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GDay',

	parse : function(value, context, input, scope) {
		var returnValue = this.splitGDay(value);
		returnValue.toString = function() {
			return "EmptyXMLElement. Call embedded 'day' or 'timezone' property";
		};
		return returnValue;
	},

	/**
	 * @param {string}
	 *            day datetype in ISO 8601 format
	 * @returns {object} pair of dey, timestamp properties as a number
	 * @throws {Error}
	 *             if the datetype is not valid
	 * 
	 */
	splitGDay : function(value) {

		var gDayExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GDAY_PATTERN + "$");
		var results = value.match(gDayExpression);

		if (results !== null) {
			var splitedGYDay = {
				day : parseInt(results[2], 10),
				timezone : this.parseTimeZoneString(results[3])
			};

			return splitedGYDay;
		}

		throw new Error('Value [' + value + '] doesn\'t match the gDay pattern.');
	}
});
Jsonix.Schema.XSD.GDay.INSTANCE = new Jsonix.Schema.XSD.GDay();
Jsonix.Schema.XSD.GDay.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GDay.INSTANCE);