var Jsonix = require("../../jsonix").Jsonix;

module.exports = {
	"Parse" : function(test) {
		var gYear = Jsonix.Schema.XSD.GYear.INSTANCE;

		test.equals("1984", gYear.parse("1984+00:00").year);

		test.equals('-300', gYear.parse("1984-05:00").timezone);
		test.equals('300', gYear.parse("1984+05:00").timezone);

		test.equals("1984", gYear.parse("1984").year);

		test.throws(function() {
			gYear.parse("+00:00");
		}, "Error");
		test.throws(function() {
			gYear.parse("1984+00");
		}, "Error");
		test.throws(function() {
			gYear.parse("1984+");
		}, "Error");
		test.throws(function() {
			gYear.parse("+00:00");
		}, "Error");

		test.throws(function() {
			gYear.parse("1984+14:01");
		}, "Error");

		test.done();
	},

	"ConvertTimeZoneString" : function(test) {
		var calendar = Jsonix.Schema.XSD.Calendar.INSTANCE;

		test.equal(300, calendar.convertTimeZoneString("+05:00"));
		test.equal(-300, calendar.convertTimeZoneString("-05:00"));
		test.equal(0, calendar.convertTimeZoneString("Z"));

		test.done();
	},

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
	}
}