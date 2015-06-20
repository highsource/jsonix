var Jsonix = require("../../jsonix").Jsonix;

module.exports = {

	"validateMonthDayRange" : function(test) {
		var gMonthDay = Jsonix.Schema.XSD.Calendar.INSTANCE;

		test.doesNotThrow(function() {
			gMonthDay.validateMonthDayRange(02, 29);
		});

		test.throws(function() {
			gMonthDay.validateMonthDayRange(02, 30);
		}, "Error");

		test.throws(function() {
			gMonthDay.validateMonthDayRange(04, 31);
		}, "Error");

		test.throws(function() {
			gMonthDay.validateMonthDayRange(11, 31);
		}, "Error");

		test.doesNotThrow(function() {
			gMonthDay.validateMonthDayRange(12, 31);
		}, "Error");

		test.done();
	},
}