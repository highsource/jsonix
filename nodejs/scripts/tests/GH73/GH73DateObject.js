/**
 * Created by tom on 24.04.15.
 */

var Jsonix = require("../../jsonix").Jsonix;
var GH73 = require("./Mappings.js").GH73;

var GH73Helper = {

	getGDateType : function() {
		return {
			"name" : {
				"namespaceURI" : "",
				"localPart" : "GDateTypes",
				"prefix" : "",
				"key" : "GDateTypes",
				"string" : "GDateTypes"
			}
		};
	}
};

process.env.TZ = 'Asia/Karachi';

module.exports = {

	"TimezoneOffset" : function(test) {
		var zero = new Date();
		console.log(zero);
		console.log(zero.getTimezoneOffset());

		// possible solution:

		var testMonth = "--05+05:00"; // one may in Pakistan

		var gMonth = Jsonix.Schema.XSD.GMonth.INSTANCE;

		var splittedMonth = gMonth.parse(testMonth, null, null, null);

		// nodejs set to: process.env.TZ = 'Asia/Karachi';
		console.log("Splitted month with a pakistan locale: " + splittedMonth.date);
		console.log("XML-Calendar Month: " + splittedMonth.month);
		console.log("JS Date Month: " + splittedMonth.date.getMonth());
		console.log("XML-Calendar Timezone: " + splittedMonth.timezone);
		console.log("JS Date TimezoneOffset: " + splittedMonth.date.getTimezoneOffset());

		// result:
		// Splitted month with a pakistan locale: Fri May 01 1970 00:00:00
		// GMT+0500 (PKT)
		// XML-Calendar Month: 5
		// JS Date Month: 4
		// XML-Calendar Timezone: 300
		// JS Date TimezoneOffset: -300

		test.done();
	},

	"MarshallGMonthFromDate" : function(test) {

		var context = new Jsonix.Context([ GH73 ]);
		var marshaller = context.createMarshaller();

		var gDateType = GH73Helper.getGDateType()

		gDateType.value = {};

		gDateType.value.month = new Date(0);
		gDateType.value.month.setMonth(1);

		console.log(marshaller.marshalString(gDateType));

		test.done();
	}
};