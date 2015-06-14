Jsonix.Schema.XSD.GDay = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'GDay',
	typeName : Jsonix.Schema.XSD.qname('gDay'),
	CLASS_NAME : 'Jsonix.Schema.XSD.GDay',

	parse : function(value, context, input, scope) {
		
		var gDayExpression = new RegExp("^" + Jsonix.Schema.XSD.Calendar.GDAY_PATTERN + "$");
		var results = value.match(gDayExpression);
		if (results !== null) {
			var splitedGYDay = {
				day : parseInt(results[2], 10),
				// TODO: validation_issue (parseTimeZoneString is redundant)
				timezone : this.parseTimeZoneString(results[3])
			};
			return splitedGYDay;
		}
		throw new Error('Value [' + value + '] doesn\'t match the gDay pattern.');
	},
	
	print : function(value, context, input, scope) {
		
	}

});
Jsonix.Schema.XSD.GDay.INSTANCE = new Jsonix.Schema.XSD.GDay();
Jsonix.Schema.XSD.GDay.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GDay.INSTANCE);