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

//works only standalone under  linux
module.exports = {

		// nodejs set to: process.env.TZ = 'Asia/Karachi';
		
		"TimezoneOffset" : function(test) {

		var testMonth = "--05+05:00"; // one may in Pakistan

		var gMonth = Jsonix.Schema.XSD.GMonth.INSTANCE;

		var parsedMonth = gMonth.parse(testMonth);

		test.equal(10350000000, parsedMonth.date.getTime());
		test.equal(300, parsedMonth.timezone);
		test.equal(5, parsedMonth.month);

		test.done();
	},

	"MarshallGMonthFromDate" : function(test) {

		var context = new Jsonix.Context([ GH73 ]);
		var marshaller = context.createMarshaller();

		var gDateType = GH73Helper.getGDateType()

		gDateType.value = {};

		gDateType.value.month = new Date(0);
		gDateType.value.month.setMonth(1);

		// #92
		test.equal("<GDateTypes month=\"--02+05:00\"/>", marshaller.marshalString(gDateType));

		test.done();
	}
};