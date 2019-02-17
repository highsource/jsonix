var Jsonix = require('../jsonix').Jsonix;
module.exports = 
{
	"String": function(test) {
		var t = Jsonix.Schema.XSD.String.INSTANCE;
		test.equal('test', t.print('test'));
		test.equal('test', t.parse('test'));
		test.ok(t.isInstance('string'));
		test.equal(false, t.isInstance(1));
		test.equal(2, Jsonix.Schema.XSD.Strings.INSTANCE.parse('a b').length);
		test.done();
	},
	"Integer": function(test) {
		test.equal(1, Jsonix.Schema.XSD.Integer.INSTANCE.parse('1'));
		test.equal('1', Jsonix.Schema.XSD.Integer.INSTANCE.print(1));
		test.done();
	},
	"Boolean": function(test) {
		test.equal(true, Jsonix.Schema.XSD.Boolean.INSTANCE.parse('true'));
		test.equal(true, Jsonix.Schema.XSD.Boolean.INSTANCE.parse('1'));
		test.equal(false, Jsonix.Schema.XSD.Boolean.INSTANCE.parse('false'));
		test.equal(false, Jsonix.Schema.XSD.Boolean.INSTANCE.parse('0'));
		test.equal('true', Jsonix.Schema.XSD.Boolean.INSTANCE.print(true));
		test.equal('false', Jsonix.Schema.XSD.Boolean.INSTANCE.print(false));
		try {
			Jsonix.Schema.XSD.Boolean.INSTANCE.parse('t');
			test.ok(false);
        
		} catch (e) {
			// Expected exception
		}
		test.done();
	},
	"List": function(test) {
		{
			test.equal('a b c', Jsonix.Schema.XSD.String.INSTANCE.LIST.print([ 'a', 'b', 'c' ]));
        
			var parsed = Jsonix.Schema.XSD.String.INSTANCE.LIST.parse('a b \n c');
			test.equal(3, parsed.length);
			test.equal('a', parsed[0]);
			test.equal('b', parsed[1]);
			test.equal('c', parsed[2]);
		}
		{
			test.equal('0 1 2', Jsonix.Schema.XSD.Integer.INSTANCE.LIST.print([ 0, 1, 2 ]));
        
			var parsed = Jsonix.Schema.XSD.Integer.INSTANCE.LIST.parse('0 1 2');
			test.equal(3, parsed.length);
			test.equal(0, parsed[0]);
			test.equal(1, parsed[1]);
			test.equal(2, parsed[2]);
		}
		{
			test.equal('0.1 1.2 2.3', Jsonix.Schema.XSD.Double.INSTANCE.LIST.print([ 0.1, 1.2, 2.3 ]));
        
			var parsed = Jsonix.Schema.XSD.Double.INSTANCE.LIST.parse('0.1 1.2 2.3');
			test.equal(3, parsed.length);
			test.equal(0.1, parsed[0]);
			test.equal(1.2, parsed[1]);
			test.equal(2.3, parsed[2]);
        
		}
        
		{
			var typeInfo = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Double.INSTANCE.LIST, null, ', ');
			test.equal('0 0, 0 1, 1 1, 1 0, 0 0', typeInfo.print([ [ 0, 0 ], [ 0, 1 ], [ 1, 1 ], [ 1, 0 ], [ 0, 0 ] ]));
        
			var parsed = typeInfo.parse('0 0, 0 1, 1 1, 1 0, 0 0');
        
			test.equal(5, parsed.length);
			test.equal(0, parsed[0][0]);
			test.equal(0, parsed[0][1]);
			test.equal(0, parsed[1][0]);
			test.equal(1, parsed[1][1]);
			test.equal(1, parsed[2][0]);
			test.equal(1, parsed[2][1]);
			test.equal(1, parsed[3][0]);
			test.equal(0, parsed[3][1]);
			test.equal(0, parsed[4][0]);
			test.equal(0, parsed[4][1]);
        
		}
		test.done();
	},
	"Decimal" : function(test) {
		// test.equal(false, Jsonix.Schema.XSD.Integer.INSTANCE.isInstance(-9223372036854775809));
		test.ok(Jsonix.Schema.XSD.Integer.INSTANCE.isInstance(-9223372036854775808));
		// test.equal(false, Jsonix.Schema.XSD.Integer.INSTANCE.isInstance(9223372036854775808));
		test.ok(Jsonix.Schema.XSD.Integer.INSTANCE.isInstance(9223372036854775807));
		test.ok(Jsonix.Schema.XSD.Byte.INSTANCE.isInstance(127));
		test.equal(false, Jsonix.Schema.XSD.Byte.INSTANCE.isInstance(128));
		test.equal(false, Jsonix.Schema.XSD.Byte.INSTANCE.isInstance('a'));
		test.done();
	},
	"NMTokens": function(test) {
		test.equal(2, Jsonix.Schema.XSD.NMTokens.INSTANCE.parse('a b').length);
		test.equal('a b', Jsonix.Schema.XSD.NMTokens.INSTANCE.print([ 'a', 'b' ]));
		test.done();
	},
	"Double": function(test) {
		test.equal(-1E4, Jsonix.Schema.XSD.Double.INSTANCE.parse('-1E4'));
		test.equal(1267.43233E12, Jsonix.Schema.XSD.Double.INSTANCE.parse('1267.43233E12'));
		test.equal(12.78e-2, Jsonix.Schema.XSD.Double.INSTANCE.parse('12.78e-2'));
		
		
		test.equal(1, Jsonix.Schema.XSD.Double.INSTANCE.parse('1'));
		test.equal(-Infinity, Jsonix.Schema.XSD.Double.INSTANCE.parse('-INF'));
		test.equal(Infinity, Jsonix.Schema.XSD.Double.INSTANCE.parse('INF'));
		test.ok(Jsonix.Util.Type.isNaN(Jsonix.Schema.XSD.Double.INSTANCE.parse('NaN')));
		test.equal('NaN', Jsonix.Schema.XSD.Double.INSTANCE.print(NaN));
		test.equal('INF', Jsonix.Schema.XSD.Double.INSTANCE.print(Infinity));
		test.equal('-INF', Jsonix.Schema.XSD.Double.INSTANCE.print(-Infinity));
		test.ok(Jsonix.Schema.XSD.Double.INSTANCE.isInstance(-1.5));
		test.ok(Jsonix.Schema.XSD.Double.INSTANCE.isInstance(0));
		test.ok(Jsonix.Schema.XSD.Double.INSTANCE.isInstance(1.5));
		test.ok(Jsonix.Schema.XSD.Double.INSTANCE.isInstance(NaN));
		test.ok(Jsonix.Schema.XSD.Double.INSTANCE.isInstance(-Infinity));
		test.ok(Jsonix.Schema.XSD.Double.INSTANCE.isInstance(Infinity));

		test.done();
	},
	"Float": function(test) {
		test.equal(1, Jsonix.Schema.XSD.Float.INSTANCE.parse('1'));
		test.equal(-Infinity, Jsonix.Schema.XSD.Float.INSTANCE.parse('-INF'));
		test.equal(Infinity, Jsonix.Schema.XSD.Float.INSTANCE.parse('INF'));
		test.ok(Jsonix.Util.Type.isNaN(Jsonix.Schema.XSD.Float.INSTANCE.parse('NaN')));
		test.equal('NaN', Jsonix.Schema.XSD.Float.INSTANCE.print(NaN));
		test.equal('INF', Jsonix.Schema.XSD.Float.INSTANCE.print(Infinity));
		test.equal('-INF', Jsonix.Schema.XSD.Float.INSTANCE.print(-Infinity));
		test.ok(Jsonix.Schema.XSD.Float.INSTANCE.isInstance(-1.5));
		test.ok(Jsonix.Schema.XSD.Float.INSTANCE.isInstance(0));
		test.ok(Jsonix.Schema.XSD.Float.INSTANCE.isInstance(1.5));
		test.ok(Jsonix.Schema.XSD.Float.INSTANCE.isInstance(NaN));
		test.ok(Jsonix.Schema.XSD.Float.INSTANCE.isInstance(-Infinity));
		test.ok(Jsonix.Schema.XSD.Float.INSTANCE.isInstance(Infinity));

		test.done();
	},
	"Calendar": function(test) {
		var ts0 = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('10:20:30.4-05:06');
		test.equal(10, ts0.hour);
		test.equal(20, ts0.minute);
		test.equal(30, ts0.second);
		test.equal(0.40, ts0.fractionalSecond);
		test.equal(-306, ts0.timezone);
        
		test.equal('10:20:30.4-05:06', Jsonix.Schema.XSD.Calendar.INSTANCE.print(ts0));
        
		var ts1 = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('01:02:03');
		test.equal(1, ts1.hour);
		test.equal(2, ts1.minute);
		test.equal(3, ts1.second);
		test.equal(0, ts1.fractionalSecond);
		test.ok(Jsonix.Util.Type.isNaN(ts1.timezone));
		test.equal('01:02:03', Jsonix.Schema.XSD.Calendar.INSTANCE.print(ts1));
        
		var ds0 = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('2001-02-03-05:06');
		test.equal(2001, ds0.year);
		test.equal(2, ds0.month);
		test.equal(3, ds0.day);
		test.equal(-306, ds0.timezone);
		test.equal('2001-02-03-05:06', Jsonix.Schema.XSD.Calendar.INSTANCE.print(ds0));
        
		var ds1 = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('-0004-02-03');
		test.equal(-0004, ds1.year);
		test.equal(2, ds1.month);
		test.equal(3, ds1.day);
		test.ok(Jsonix.Util.Type.isNaN(ds1.timezone));
		test.equal('-0004-02-03', Jsonix.Schema.XSD.Calendar.INSTANCE.print(ds1));
        
		var ds2 = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('1993-02-03Z');
		test.equal(1993, ds2.year);
		test.equal(2, ds2.month);
		test.equal(3, ds2.day);
		test.equal(0, ds2.timezone);
		test.equal('1993-02-03Z', Jsonix.Schema.XSD.Calendar.INSTANCE.print(ds2));
        
		var dt0 = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('2001-02-03T04:05:06');
		test.equal(2001, dt0.year);
		test.equal(2, dt0.month);
		test.equal(3, dt0.day);
		test.equal(4, dt0.hour);
		test.equal(5, dt0.minute);
		test.equal(6, dt0.second);
		test.equal('2001-02-03T04:05:06', Jsonix.Schema.XSD.Calendar.INSTANCE.print(dt0));
        
		var dt1 = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('-1234-05-06T07:08:09.1011-12:13');
		test.equal(-1234, dt1.year);
		test.equal(5, dt1.month);
		test.equal(6, dt1.day);
		test.equal(7, dt1.hour);
		test.equal(8, dt1.minute);
		test.equal(9, dt1.second);
		test.equal(0.1011, dt1.fractionalSecond);
		test.equal(-733, dt1.timezone);
		test.equal('-1234-05-06T07:08:09.1011-12:13', Jsonix.Schema.XSD.Calendar.INSTANCE.print(dt1));

		var gym = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('-1234-05-12:13');
		test.equal(-1234, gym.year);
		test.equal(5, gym.month);
		test.equal(-733, gym.timezone);
		test.equal('-1234-05-12:13', Jsonix.Schema.XSD.Calendar.INSTANCE.print(gym));

		var gy = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('-1234-12:13');
		test.equal(-1234, gy.year);
		test.equal(-733, gy.timezone);
		test.equal('-1234-12:13', Jsonix.Schema.XSD.Calendar.INSTANCE.print(gy));

		var gm = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('--05-12:13');
		test.equal(5, gm.month);
		test.equal(-733, gm.timezone);
		test.equal('--05-12:13', Jsonix.Schema.XSD.Calendar.INSTANCE.print(gm));

		var gmd = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('--05-06-12:13');
		test.equal(5, gmd.month);
		test.equal(6, gmd.day);
		test.equal(-733, gmd.timezone);
		test.equal('--05-06-12:13', Jsonix.Schema.XSD.Calendar.INSTANCE.print(gmd));

		var gd = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('---06-12:13');
		test.equal(6, gd.day);
		test.equal(-733, gd.timezone);
		test.equal('---06-12:13', Jsonix.Schema.XSD.Calendar.INSTANCE.print(gd));

		test.throws(
			function() { Jsonix.Schema.XSD.Calendar.INSTANCE.parse('nomatch'); },
			/Value \[nomatch\] does not match xs:dateTime, xs:date, xs:time, xs:gYearMonth, xs:gYear, xs:gMonthDay, xs:gMonth or xs:gDay patterns\./);

		test.throws(
			function() { Jsonix.Schema.XSD.Calendar.INSTANCE.parseGYearMonth('201002'); },
			/Value \[201002\] does not match the xs:gYearMonth pattern\./);

		test.throws(
			function() { Jsonix.Schema.XSD.Calendar.INSTANCE.parseGYear('10'); },
			/Value \[10\] does not match the xs:gYear pattern\./);

		test.throws(
			function() { Jsonix.Schema.XSD.Calendar.INSTANCE.parseGMonthDay('02-10'); },
			/Value \[02-10\] does not match the xs:gMonthDay pattern\./);

		test.throws(
			function() { Jsonix.Schema.XSD.Calendar.INSTANCE.parseGMonth('02'); },
			/Value \[02\] does not match the xs:gMonth pattern\./);

		test.throws(
			function() { Jsonix.Schema.XSD.Calendar.INSTANCE.parseGDay('01'); },
			/Value \[01\] does not match the xs:gDay pattern\./);

		test.throws(
			function() { Jsonix.Schema.XSD.Calendar.INSTANCE.parseDateTime('2010-02-01 12:23:0'); },
			/Value \[2010-02-01 12:23:0\] does not match the xs:date pattern\./);

		test.throws(
			function() { Jsonix.Schema.XSD.Calendar.INSTANCE.parseDate('20100201'); },
			/Value \[20100201\] does not match the xs:date pattern\./);

		test.throws(
			function() { Jsonix.Schema.XSD.Calendar.INSTANCE.parseTime('12:23:0'); },
			/Value \[12:23:0\] does not match the xs:time pattern\./);

		test.throws(
			function() { Jsonix.Schema.XSD.Calendar.INSTANCE.parseTimezoneString('PDT'); },
			/Value \[PDT\] does not match the timezone pattern\./);

		test.done();
	},

	"Time": function(test) {
		var t0 = Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse('10:00:00.5');
		var time0 = new Date(1970, 0, 1, 10, 0, 0);
		time0.setMilliseconds(500);
		test.equal(time0.getTime(), t0.getTime());
		test.ok(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.isInstance(t0));
		test.equal('10:00:00.5', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t0));
        	test.equal(time0.getTime(), Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t0)).getTime());
		delete t0.originalTimezone;
	//	test.equal('10:00:00.5', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t0));
		test.equal(time0.getTime(), Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t0)).getTime());
	
		var t1 = Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse('10:00:00.5Z');
		test.equal(36000500, t1.getTime());
        	test.equal(0, t1.originalTimezone);
		test.ok(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.isInstance(t1));
		test.equal('10:00:00.5Z', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t1));
		test.equal(36000500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t1)).getTime());
		delete t1.originalTimezone;
	//	test.equal('10:00:00.5Z', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t1));
		console.log(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t1));
		test.equal(36000500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t1)).getTime());
	
		var t2 = Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse('10:00:00.5+01:00');
        	test.equal(32400500, t2.getTime());
		test.equal(60, t2.originalTimezone);
		test.ok(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.isInstance(t2));
		test.equal('10:00:00.5+01:00', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t2));
		test.equal(32400500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t2)).getTime());
		delete t2.originalTimezone;
	//	test.equal('10:00:00.5+01:00', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t2));
		test.equal(32400500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t2)).getTime());
	
		var t3 = Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse('10:00:00.5-01:00');
		test.equal(39600500, t3.getTime());
        	test.equal(-60, t3.originalTimezone);
		test.ok(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.isInstance(t3));
		test.equal('10:00:00.5-01:00', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t3));
		test.equal(39600500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t3)).getTime());
		t3.originalTimezone = 60;
		test.equal('12:00:00.5+01:00', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t3));
		test.equal(39600500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t3)).getTime());
		delete t2.originalTimezone;
        //	test.equal('12:00:00.5+01:00', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t3));
		test.equal(39600500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t3)).getTime());
	
		var t4 = Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse('01:00:00.5+10:00');
		test.equal(-32399500, t4.getTime());
		test.equal(+600, t4.originalTimezone);
		test.ok(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.isInstance(t4));
        	test.equal('01:00:00.5+10:00', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t4));
		test.equal(-32399500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t4)).getTime());
		delete t4.originalTimezone;
	//	test.equal('00:00:00.5+09:00', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t4));
		test.equal(-32399500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t4)).getTime());
	
		var t5 = Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse('01:00:00.5-10:00');
		test.equal(39600500, t5.getTime());
		test.equal(-600, t5.originalTimezone);
        	test.ok(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.isInstance(t5));
		test.equal('01:00:00.5-10:00', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t5));
		test.equal(39600500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t5)).getTime());
		delete t5.originalTimezone;
	//	test.equal('12:00:00.5+01:00', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t5));
		console.log(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t5));
		test.equal(39600500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t5)).getTime());
		test.done();
		},
	"Date": function(test) {
		var d0 = Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse('1970-01-01');
		var date0 = new Date(1970, 0, 1, 0, 0, 0);
        	test.equal(date0.getTime(), d0.getTime());
		test.ok(Jsonix.Schema.XSD.DateAsDate.INSTANCE.isInstance(d0));
		test.equal('1970-01-01', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d0));
		test.equal(date0.getTime(), Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d0)).getTime());
		delete d0.originalTimezone;
		test.equal('1970-01-01', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d0));
		test.equal(date0.getTime(), Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d0)).getTime());
	
        	var d1 = Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse('1970-01-01Z');
		test.equal(0, d1.getTime());
		test.ok(Jsonix.Schema.XSD.DateAsDate.INSTANCE.isInstance(d1));
		test.equal('1970-01-01Z', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d1));
		test.equal(0, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d1)).getTime());
		delete d1.originalTimezone;
	//	test.equal('1970-01-01Z', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d1));
        	test.equal(0, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d1)).getTime());
	
		var d2 = Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse('1970-01-01+01:01');
		test.equal(-3660000, d2.getTime());
		test.ok(Jsonix.Schema.XSD.DateAsDate.INSTANCE.isInstance(d2));
		test.equal('1970-01-01+01:01', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d2));
		test.equal(-3660000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d2)).getTime());
		delete d2.originalTimezone;
	//	test.equal('1970-01-01+01:01', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d2));
        	test.equal(-3660000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d2)).getTime());
	
		var d3 = Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse('1970-01-01-02:01');
		test.equal(+7260000, d3.getTime());
		test.ok(Jsonix.Schema.XSD.DateAsDate.INSTANCE.isInstance(d3));
		test.equal('1970-01-01-02:01', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d3));
		test.equal(+7260000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d3)).getTime());
		delete d3.originalTimezone;
	//	test.equal('1970-01-01-02:01', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d3));
		test.equal(+7260000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d3)).getTime());
	
        	var d4 = Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse('1970-01-01+01:00');
		test.equal(-3600000, d4.getTime());
		test.ok(Jsonix.Schema.XSD.DateAsDate.INSTANCE.isInstance(d4));
		test.equal('1970-01-01+01:00', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d4));
		test.equal(-3600000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d4)).getTime());
		delete d4.originalTimezone;
		// test.equal('1970-01-01+01:00', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d4));
		test.equal(-3600000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d4)).getTime());
        
		var d5 = Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse('1970-01-01+14:00');
		test.equal(-50400000, d5.getTime());
		test.ok(Jsonix.Schema.XSD.DateAsDate.INSTANCE.isInstance(d5));
		test.equal('1970-01-01+14:00', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d5));
		test.equal(-50400000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d5)).getTime());
		delete d5.originalTimezone;
        	// test.equal('1970-01-01+14:00', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d5));
		test.equal(-50400000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d5)).getTime());
	
		var d6 = Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse('1970-01-01-14:00');
		test.equal(50400000, d6.getTime());
		test.ok(Jsonix.Schema.XSD.DateAsDate.INSTANCE.isInstance(d6));
		test.equal('1970-01-01-14:00', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d6));
		test.equal(50400000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d6)).getTime());
		delete d6.originalTimezone;
        	// test.equal('1970-01-01+14:00', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d6));
		test.equal(50400000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d6)).getTime());
	
		test.equal('2001-12-31', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(new Date(2001, 11, 31)));
		test.equal('2001-12-31', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse('2001-12-31')));
		test.equal('2001-01-01', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse('2001-01-01')));
	
		test.equal('2001-12-29 2001-12-30 2001-12-31', Jsonix.Schema.XSD.DateAsDate.INSTANCE.LIST.print([ new Date(2001, 11, 29), new Date(2001, 11, 30), new Date(2001, 11, 31) ]));
		test.done();
	},
	"DateTime": function(test) {
        	var d0 = Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse('1970-01-01T00:00:00');
		var dateTime0 = new Date(1970, 0, 1, 0, 0, 0);
		test.equal(dateTime0.getTime(), d0.getTime());
		test.ok(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.isInstance(d0));
		test.equal('1970-01-01T00:00:00', Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d0));
		test.equal(dateTime0.getTime(), Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d0)).getTime());
		delete d0.originalTimezone;
	//	test.equal('1970-01-01T00:00:00', Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d0));
        	test.equal(dateTime0.getTime(), Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d0)).getTime());
	
		var d1 = Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse('1970-01-01T00:00:00Z');
		test.equal(0, d1.getTime());
		test.ok(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.isInstance(d1));
		test.equal('1970-01-01T00:00:00Z', Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d1));
		test.equal(0, Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d1)).getTime());
        	delete d1.originalTimezone;
	//	test.equal('1970-01-01T00:00:00Z', Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d1));
		test.equal(0, Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d1)).getTime());
		
		var d2 = Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse('1970-01-01T00:00:00+01:00');
		test.equal(-3600000, d2.getTime());
		test.ok(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.isInstance(d2));
		test.equal('1970-01-01T00:00:00+01:00', Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d2));
		test.equal(-3600000, Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d2)).getTime());
        	delete d2.originalTimezone;
	//	test.equal('1970-01-01T00:00:00+01:00', Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d2));
		test.equal(-3600000, Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d2)).getTime());
		
		var d3 = Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse('1970-01-01T00:00:00-02:00');
		test.equal(7200000, d3.getTime());
		test.ok(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.isInstance(d3));
		test.equal('1970-01-01T00:00:00-02:00', Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d3));
		test.equal(7200000, Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d3)).getTime());
		delete d3.originalTimezone;
	//	test.equal('1970-01-01T00:00:00-02:00', Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d3));
        	test.equal(7200000, Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d3)).getTime());
		test.done();
	},
	"Base64Binary": function(test) {
		var d0 = Jsonix.Schema.XSD.Base64Binary.INSTANCE.parse('');
		test.ok(Jsonix.Schema.XSD.Base64Binary.INSTANCE.isInstance(d0));
		test.equal(0, d0.length);
		test.equal('', Jsonix.Schema.XSD.Base64Binary.INSTANCE.print(d0));

		var d1 = Jsonix.Schema.XSD.Base64Binary.INSTANCE.parse('QQ==');
		test.ok(Jsonix.Schema.XSD.Base64Binary.INSTANCE.isInstance(d1));
		test.equal(1, d1.length);
		test.equal(65, d1[0]);
		test.equal('QQ==', Jsonix.Schema.XSD.Base64Binary.INSTANCE.print(d1));

		var d2 = Jsonix.Schema.XSD.Base64Binary.INSTANCE.parse('QUI=');
		test.ok(Jsonix.Schema.XSD.Base64Binary.INSTANCE.isInstance(d2));
		test.equal(2, d2.length);
		test.equal(66, d2[1]);
		test.equal('QUI=', Jsonix.Schema.XSD.Base64Binary.INSTANCE.print(d2));

		var d3 = Jsonix.Schema.XSD.Base64Binary.INSTANCE.parse('QUJD');
		test.ok(Jsonix.Schema.XSD.Base64Binary.INSTANCE.isInstance(d3));
		test.equal(3, d3.length);
		test.equal(67, d3[2]);
		test.equal('QUJD', Jsonix.Schema.XSD.Base64Binary.INSTANCE.print(d3));
		test.done();

		var d4 = Jsonix.Schema.XSD.Base64Binary.INSTANCE.parse('1g==');
		test.ok(Jsonix.Schema.XSD.Base64Binary.INSTANCE.isInstance(d4));
		test.equal(1, d4.length);
		test.equal(214, d4[0]);
		test.equal('1g==', Jsonix.Schema.XSD.Base64Binary.INSTANCE.print(d4));

		var d5 = Jsonix.Schema.XSD.Base64Binary.INSTANCE.parse('BwABBJQ1gJDUCAAAAAAA=');
		test.ok(Jsonix.Schema.XSD.Base64Binary.INSTANCE.isInstance(d5));
		test.equal(15, d5.length);
		test.equal(7, d5[0]);
		test.equal('BwABBJQ1gJDUCAAAAAAA', Jsonix.Schema.XSD.Base64Binary.INSTANCE.print(d5));

	},
	"HexBinary": function(test) {
		var d0 = Jsonix.Schema.XSD.HexBinary.INSTANCE.parse('');
		test.ok(Jsonix.Schema.XSD.HexBinary.INSTANCE.isInstance(d0));
		test.equal(0, d0.length);
		test.equal('', Jsonix.Schema.XSD.HexBinary.INSTANCE.print(d0));
        	
		var d1 = Jsonix.Schema.XSD.HexBinary.INSTANCE.parse('0f');
		test.ok(Jsonix.Schema.XSD.HexBinary.INSTANCE.isInstance(d1));
		test.equal(1, d1.length);
		test.equal(0x0F, d1[0]);
		test.equal('0F', Jsonix.Schema.XSD.HexBinary.INSTANCE.print(d1));
        	
		var d1a = Jsonix.Schema.XSD.HexBinary.INSTANCE.parse('0fb');
		test.ok(Jsonix.Schema.XSD.HexBinary.INSTANCE.isInstance(d1a));
		test.equal(1, d1a.length);
		test.equal(0x0F, d1a[0]);
		test.equal('0F', Jsonix.Schema.XSD.HexBinary.INSTANCE.print(d1a));
        
		var d2 = Jsonix.Schema.XSD.HexBinary.INSTANCE.parse('0Fb8');
		test.ok(Jsonix.Schema.XSD.HexBinary.INSTANCE.isInstance(d2));
		test.equal(2, d2.length);
		test.equal(0xB8, d2[1]);
		test.equal('0FB8', Jsonix.Schema.XSD.HexBinary.INSTANCE.print(d2));
		test.done();
	},
	"ID": function(test) {
		var t = Jsonix.Schema.XSD.ID.INSTANCE;
		test.equal('test', t.print('test'));
		test.equal('test', t.parse('test'));
		test.ok(t.isInstance('string'));
		test.equal(false, t.isInstance(1));
		test.done();
	},
	"IDREF": function(test) {
		var t = Jsonix.Schema.XSD.IDREF.INSTANCE;
		test.equal('test', t.print('test'));
		test.equal('test', t.parse('test'));
		test.ok(t.isInstance('string'));
		test.equal(false, t.isInstance(1));
		test.done();
	},
	"IDREFS": function(test) {
		test.equal(2, Jsonix.Schema.XSD.IDREFS.INSTANCE.parse('a b').length);
		test.done();
	},
	"QName": {
		"Parse" : function(test) {
			var context = new Jsonix.Context([], {namespacePrefixes : {'urn:c' : 'c'}});
			var output = new Jsonix.XML.Output();
			var doc = output.writeStartDocument();
			output.writeStartElement({p: 't', lp : 'test', ns : 'urn:test'});
			var qn1 = {lp : 'a'};
			test.equal('a', Jsonix.Schema.XSD.QName.INSTANCE.print(qn1));
			test.equal('a', Jsonix.Schema.XSD.QName.INSTANCE.print(qn1, context, output, null));
			var qn2 = {lp : 'b', ns: 'urn:b'};
			test.equal('b', Jsonix.Schema.XSD.QName.INSTANCE.print(qn2));
			test.equal('p0:b', Jsonix.Schema.XSD.QName.INSTANCE.print(qn2, context, output, null));
			var qn3 = {lp : 'b1', ns: 'urn:b'};
			test.equal('p0:b1', Jsonix.Schema.XSD.QName.INSTANCE.print(qn3, context, output, null));
			var qn4 = {lp : 'b', ns: 'urn:b', p: 'pb'};
			test.equal('pb:b', Jsonix.Schema.XSD.QName.INSTANCE.print(qn4));
			test.equal('pb:b', Jsonix.Schema.XSD.QName.INSTANCE.print(qn4, context, output, null));

			test.equal('c:c', Jsonix.Schema.XSD.QName.INSTANCE.reprint('c:c', context, output, null));
			test.equal('c:c', Jsonix.Schema.XSD.QName.INSTANCE.LIST.reprint(['c:c'], context, output, null));
			output.writeEndElement();
			output.writeEndDocument();
			var serializedDocument = Jsonix.DOM.serialize(doc);
			test.ok(serializedDocument.indexOf('xmlns:p0="urn:b"') !== -1);
			test.ok(serializedDocument.indexOf('xmlns:pb="urn:b"') !== -1);
			test.ok(serializedDocument.indexOf('xmlns:c="urn:c"') !== -1);
			//test.equal('<t:test xmlns:t="urn:test" xmlns:p0="urn:b" xmlns:pb="urn:b"/>', serializedDocument)
			test.done();
		},
		"Print": function(test) {
			var context = new Jsonix.Context([], {namespacePrefixes : {'urn:c' : 'c'}});
			var doc = Jsonix.DOM.parse('<a xmlns="urn:a" xmlns:a="urn:a" b:b="b" xmlns:b="urn:b"></a>');
			var input = new Jsonix.XML.Input(doc);
			var output = new Jsonix.XML.Output();
			input.nextTag();
			test.equal('a:a', Jsonix.Schema.XSD.QName.INSTANCE.parse('a:a'));
			test.equal('urn:a', input.getNamespaceURI('a'));
			test.equal('{urn:a}a', Jsonix.Schema.XSD.QName.INSTANCE.parse('a:a', context, input, null).key);
			test.done();

		}
	},
	"Duration" : {
		"Parse" : function (test) {
			var t = Jsonix.Schema.XSD.Duration.INSTANCE;
			test.equal(-1, t.parse("-P0Y").sign);
			test.equal(1, t.parse("P1Y").years);
			test.equal(2, t.parse("P2M").months);
			test.equal(3, t.parse("P3D").days);
			test.equal(4, t.parse("PT4H").hours);
			test.equal(5, t.parse("PT5M").minutes);
			test.equal(6.789, t.parse("PT6.789S").seconds);
			test.throws(function(){g.parse('P');});
			test.throws(function(){g.parse('PT');});
			test.throws(function(){g.parse('-P');});
			test.throws(function(){g.parse('-PT');});
			test.throws(function(){g.parse('+P1Y');});
			test.throws(function(){g.parse('P.1S');});
			test.done();
		},
		"Print" : function(test) {
			var t = Jsonix.Schema.XSD.Duration.INSTANCE;
			test.equal('-P1Y2M3DT4H5M6.789S', t.print({sign : -1, years:1, months: 2, days: 3, hours: 4, minutes: 5, seconds: 6.789}));
			test.equal('-P1Y2M3D', t.print({sign : -1, years:1, months: 2, days: 3}));
			test.equal('-PT4H5M6.789S', t.print({sign : -1, hours: 4, minutes: 5, seconds: 6.789}));
			test.throws(function(){g.print({});});
			test.throws(function(){g.print({years:-1});});
			test.throws(function(){g.print({years:'1'});});
			test.throws(function(){g.print({months:-1});});
			test.throws(function(){g.print({months:'1'});});
			test.throws(function(){g.print({days:-1});});
			test.throws(function(){g.print({days:'1'});});
			test.throws(function(){g.print({hours:-1});});
			test.throws(function(){g.print({hours:'1'});});
			test.throws(function(){g.print({minutes:-1});});
			test.throws(function(){g.print({minutes:'1'});});
			test.throws(function(){g.print({seconds:-1});});
			test.throws(function(){g.print({seconds:'1'});});
			test.done();
		},
		"Reprint" : function(test) {
			var t = Jsonix.Schema.XSD.Duration.INSTANCE;
			test.equal('-P1Y2M3DT4H5M6.789S', t.reprint({sign : -1, years:1, months: 2, days: 3, hours: 4, minutes: 5, seconds: 6.789}));
			test.equal('-P1Y2M3DT4H5M6.789S', t.reprint('-P001Y002M003DT004H005M006.789S'));
			test.done();
		}
	},
	"GYear": {
		"Parse": function(test) {
			var g = Jsonix.Schema.XSD.GYear.INSTANCE;
			test.equal(101, g.parse('0101').year);
			test.equal(-1234567, g.parse('-1234567').year);
			test.equal(1234567, g.parse('1234567').year);
			test.equal(2013, g.parse('2013-05:00').year);
			test.equal(-300, g.parse('2013-05:00').timezone);
			test.equal(-2013, g.parse('-2013+05:00').year);
			test.equal(300, g.parse('-2013+05:00').timezone);

			test.throws(function(){g.parse('0000');});
			test.throws(function(){g.parse('1');});
			test.throws(function(){g.parse('12');});
			test.throws(function(){g.parse('123');});

			test.done();
		},
		"Print": function(test) {
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
			test.throws(function(){g.print({year:0});});
			test.throws(function(){g.print({year:'2013'});});
			test.throws(function(){g.print({year:2013, timezone:'-05:00'});});
			// FIXME: no throws yet here
//			test.throws(function(){g.print({year:2013, timezone:100000});});

			test.done();
		},
		"Reprint": function(test) {
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
		}
	
	//moved temporary to GH73/GH73Print.js
	// REVIEW AV: Why? I'd keep tests for print/parse for different types here
//		"Print": function(test) {
//			var g = Jsonix.Schema.XSD.GYear.INSTANCE;
//
//			test.equal('0001', g.print({year:1}));
//			test.equal('0010', g.print({year:10}));
//			test.equal('0101', g.print({year:101}));
//			test.equal('1010', g.print({year:1010}));
//			test.equal('-1234567', g.print({year:-1234567}));
//			test.equal('1234567', g.print({year:1234567}));
//			test.equal('2013-05:00', g.print({year:2013,timezone:-300}));
//			test.equal('-2013+05:00', g.print({year:-2013,timezone:300}));
//
//			test.throws(function(){g.print(2013);});
//			test.throws(function(){g.print({});});
//			test.throws(function(){g.print({year:0});});
//			test.throws(function(){g.print({year:'2013'});});
//			test.throws(function(){g.print({year:2013, timezone:'-05:00'});});
//			test.throws(function(){g.print({year:2013, timezone:100000});});
//
//			test.done();
//		},
//		"Reprint": function(test) {
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
//		}
	}
};