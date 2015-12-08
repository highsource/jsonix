var Jsonix = require("../../jsonix").Jsonix;

if (process.env.TZ === undefined) {
	process.env.TZ = 'UTC';
}

module.exports = {

		"PrintYearMonth" : function(test) {
		var g = Jsonix.Schema.XSD.GYearMonth.INSTANCE;
	
		test.equal('0001-01', g.print({ year : 1, month : 1 }));
		test.equal('0010-10', g.print({ year : 10, month : 10 }));
		test.equal('-1234567-01', g.print({ year : -1234567, month : 01 }));
		test.equal('2013-01-05:00', g.print({ year : 2013, month : 1, timezone : -300 }));
		test.equal('-2013-01+05:00', g.print({ year : -2013, month : 1, timezone : 300 }));

		test.throws(function() {
			g.print({
				year : 0,
				month : 1
			});
		});
		test.throws(function() {
			g.print({
				year : '2013',
				month : 1
			});
		});
		test.throws(function() {
			g.print({
				year : 2013,
				month : 1,
				timezone : 100000
			});
		});
		test.throws(function() {
			g.print({
				year : 2013,
				month : 13
			});
		});
		test.throws(function() {
			g.print({
				year : 2013,
				month : 0
			});
		});
		test.done();
	},

	"PrintYearMonthFromDate" : function(test) {
		var g = Jsonix.Schema.XSD.GYearMonth.INSTANCE;
		var gDateType = new Date();
		gDateType.setFullYear(1970);
		gDateType.setMonth(0);
		test.equal("1970-01", g.print(gDateType));
		test.done();
	},

	"ReprintYearMonth" : function(test) {
		var g = Jsonix.Schema.XSD.GYearMonth.INSTANCE;
		test.equal('0001-01', g.reprint('0001-01'));
		test.equal('0010-01', g.reprint('0010-01'));
		test.equal('0101-01', g.reprint('0101-01'));
		test.equal('1010-01', g.reprint('1010-01'));
		test.equal('-1234567-01', g.reprint('-1234567-01'));
		test.equal('1234567-01', g.reprint('1234567-01'));
		test.equal('2013-01-05:00', g.reprint('2013-01-05:00'));
		test.equal('-2013-01+05:00', g.reprint('-2013-01+05:00'));

		test.done();
	},

	"ParseYearMonthGetDate" : function(test) {
		var g = Jsonix.Schema.XSD.GYearMonth.INSTANCE;

		test.equal(1967, g.parse('1967-11').date.getUTCFullYear());
		test.equal(10, g.parse('1967-11').date.getUTCMonth());
		test.equal(1967, g.parse('1967-11Z').date.getUTCFullYear());
		test.equal(10, g.parse('1967-11Z').date.getUTCMonth());
		test.equal(0, g.parse('1970-01').date.getTime());
		test.equal(0, g.parse('1970-01Z').date.getTime());
		test.equal(300, g.parse('1970-01+05:00').timezone);
		test.equal(-300 * 60000, g.parse('1970-01+05:00').date.getTime());

		test.done();
	}

};