/**
 * Created by tom on 24.04.15.
 */

var Jsonix = require("../../jsonix").Jsonix;
var GH73 = {};

GH73.Regex = {
	checkExpression : function(expressionString, value) {
		var expression = new RegExp(expressionString);

		if (expression.test(value) == false)
			throw new Error('Value [' + value + '] doesn\'t match the /' + expressionString + '/ pattern.');

	},

	splitExpression : function(expressionString, value, type) {
		var expression = new RegExp(expressionString);
		var results = value.match(expression);

		console.log("Splitted values for: " + type);
		if (results !== null) {
			for (var i = 0; i < results.length; i++) {
				console.log(i + ": " + results[i]);
			}
		}
	}
}

module.exports = {

	"ValidateYear" : function(test) {
		var yearRegEx = "^" + Jsonix.Schema.XSD.Calendar.YEAR_PATTERN + "$";

		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(yearRegEx, "1984");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(yearRegEx, "-1984");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(yearRegEx, "101984");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(yearRegEx, "-101984");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(yearRegEx, "0815");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(yearRegEx, "-0815");
		});

		test.throws(function() {
			GH73.Regex.checkExpression(yearRegEx, "foo");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(yearRegEx, "+0001");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(yearRegEx, "42");
		}, "Error");
		// http://www.w3.org/TR/xmlschema-2/#year-zero
		test.throws(function() {
			GH73.Regex.checkExpression(yearRegEx, "0000");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(yearRegEx, "1984AD");
		}, "Error");

		test.done();

	},

	"ValidateTimezone" : function(test) {
		var timezoneRegEx = "^" + Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN + "$";

		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(timezoneRegEx, "Z");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(timezoneRegEx, "+02:00");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(timezoneRegEx, "-02:00");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(timezoneRegEx, "-13:00");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(timezoneRegEx, "+14:00");
		});

		test.throws(function() {
			GH73.Regex.checkExpression(timezoneRegEx, "+15:00");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(timezoneRegEx, "+14:42");
		}, "Error");

		test.throws(function() {
			GH73.Regex.checkExpression(timezoneRegEx, "z");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(timezoneRegEx, "00:00");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(timezoneRegEx, "00");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(timezoneRegEx, "+00:69");
		}, "Error");

		test.done();
	},

	"ValidateGYear" : function(test) {

		var gYearRegEx = "^" + Jsonix.Schema.XSD.Calendar.GYEAR_PATTERN + "$";

		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gYearRegEx, "1984+00:00");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gYearRegEx, "-1984+00:00");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gYearRegEx, "-1984+12:00");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gYearRegEx, "1984");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gYearRegEx, "1984Z");
		});

		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gYearRegEx, "1984+14:00");
		});

		test.throws(function() {
			GH73.Regex.checkExpression(gYearRegEx, "1984+14:01");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(gYearRegEx, "1984+24:01");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(gYearRegEx, "1984+03:99");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(gYearRegEx, "1984+00");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(gYearRegEx, "1984+");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(gYearRegEx, "+00:00");
		}, "Error");

		test.done();

	},

	"SplitGMonth" : function(test) {
		var gMonthRegEx = "^" + Jsonix.Schema.XSD.Calendar.GMONTH_PATTERN + "$";

		GH73.Regex.splitExpression(gMonthRegEx, "--02+05:00", "GMonth");
		test.done();
	},

	"ValidateMonth" : function(test) {
		var monthRegEx = "^" + Jsonix.Schema.XSD.Calendar.SINGLE_MONTH_PATTERN + "$";

		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(monthRegEx, "--01");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(monthRegEx, "--11");
		});

		test.throws(function() {
			GH73.Regex.checkExpression(monthRegEx, "--00");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(monthRegEx, "--13");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(monthRegEx, "---12");
		}, "Error");

		test.done();
	},

	"ValidateGMonth" : function(test) {
		var gMonthRegEx = "^" + Jsonix.Schema.XSD.Calendar.GMONTH_PATTERN + "$";

		GH73.Regex.splitExpression(gMonthRegEx, "--12+14:00");

		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gMonthRegEx, "--12Z");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gMonthRegEx, "--12+14:00");
		});

		test.throws(function() {
			GH73.Regex.checkExpression(gMonthRegEx, "--13Z");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(gMonthRegEx, "--12+12:60");
		}, "Error");

		test.done();

	},

	"ValidateDay" : function(test) {
		var dayRegEx = "^" + Jsonix.Schema.XSD.Calendar.SINGLE_DAY_PATTERN + "$";

		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(dayRegEx, "---01");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(dayRegEx, "---10");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(dayRegEx, "---29");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(dayRegEx, "---31");
		});

		test.throws(function() {
			GH73.Regex.checkExpression(dayRegEx, "---00");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(dayRegEx, "---32");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(dayRegEx, "---31foo");
		}, "Error");

		test.done();
	},

	"ValidateGDay" : function(test) {
		var gDayRegEx = "^" + Jsonix.Schema.XSD.Calendar.GDAY_PATTERN + "$";

		GH73.Regex.splitExpression(gDayRegEx, "---29+14:00");

		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gDayRegEx, "---01");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gDayRegEx, "---10");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gDayRegEx, "---29");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gDayRegEx, "---31");
		});

		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gDayRegEx, "---01Z");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gDayRegEx, "---10-12:00");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gDayRegEx, "---29+14:00");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gDayRegEx, "---31+00:00");
		});

		test.throws(function() {
			GH73.Regex.checkExpression(gDayRegEx, "---00");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(gDayRegEx, "---32");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(gDayRegEx, "---01z");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(gDayRegEx, "--31");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(gDayRegEx, "---31+14:10");
		}, "Error");

		test.done();
	},

	"ValidateGMonthDay" : function(test) {
		var gMonthDayRegEx = "^" + Jsonix.Schema.XSD.Calendar.GYEAR_MONTH_PATTERN + "$";

		GH73.Regex.splitExpression(gMonthDayRegEx, "-1984-11+05:00");

		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gMonthDayRegEx, "1984-11");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gMonthDayRegEx, "-1984-11");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gMonthDayRegEx, "1984-11Z");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gMonthDayRegEx, "1984-11+05:00");
		});
		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gMonthDayRegEx, "1984-11-05:00");
		});

		test.throws(function() {
			GH73.Regex.checkExpression(gMonthDayRegEx, "-1984-42");
		}, "Error");
		test.throws(function() {
			GH73.Regex.checkExpression(gMonthDayRegEx, "1984-11z");
		}, "Error");

		test.done();
	},

	"GMonthDay" : function(test) {
		var gMonthDaySplitter = "^" + Jsonix.Schema.XSD.Calendar.GMONTH_DAY_PATTERN + "$";

		GH73.Regex.splitExpression(gMonthDaySplitter, "--12-31+05:00");

		test.doesNotThrow(function() {
			GH73.Regex.checkExpression(gMonthDaySplitter, "--01-01Z");
		});

		test.throws(function() {
			GH73.Regex.checkExpression(gMonthDaySplitter, "--02-32Z");
		}, "Error");

		test.done();

	}

}