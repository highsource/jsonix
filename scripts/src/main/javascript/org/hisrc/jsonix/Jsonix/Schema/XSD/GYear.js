Jsonix.Schema.XSD.GYear = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GYear',
	typeName : Jsonix.Schema.XSD.qname('gYear'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GYear',
	
	parse : function(value, context, input, scope) {
		var gYearExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GYEAR_PATTERN + "$");
		var results = value.match(gYearExpression);
		if (results !== null) {
			var splitedGYear = {
				year : parseInt(results[1], 10),
				timezone : this.parseTimeZoneString(results[5]),
				date : this.xmlCalendarToDate(results[1], "01", "01", "00", "00", "00", results[5])
			};
			return splitedGYear;
		}
		throw new Error('Value [' + value + '] does not match the gYear pattern.');
	},

	print : function(value, context, input, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var year = undefined;
		var timezone = undefined;

		if (value instanceof Date) {
			year = value.getFullYear();
			timezone = value.getTimezoneOffset() * -1;
		} else {
			Jsonix.Util.Ensure.ensureInteger(value.year);
			year = value.year;
			timezone = value.timezone;
		}
		
		// TODO: validation_issue (timezone range)
		if (parseInt(timezone,10) < -14 * 60 || parseInt(timezone,10) > 14 * 60) {
			throw new Error('Timezone must not be <> -/+ ' + (14 * 60));
		}
		
		// TODO: validation_issue (signedYear)
		return this.printSignedYear(year) + this.printTimeZoneString(timezone);
	}
});
Jsonix.Schema.XSD.GYear.INSTANCE = new Jsonix.Schema.XSD.GYear();
Jsonix.Schema.XSD.GYear.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GYear.INSTANCE);