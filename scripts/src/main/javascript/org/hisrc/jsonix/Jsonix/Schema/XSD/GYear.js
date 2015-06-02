Jsonix.Schema.XSD.GYear = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GYear',
	typeName : Jsonix.Schema.XSD.qname('gYear'),
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
		} else {
			throw new Error('Value [' + value + '] does not match the gYear pattern.');
		}
	},
	print : function(value) {
		Jsonix.Util.Ensure.ensureObject(value);
		var year = undefined;
		var timezone = undefined;
				year = value.getFullYear();
			timezone = value.getTimezoneOffset() * -1;
		}else {
			Jsonix.Util.Ensure.ensureInteger(value.year);
			year = value.year;
			timezone = value.timezone;
		}
		//duschata quickfix to run GH73Print.js test
		// must be placed in --> Calendar.printTimeZoneString()
		// but has side effects in org.hisrc.jsonix.test.JsonixTest
		if (timezone < -14 * 60 || timezone > 14 * 60) {
			throw new Error('Value ' + value + ' must not be <> -/+ ' + (14 * 60));
		}
		return this.printSignedYear(year) + this.printTimeZoneString(timezone);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.GYear'
});
Jsonix.Schema.XSD.GYear.INSTANCE = new Jsonix.Schema.XSD.GYear();
Jsonix.Schema.XSD.GYear.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GYear.INSTANCE);