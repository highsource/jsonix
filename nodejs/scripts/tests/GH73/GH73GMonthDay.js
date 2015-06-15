var Jsonix = require("../../jsonix").Jsonix;

process.env.TZ = 'UTC';

module.exports = {

	"PrintMonthDay" : function(test) {
		var g = Jsonix.Schema.XSD.GMonthDay.INSTANCE;

		test.equal('--01-01', g.print({ month : 1, day: 1 }));
		test.equal('--12-01', g.print({ month : 12, day: 1 }));
		test.equal('--01-01-05:00', g.print({ month : 1, day: 1, timezone : -300 }));
		test.equal('--12-01+05:00', g.print({ month : 12, day: 1, timezone : 300 }));
		test.equal('--12-01Z', g.print({ month : 12, day: 1, timezone : 0 }));

		test.throws(function() {
			g.print(13);
		});
		test.throws(function() {
			g.print(-7);
		});
		test.throws(function() {
			g.print(0);
		});
		test.throws(function() {
			g.print({
				month : 12,
				timezone : 100000
			});
		});
		test.done();
	},

	"PrintMonthFromDate" : function(test) {
		var g = Jsonix.Schema.XSD.GMonthDay.INSTANCE;
		var gDateType = new Date();
		gDateType.setMonth(0);
		gDateType.setDate(1);
		test.equal("--01-01Z", g.print(gDateType));
		test.done();
	},

	"ReprintMonth" : function(test) {
		var g = Jsonix.Schema.XSD.GMonthDay.INSTANCE;
		test.equal('--01-01', g.reprint('--01-01'));
		test.equal('--12-31', g.reprint('--12-31'));
		test.equal('--01-01Z', g.reprint('--01-01Z'));
		test.equal('--12-31+05:00', g.reprint('--12-31+05:00'));

		test.done();
	},

	"ParseMonthDayGetDate" : function(test) {
		var g = Jsonix.Schema.XSD.GMonthDay.INSTANCE;

		test.equal(0, g.parse('--01-01').date.getMonth());
		test.equal(1, g.parse('--01-01').date.getDate());
		test.equal(0, g.parse('--01-01+05:00').date.getTimezoneOffset());
		test.done();
	}
};