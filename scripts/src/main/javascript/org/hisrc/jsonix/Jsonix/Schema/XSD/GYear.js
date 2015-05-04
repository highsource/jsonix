Jsonix.Schema.XSD.GYear = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GYear',
	typeName : Jsonix.Schema.XSD.qname('gYear'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GYear',

	parse : function(value, context, input, scope) {
		var returnValue = this.splitGYear(value);
		returnValue.toString = function() {
			return "EmptyXMLElement. Call embedded 'year' or 'timezone' property";
		};

		return returnValue;
	},

	print : function(value, context, output, scope) {
		return "gYear.print " + JSON.stringify(value);
	},

	reprint : function(value, context, output, scope) {
		// TODO: confirm this
		if (value.year === undefined || isNaN(value.year) || value.year === 0) {
			throw new Error('Value [' + value + '] can\'t be converted to gYear ');
		}
		return this.printYear(value.year) + this.printTimeZoneString(value.timezone);
	},

	/**
	 * @param {string}
	 *            year datetype in ISO 8601 format
	 * @returns {object} pair of year, timestamp properties as a number
	 * @throws {Error}
	 *             if the datetype is not valid
	 * 
	 */
	splitGYear : function(value) {

		var gYearExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GYEAR_PATTERN + "$");
		var results = value.match(gYearExpression);

		if (results !== null) {
			var splitedGYear = {
				year : parseInt(results[1], 10),
				timezone : this.convertTimeZoneString(results[5])
			};
			return splitedGYear;
		} else {
			throw new Error('Value [' + value + '] does not match the gYear pattern.');
		}
	}

});
Jsonix.Schema.XSD.GYear.INSTANCE = new Jsonix.Schema.XSD.GYear();
Jsonix.Schema.XSD.GYear.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GYear.INSTANCE);