var Jsonix = require("../../jsonix").Jsonix;

process.env.TZ = 'UTC';

module.exports = {
		
		"PrintMonth": function(test) {
			var g = Jsonix.Schema.XSD.GMonth.INSTANCE;

			test.equal('--01', g.print({month:1}));
			test.equal('--12', g.print({month:12}));
			test.throws(function(){g.print(13);});

//			test.equal('1010', g.print({year:1010}));
//			test.equal('-1234567', g.print({year:-1234567}));
//			test.equal('1234567', g.print({year:1234567}));
//			test.equal('2013-05:00', g.print({year:2013,timezone:-300}));
//			test.equal('-2013+05:00', g.print({year:-2013,timezone:300}));
//
//			test.throws(function(){g.print(2013);});
//			test.throws(function(){g.print({});});
//			//quickfix
//			//TODO -> validation in printYear
//			test.throws(function(){g.print({year:0});});
//			test.throws(function(){g.print({year:'2013'});});
//			test.throws(function(){g.print({year:2013, timezone:'-05:00'});});
//			test.throws(function(){g.print({year:2013, timezone:100000});});

			test.done();
		}
		
//		"PrintYearFromDate" : function (test){
//			var g = Jsonix.Schema.XSD.GYear.INSTANCE;
//			var  gDateType = new Date();
//			gDateType.setFullYear(1970);
//			// FIXME: This depends on the time zone of the environment
//			// REVIEW tom: see line 3. This works on my ubuntu 14.04
//			// with nodeunit 0.9.1
//			test.equal("1970Z", g.print(gDateType));
//			test.done();
//		},
//		
//		"ReprintYear": function(test) {
//			var g = Jsonix.Schema.XSD.GYear.INSTANCE;
//			test.equal('0001', g.reprint('0001'));
//			test.equal('0010', g.reprint('0010'));
//			test.equal('0101', g.reprint('0101'));
//			test.equal('1010', g.reprint('1010'));
//			test.equal('-1234567', g.reprint('-1234567'));
//			test.equal('1234567', g.reprint('1234567'));
//			test.equal('2013-05:00', g.reprint('2013-05:00'));
//			test.equal('-2013+05:00', g.reprint('-2013+05:00'));
//
//			test.done();
//		},


};