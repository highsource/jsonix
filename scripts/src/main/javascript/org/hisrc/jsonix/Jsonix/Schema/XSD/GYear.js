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
		// TODO we have to validate the value HERE
		//date might be an optional argument 
		// see documentation pdf site 3
		if (value instanceof Date) {
			//this must be fixed (timeZoneOffset is *-1)
			return this.printSignedYear(value.getFullYear()) + this.printTimeZoneString(value.getTimezoneOffset());
		}
		//TODO
		//possible less reduntant sollution ensure.isDate() || ensure.isXmlGregorianDate() validation else -> error
		Jsonix.Util.Ensure.ensureInteger(value.year);
		return this.printSignedYear(value.year) + this.printTimeZoneString(value.timezone);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.GYear'
});
Jsonix.Schema.XSD.GYear.INSTANCE = new Jsonix.Schema.XSD.GYear();
Jsonix.Schema.XSD.GYear.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GYear.INSTANCE);