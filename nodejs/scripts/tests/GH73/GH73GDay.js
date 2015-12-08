var Jsonix = require("../../jsonix").Jsonix;

if (process.env.TZ === undefined) {
	process.env.TZ = 'UTC';
}

module.exports = {

	"PrintDay" : function(test) {
		var g = Jsonix.Schema.XSD.GDay.INSTANCE;

		test.equal('---01', g.print({ day : 1 }));
		test.equal('---31', g.print({ day : 31 }));
		test.equal('---21-05:00', g.print({ day : 21, timezone : -300 }));
		test.equal('---21Z', g.print({ day : 21, timezone : 0 }));
		test.equal('---21+13:59', g.print({ day : 21, timezone : 839 }));
		test.equal('---21-14:00', g.print({ day : 21, timezone : -840 }));

		test.throws(function() {
			g.print({
				day : 32
			});
		});

		test.throws(function() {
			g.print({
				day : -1
			});
		});

		test.throws(function() {
			g.print({
				day : 21,
				timezone : 841
			});
		});

		test.throws(function() {
			g.print({
				day : 21,
				timezone : -1841
			});
		});

		test.done();
	},

	"PrintDayFromDate" : function(test) {
		var g = Jsonix.Schema.XSD.GDay.INSTANCE;
		var gDateType = new Date();
		gDateType.setDate(1);
		test.equal("---01", g.print(gDateType));
		test.done();
	},

	"ReprintDay" : function(test) {
		var g = Jsonix.Schema.XSD.GDay.INSTANCE;

		 test.equal('---01', g.reprint('---01'));
		 test.equal('---01-05:00', g.reprint('---01-05:00'));

		test.done();
	},

	"ParseDayGetDate" : function(test) {
		var g = Jsonix.Schema.XSD.GDay.INSTANCE;

		test.equal(1, g.parse('---01').date.getUTCDate());
		test.equal(1, g.parse('---01Z').date.getUTCDate());

		test.done();
	}

};