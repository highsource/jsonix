var Jsonix = require("../../jsonix").Jsonix;

if (process.env.TZ === undefined) {
	process.env.TZ = 'UTC';
}

module.exports = {

	"PrintMonth" : function(test) {
		var g = Jsonix.Schema.XSD.GMonth.INSTANCE;

		test.equal('--01', g.print({ month : 1 }));
		test.equal('--12', g.print({ month : 12 }));
		test.equal('--01-05:00', g.print({ month : 1, timezone : -300 }));
		test.equal('--12+05:00', g.print({ month : 12, timezone : 300 }));
		test.equal('--12Z', g.print({ month : 12, timezone : 0 }));

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
		var g = Jsonix.Schema.XSD.GMonth.INSTANCE;
		var gDateType = new Date();
		gDateType.setMonth(0);
		test.equal("--01", g.print(gDateType));
		test.done();
	},

	"ReprintMonth" : function(test) {
		var g = Jsonix.Schema.XSD.GMonth.INSTANCE;
		test.equal('--01', g.reprint('--01'));
		test.equal('--12', g.reprint('--12'));
		test.equal('--01Z', g.reprint('--01Z'));
		test.equal('--12-05:00', g.reprint('--12-05:00'));

		test.done();
	},

	"ParseMonthGetDate" : function(test) {
		var g = Jsonix.Schema.XSD.GMonth.INSTANCE;

		test.equal(0, g.parse('--01').date.getUTCMonth());
		test.equal(11, g.parse('--12Z').date.getUTCMonth());
		test.done();
	}
};