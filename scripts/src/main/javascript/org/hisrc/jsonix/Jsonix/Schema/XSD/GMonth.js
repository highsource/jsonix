Jsonix.Schema.XSD.GMonth = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GMonth',
	typeName : Jsonix.Schema.XSD.qname('gMonth'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GMonth',

	parse : function(value, context, input, scope) {
		var gMonthExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GMONTH_PATTERN + "$");
		var results = value.match(gMonthExpression);
		if (results !== null) {
			var data = {
				month : parseInt(results[2], 10),
				timezone : this.parseTimezoneString(results[3])
			};
			return new Jsonix.XML.Calendar(data);
		}
		throw new Error('Value [' + value + '] does not match the xs:gMonth pattern.');
	},

	print : function(value, context, input, scope) {
		Jsonix.Util.Ensure.ensureObject(value);
		var month = undefined;
		var timezone = undefined;

		if (value instanceof Date) {
			month = value.getMonth() + 1;
			timezone = value.getTimezoneOffset() * -1;
		} else {
			Jsonix.Util.Ensure.ensureInteger(value.month);
			month = value.month;
			timezone = value.timezone;
		}
		Jsonix.XML.Calendar.validateMonth(month);
		Jsonix.XML.Calendar.validateTimezone(timezone);
		return "--" + this.printMonth(month) + this.printTimezoneString(timezone);
	}
});
Jsonix.Schema.XSD.GMonth.INSTANCE = new Jsonix.Schema.XSD.GMonth();
Jsonix.Schema.XSD.GMonth.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GMonth.INSTANCE);