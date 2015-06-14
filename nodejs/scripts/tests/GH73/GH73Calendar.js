var Jsonix = require("../../jsonix").Jsonix;

module.exports = {

	// TODO: --> move to Calender.validateGMonthDay
	"splitGMonthDay" : function(test) {
		var gMonthDay = Jsonix.Schema.XSD.GMonthDay.INSTANCE;

		test.doesNotThrow(function() {
			gMonthDay.splitGMonthDay("--02-29");
		});

		test.throws(function() {
			gMonthDay.splitGMonthDay("--02-30");
		}, "Error");

		test.throws(function() {
			gMonthDay.splitGMonthDay("--04-31");
		}, "Error");
		test.throws(function() {
			gMonthDay.splitGMonthDay("--11-31");
		}, "Error");

		test.done();
	},
}