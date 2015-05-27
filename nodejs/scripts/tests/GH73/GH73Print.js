var Jsonix = require("../../jsonix").Jsonix;

process.env.TZ = 'UTC';

module.exports = {
		
		"PrintYear": function(test) {
			var g = Jsonix.Schema.XSD.GYear.INSTANCE;

			test.equal('0001', g.print({year:1}));
			test.equal('0010', g.print({year:10}));
			test.equal('0101', g.print({year:101}));
			test.equal('1010', g.print({year:1010}));
			test.equal('-1234567', g.print({year:-1234567}));
			test.equal('1234567', g.print({year:1234567}));
			test.equal('2013-05:00', g.print({year:2013,timezone:-300}));
			test.equal('-2013+05:00', g.print({year:-2013,timezone:300}));

			test.throws(function(){g.print(2013);});
			test.throws(function(){g.print({});});
			//quickfix
			//TODO -> validation in printYear
			test.throws(function(){g.print({year:0});});
			test.throws(function(){g.print({year:'2013'});});
			test.throws(function(){g.print({year:2013, timezone:'-05:00'});});
			//failes
			//FIXME: validate range -14*60 < timezone < 14*60
			test.throws(function(){g.print({year:2013, timezone:100000});});

			test.done();
		},
		"PrintYearFromDate" : function (test){
			var g = Jsonix.Schema.XSD.GYear.INSTANCE;
			var  gDateType = new Date();
			gDateType.setFullYear(1970);
			// FIXME: This depends on the time zone of the environment
			test.equal("1970Z", g.print(gDateType));
			test.done();
		},
		
		"ReprintYear": function(test) {
			var g = Jsonix.Schema.XSD.GYear.INSTANCE;
			test.equal('0001', g.reprint('0001'));
			test.equal('0010', g.reprint('0010'));
			test.equal('0101', g.reprint('0101'));
			test.equal('1010', g.reprint('1010'));
			test.equal('-1234567', g.reprint('-1234567'));
			test.equal('1234567', g.reprint('1234567'));
			test.equal('2013-05:00', g.reprint('2013-05:00'));
			test.equal('-2013+05:00', g.reprint('-2013+05:00'));

			test.done();
		},


};