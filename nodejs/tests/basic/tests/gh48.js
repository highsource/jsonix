var Jsonix = require('jsonix').Jsonix;
var DateTimeAsTimestamp = new (Jsonix.Class(Jsonix.Schema.XSD.DateTime, {
	// Strictly speaking name and typeName are not necessary here as they're
	// inherited from Jsonix.Schema.XSD.DateTime
	name : 'DateTimeAsTimestamp',
	typeName : Jsonix.Schema.XSD.qname('dateTime'),
	parse : function(text, context, input, scope) {
		Jsonix.Util.Ensure.ensureString(text);
		var date = Jsonix.Schema.XSD.DateTimeAsDate.prototype.parse.apply(this,
				arguments);
		return date.getTime();
	},
	print : function(value, context, output, scope) {
		Jsonix.Util.Ensure.ensureInteger(value);
		var date = new Date(value);
		var text = Jsonix.Schema.XSD.DateTimeAsDate.prototype.print.apply(this, [
				date, context, output, scope ]);
		return text;
	},
	CLASS_NAME : 'DateTimeAsTimestamp'
}))();
var Mapping = {
	name : "Mapping",
	typeInfos : [ DateTimeAsTimestamp ],
	elementInfos : [ {
		elementName : 'dateTime',
		typeInfo : 'DateTimeAsTimestamp'
	} ]
};
module.exports = {
	"UnmarshallsDateTimeAsTimestamp" : function(test) {
		var context = new Jsonix.Context([ Mapping ]);
		var unmarshaller = context.createUnmarshaller();
		var text = '<dateTime>2015-01-01T12:34:56Z</dateTime>';
		var result = unmarshaller.unmarshalString(text);
		console.log(result);
		test.equal(1420115696000, result.value);
		test.done();
	}
}
