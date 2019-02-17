function testSchemaXSDString() {
	var t = Jsonix.Schema.XSD.String.INSTANCE;
	assertEquals('test', t.print('test'));
	assertEquals('test', t.parse('test'));
	assertTrue(t.isInstance('string'));
	assertFalse(t.isInstance(1));
	assertEquals(2, Jsonix.Schema.XSD.Strings.INSTANCE.parse('a b').length);
}
function testSchemaXSDInteger() {
	assertEquals(1, Jsonix.Schema.XSD.Integer.INSTANCE.parse('1'));
	assertEquals('1', Jsonix.Schema.XSD.Integer.INSTANCE.print(1));
}
function testSchemaXSDBoolean() {
	assertEquals(true, Jsonix.Schema.XSD.Boolean.INSTANCE.parse('true'));
	assertEquals(true, Jsonix.Schema.XSD.Boolean.INSTANCE.parse('1'));
	assertEquals(false, Jsonix.Schema.XSD.Boolean.INSTANCE.parse('false'));
	assertEquals(false, Jsonix.Schema.XSD.Boolean.INSTANCE.parse('0'));
	assertEquals('true', Jsonix.Schema.XSD.Boolean.INSTANCE.print(true));
	assertEquals('false', Jsonix.Schema.XSD.Boolean.INSTANCE.print(false));
	try {
		Jsonix.Schema.XSD.Boolean.INSTANCE.parse('t');
		assertTrue(false);

	} catch (e) {
		// Expected exception
	}
}

function testSchemaXSDList() {

	{
		assertEquals('a b c', Jsonix.Schema.XSD.String.INSTANCE.LIST.print([ 'a', 'b', 'c' ]));

		var parsed = Jsonix.Schema.XSD.String.INSTANCE.LIST.parse('a b \n c');
		assertEquals(3, parsed.length);
		assertEquals('a', parsed[0]);
		assertEquals('b', parsed[1]);
		assertEquals('c', parsed[2]);
	}
	{
		assertEquals('0 1 2', Jsonix.Schema.XSD.Integer.INSTANCE.LIST.print([ 0, 1, 2 ]));

		var parsed = Jsonix.Schema.XSD.Integer.INSTANCE.LIST.parse('0 1 2');
		assertEquals(3, parsed.length);
		assertEquals(0, parsed[0]);
		assertEquals(1, parsed[1]);
		assertEquals(2, parsed[2]);
	}
	{
		assertEquals('0.1 1.2 2.3', Jsonix.Schema.XSD.Double.INSTANCE.LIST.print([ 0.1, 1.2, 2.3 ]));

		var parsed = Jsonix.Schema.XSD.Double.INSTANCE.LIST.parse('0.1 1.2 2.3');
		assertEquals(3, parsed.length);
		assertEquals(0.1, parsed[0]);
		assertEquals(1.2, parsed[1]);
		assertEquals(2.3, parsed[2]);

	}

	{
		var typeInfo = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Double.INSTANCE.LIST, null, ', ');
		assertEquals('0 0, 0 1, 1 1, 1 0, 0 0', typeInfo.print([ [ 0, 0 ], [ 0, 1 ], [ 1, 1 ], [ 1, 0 ], [ 0, 0 ] ]));

		var parsed = typeInfo.parse('0 0, 0 1, 1 1, 1 0, 0 0');

		assertEquals(5, parsed.length);
		assertEquals(0, parsed[0][0]);
		assertEquals(0, parsed[0][1]);
		assertEquals(0, parsed[1][0]);
		assertEquals(1, parsed[1][1]);
		assertEquals(1, parsed[2][0]);
		assertEquals(1, parsed[2][1]);
		assertEquals(1, parsed[3][0]);
		assertEquals(0, parsed[3][1]);
		assertEquals(0, parsed[4][0]);
		assertEquals(0, parsed[4][1]);

	}
}

function testSchemaXSDDecimals() {
	// assertFalse(Jsonix.Schema.XSD.Integer.INSTANCE.isInstance(-9223372036854775809));
	assertTrue(Jsonix.Schema.XSD.Integer.INSTANCE.isInstance(-9223372036854775808));
	// assertFalse(Jsonix.Schema.XSD.Integer.INSTANCE.isInstance(9223372036854775808));
	assertTrue(Jsonix.Schema.XSD.Integer.INSTANCE.isInstance(9223372036854775807));
	assertTrue(Jsonix.Schema.XSD.Byte.INSTANCE.isInstance(127));
	assertFalse(Jsonix.Schema.XSD.Byte.INSTANCE.isInstance(128));
	assertFalse(Jsonix.Schema.XSD.Byte.INSTANCE.isInstance('a'));
}

function testSchemaXSDNMTokens() {
	assertEquals(2, Jsonix.Schema.XSD.NMTokens.INSTANCE.parse('a b').length);
	assertEquals('a b', Jsonix.Schema.XSD.NMTokens.INSTANCE.print([ 'a', 'b' ]));
}

function testSchemaXSDDouble() {
	assertEquals(-1E4, Jsonix.Schema.XSD.Double.INSTANCE.parse('-1E4'));
	assertEquals(1267.43233E12, Jsonix.Schema.XSD.Double.INSTANCE.parse('1267.43233E12'));
	assertEquals(12.78e-2, Jsonix.Schema.XSD.Double.INSTANCE.parse('12.78e-2'));
	
	
	assertEquals(1, Jsonix.Schema.XSD.Double.INSTANCE.parse('1'));
	assertEquals(-Infinity, Jsonix.Schema.XSD.Double.INSTANCE.parse('-INF'));
	assertEquals(Infinity, Jsonix.Schema.XSD.Double.INSTANCE.parse('INF'));
	assertTrue(Jsonix.Util.Type.isNaN(Jsonix.Schema.XSD.Double.INSTANCE.parse('NaN')));
	assertEquals('NaN', Jsonix.Schema.XSD.Double.INSTANCE.print(NaN));
	assertEquals('INF', Jsonix.Schema.XSD.Double.INSTANCE.print(Infinity));
	assertEquals('-INF', Jsonix.Schema.XSD.Double.INSTANCE.print(-Infinity));
	assertTrue(Jsonix.Schema.XSD.Double.INSTANCE.isInstance(-1.5));
	assertTrue(Jsonix.Schema.XSD.Double.INSTANCE.isInstance(0));
	assertTrue(Jsonix.Schema.XSD.Double.INSTANCE.isInstance(1.5));
	assertTrue(Jsonix.Schema.XSD.Double.INSTANCE.isInstance(NaN));
	assertTrue(Jsonix.Schema.XSD.Double.INSTANCE.isInstance(-Infinity));
	assertTrue(Jsonix.Schema.XSD.Double.INSTANCE.isInstance(Infinity));
}

function testSchemaXSDFloat() {
	assertEquals(1, Jsonix.Schema.XSD.Float.INSTANCE.parse('1'));
	assertEquals(-Infinity, Jsonix.Schema.XSD.Float.INSTANCE.parse('-INF'));
	assertEquals(Infinity, Jsonix.Schema.XSD.Float.INSTANCE.parse('INF'));
	assertTrue(Jsonix.Util.Type.isNaN(Jsonix.Schema.XSD.Float.INSTANCE.parse('NaN')));
	assertEquals('NaN', Jsonix.Schema.XSD.Float.INSTANCE.print(NaN));
	assertEquals('INF', Jsonix.Schema.XSD.Float.INSTANCE.print(Infinity));
	assertEquals('-INF', Jsonix.Schema.XSD.Float.INSTANCE.print(-Infinity));
	assertTrue(Jsonix.Schema.XSD.Float.INSTANCE.isInstance(-1.5));
	assertTrue(Jsonix.Schema.XSD.Float.INSTANCE.isInstance(0));
	assertTrue(Jsonix.Schema.XSD.Float.INSTANCE.isInstance(1.5));
	assertTrue(Jsonix.Schema.XSD.Float.INSTANCE.isInstance(NaN));
	assertTrue(Jsonix.Schema.XSD.Float.INSTANCE.isInstance(-Infinity));
	assertTrue(Jsonix.Schema.XSD.Float.INSTANCE.isInstance(Infinity));
}

function testSchemaXSDCalendar() {
	var ts0 = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('10:20:30.4-05:06');
	assertEquals(10, ts0.hour);
	assertEquals(20, ts0.minute);
	assertEquals(30, ts0.second);
	assertEquals(0.40, ts0.fractionalSecond);
	assertEquals(-306, ts0.timezone);

	assertEquals('10:20:30.4-05:06', Jsonix.Schema.XSD.Calendar.INSTANCE.print(ts0));

	var ts1 = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('01:02:03');
	assertEquals(1, ts1.hour);
	assertEquals(2, ts1.minute);
	assertEquals(3, ts1.second);
	assertEquals(0, ts1.fractionalSecond);
	assertTrue(Jsonix.Util.Type.isNaN(ts1.timezone));
	assertEquals('01:02:03', Jsonix.Schema.XSD.Calendar.INSTANCE.print(ts1));

	var ds0 = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('2001-02-03-05:06');
	assertEquals(2001, ds0.year);
	assertEquals(2, ds0.month);
	assertEquals(3, ds0.day);
	assertEquals(-306, ds0.timezone);
	assertEquals('2001-02-03-05:06', Jsonix.Schema.XSD.Calendar.INSTANCE.print(ds0));

	var ds1 = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('-0004-02-03');
	assertEquals(-0004, ds1.year);
	assertEquals(2, ds1.month);
	assertEquals(3, ds1.day);
	assertTrue(Jsonix.Util.Type.isNaN(ds1.timezone));
	assertEquals('-0004-02-03', Jsonix.Schema.XSD.Calendar.INSTANCE.print(ds1));

	var ds2 = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('1993-02-03Z');
	assertEquals(1993, ds2.year);
	assertEquals(2, ds2.month);
	assertEquals(3, ds2.day);
	assertEquals(0, ds2.timezone);
	assertEquals('1993-02-03Z', Jsonix.Schema.XSD.Calendar.INSTANCE.print(ds2));

	var dt0 = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('2001-02-03T04:05:06');
	assertEquals(2001, dt0.year);
	assertEquals(2, dt0.month);
	assertEquals(3, dt0.day);
	assertEquals(4, dt0.hour);
	assertEquals(5, dt0.minute);
	assertEquals(6, dt0.second);
	assertEquals('2001-02-03T04:05:06', Jsonix.Schema.XSD.Calendar.INSTANCE.print(dt0));

	var dt1 = Jsonix.Schema.XSD.Calendar.INSTANCE.parse('-1234-05-06T07:08:09.1011-12:13');
	assertEquals(-1234, dt1.year);
	assertEquals(5, dt1.month);
	assertEquals(6, dt1.day);
	assertEquals(7, dt1.hour);
	assertEquals(8, dt1.minute);
	assertEquals(9, dt1.second);
	assertEquals(0.1011, dt1.fractionalSecond);
	assertEquals(-733, dt1.timezone);
	assertEquals('-1234-05-06T07:08:09.1011-12:13', Jsonix.Schema.XSD.Calendar.INSTANCE.print(dt1));

}

function testSchemaXSDTime() {
	var t0 = Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse('10:00:00.5');
	var time0 = new Date(1970, 0, 1, 10, 0, 0);
	time0.setMilliseconds(500);
	assertEquals(time0.getTime(), t0.getTime());
	assertTrue(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.isInstance(t0));
	assertEquals('10:00:00.5', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t0));
	assertEquals(time0.getTime(), Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t0)).getTime());
	delete t0.originalTimezone;
//	assertEquals('10:00:00.5', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t0));
	assertEquals(time0.getTime(), Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t0)).getTime());

	var t1 = Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse('10:00:00.5Z');
	assertEquals(36000500, t1.getTime());
	assertEquals(0, t1.originalTimezone);
	assertTrue(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.isInstance(t1));
	assertEquals('10:00:00.5Z', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t1));
	assertEquals(36000500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t1)).getTime());
	delete t1.originalTimezone;
//	assertEquals('10:00:00.5Z', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t1));
	assertEquals(36000500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t1)).getTime());

	var t2 = Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse('10:00:00.5+01:00');
	assertEquals(32400500, t2.getTime());
	assertEquals(60, t2.originalTimezone);
	assertTrue(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.isInstance(t2));
	assertEquals('10:00:00.5+01:00', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t2));
	assertEquals(32400500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t2)).getTime());
	delete t2.originalTimezone;
//	assertEquals('10:00:00.5+01:00', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t2));
	assertEquals(32400500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t2)).getTime());

	var t3 = Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse('10:00:00.5-01:00');
	assertEquals(39600500, t3.getTime());
	assertEquals(-60, t3.originalTimezone);
	assertTrue(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.isInstance(t3));
	assertEquals('10:00:00.5-01:00', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t3));
	assertEquals(39600500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t3)).getTime());
	t3.originalTimezone = 60;
	assertEquals('12:00:00.5+01:00', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t3));
	assertEquals(39600500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t3)).getTime());
	delete t2.originalTimezone;
//	assertEquals('12:00:00.5+01:00', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t3));
	assertEquals(39600500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t3)).getTime());

	var t4 = Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse('01:00:00.5+10:00');
	assertEquals(-32399500, t4.getTime());
	assertEquals(600, t4.originalTimezone);
	assertTrue(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.isInstance(t4));
	assertEquals('01:00:00.5+10:00', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t4));
	assertEquals(-32399500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t4)).getTime());
	delete t4.originalTimezone;
//	assertEquals('00:00:00.5+09:00', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t4));
	assertEquals(-32399500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t4)).getTime());

	var t5 = Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse('01:00:00.5-10:00');
	assertEquals(39600500, t5.getTime());
	assertEquals(-600, t5.originalTimezone);
	assertTrue(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.isInstance(t5));
	assertEquals('01:00:00.5-10:00', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t5));
	assertEquals(39600500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t5)).getTime());
	delete t5.originalTimezone;
//	assertEquals('12:00:00.5+01:00', Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t5));
	assertEquals(39600500, Jsonix.Schema.XSD.TimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.TimeAsDate.INSTANCE.print(t5)).getTime());
}

function testSchemaXSDDate() {
	var d0 = Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse('1970-01-01');
	var date0 = new Date(1970, 0, 1, 0, 0, 0);
	assertEquals(date0.getTime(), d0.getTime());
	assertTrue(Jsonix.Schema.XSD.DateAsDate.INSTANCE.isInstance(d0));
	assertEquals('1970-01-01', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d0));
	assertEquals(date0.getTime(), Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d0)).getTime());
	delete d0.originalTimezone;
	assertEquals('1970-01-01', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d0));
	assertEquals(date0.getTime(), Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d0)).getTime());

	var d1 = Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse('1970-01-01Z');
	assertEquals(0, d1.getTime());
	assertTrue(Jsonix.Schema.XSD.DateAsDate.INSTANCE.isInstance(d1));
	assertEquals('1970-01-01Z', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d1));
	assertEquals(0, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d1)).getTime());
	delete d1.originalTimezone;
//	assertEquals('1970-01-01Z', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d1));
	assertEquals(0, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d1)).getTime());

	var d2 = Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse('1970-01-01+01:01');
	assertEquals(-3660000, d2.getTime());
	assertTrue(Jsonix.Schema.XSD.DateAsDate.INSTANCE.isInstance(d2));
	assertEquals('1970-01-01+01:01', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d2));
	assertEquals(-3660000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d2)).getTime());
	delete d2.originalTimezone;
//	assertEquals('1970-01-01+01:01', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d2));
	assertEquals(-3660000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d2)).getTime());

	var d3 = Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse('1970-01-01-02:01');
	assertEquals(+7260000, d3.getTime());
	assertTrue(Jsonix.Schema.XSD.DateAsDate.INSTANCE.isInstance(d3));
	assertEquals('1970-01-01-02:01', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d3));
	assertEquals(+7260000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d3)).getTime());
	delete d3.originalTimezone;
//	assertEquals('1970-01-01-02:01', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d3));
	assertEquals(+7260000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d3)).getTime());

	var d4 = Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse('1970-01-01+01:00');
	assertEquals(-3600000, d4.getTime());
	assertTrue(Jsonix.Schema.XSD.DateAsDate.INSTANCE.isInstance(d4));
	assertEquals('1970-01-01+01:00', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d4));
	assertEquals(-3600000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d4)).getTime());
	delete d4.originalTimezone;
	// assertEquals('1970-01-01+01:00', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d4));
	assertEquals(-3600000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d4)).getTime());

	var d5 = Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse('1970-01-01+14:00');
	assertEquals(-50400000, d5.getTime());
	assertTrue(Jsonix.Schema.XSD.DateAsDate.INSTANCE.isInstance(d5));
	assertEquals('1970-01-01+14:00', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d5));
	assertEquals(-50400000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d5)).getTime());
	delete d5.originalTimezone;
	// assertEquals('1970-01-01+15:00', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d5));
	assertEquals(-50400000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d5)).getTime());

	var d6 = Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse('1970-01-01-14:00');
	assertEquals(50400000, d6.getTime());
	assertTrue(Jsonix.Schema.XSD.DateAsDate.INSTANCE.isInstance(d6));
	assertEquals('1970-01-01-14:00', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d6));
	assertEquals(50400000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d6)).getTime());
	delete d6.originalTimezone;
	// assertEquals('1970-01-01+15:00', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d6));
	assertEquals(50400000, Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(d6)).getTime());

	assertEquals('2001-12-31', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(new Date(2001, 11, 31)));
	assertEquals('2001-12-31', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse('2001-12-31')));
	assertEquals('2001-01-01', Jsonix.Schema.XSD.DateAsDate.INSTANCE.print(Jsonix.Schema.XSD.DateAsDate.INSTANCE.parse('2001-01-01')));

	assertEquals('2001-12-29 2001-12-30 2001-12-31', Jsonix.Schema.XSD.DateAsDate.INSTANCE.LIST.print([ new Date(2001, 11, 29), new Date(2001, 11, 30), new Date(2001, 11, 31) ]));
}

function testSchemaXSDDateTime() {
	var d0 = Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse('1970-01-01T00:00:00');
	var dateTime0 = new Date(1970, 0, 1, 0, 0, 0);
	assertEquals(dateTime0.getTime(), d0.getTime());
	assertTrue(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.isInstance(d0));
	assertEquals('1970-01-01T00:00:00', Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d0));
	assertEquals(dateTime0.getTime(), Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d0)).getTime());
	delete d0.originalTimezone;
//	assertEquals('1970-01-01T00:00:00', Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d0));
	assertEquals(dateTime0.getTime(), Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d0)).getTime());

	var d1 = Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse('1970-01-01T00:00:00Z');
	assertEquals(0, d1.getTime());
	assertTrue(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.isInstance(d1));
	assertEquals('1970-01-01T00:00:00Z', Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d1));
	assertEquals(0, Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d1)).getTime());
	delete d1.originalTimezone;
//	assertEquals('1970-01-01T00:00:00Z', Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d1));
	assertEquals(0, Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d1)).getTime());
	
	var d2 = Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse('1970-01-01T00:00:00+01:00');
	assertEquals(-3600000, d2.getTime());
	assertTrue(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.isInstance(d2));
	assertEquals('1970-01-01T00:00:00+01:00', Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d2));
	assertEquals(-3600000, Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d2)).getTime());
	delete d2.originalTimezone;
//	assertEquals('1970-01-01T00:00:00+01:00', Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d2));
	assertEquals(-3600000, Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d2)).getTime());
	
	var d3 = Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse('1970-01-01T00:00:00-02:00');
	assertEquals(7200000, d3.getTime());
	assertTrue(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.isInstance(d3));
	assertEquals('1970-01-01T00:00:00-02:00', Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d3));
	assertEquals(7200000, Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d3)).getTime());
	delete d3.originalTimezone;
//	assertEquals('1970-01-01T00:00:00-02:00', Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d3));
	assertEquals(7200000, Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.parse(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.print(d3)).getTime());
}
function testSchemaXSDBase64Binary() {
	var d0 = Jsonix.Schema.XSD.Base64Binary.INSTANCE.parse('');
	assertTrue(Jsonix.Schema.XSD.Base64Binary.INSTANCE.isInstance(d0));
	assertEquals(0, d0.length);
	assertEquals('', Jsonix.Schema.XSD.Base64Binary.INSTANCE.print(d0));
	
	var d1 = Jsonix.Schema.XSD.Base64Binary.INSTANCE.parse('QQ==');
	assertTrue(Jsonix.Schema.XSD.Base64Binary.INSTANCE.isInstance(d1));
	assertEquals(1, d1.length);
	assertEquals(65, d1[0]);
	assertEquals('QQ==', Jsonix.Schema.XSD.Base64Binary.INSTANCE.print(d1));

	var d2 = Jsonix.Schema.XSD.Base64Binary.INSTANCE.parse('QUI=');
	assertTrue(Jsonix.Schema.XSD.Base64Binary.INSTANCE.isInstance(d2));
	assertEquals(2, d2.length);
	assertEquals(66, d2[1]);
	assertEquals('QUI=', Jsonix.Schema.XSD.Base64Binary.INSTANCE.print(d2));

	var d3 = Jsonix.Schema.XSD.Base64Binary.INSTANCE.parse('QUJD');
	assertTrue(Jsonix.Schema.XSD.Base64Binary.INSTANCE.isInstance(d3));
	assertEquals(3, d3.length);
	assertEquals(67, d3[2]);
	assertEquals('QUJD', Jsonix.Schema.XSD.Base64Binary.INSTANCE.print(d3));
}
function testSchemaXSDHexBinary() {
	var d0 = Jsonix.Schema.XSD.HexBinary.INSTANCE.parse('');
	assertTrue(Jsonix.Schema.XSD.HexBinary.INSTANCE.isInstance(d0));
	assertEquals(0, d0.length);
	assertEquals('', Jsonix.Schema.XSD.HexBinary.INSTANCE.print(d0));
	
	var d1 = Jsonix.Schema.XSD.HexBinary.INSTANCE.parse('0f');
	assertTrue(Jsonix.Schema.XSD.HexBinary.INSTANCE.isInstance(d1));
	assertEquals(1, d1.length);
	assertEquals(0x0F, d1[0]);
	assertEquals('0F', Jsonix.Schema.XSD.HexBinary.INSTANCE.print(d1));
	
	var d1a = Jsonix.Schema.XSD.HexBinary.INSTANCE.parse('0fb');
	assertTrue(Jsonix.Schema.XSD.HexBinary.INSTANCE.isInstance(d1a));
	assertEquals(1, d1a.length);
	assertEquals(0x0F, d1a[0]);
	assertEquals('0F', Jsonix.Schema.XSD.HexBinary.INSTANCE.print(d1a));

	var d2 = Jsonix.Schema.XSD.HexBinary.INSTANCE.parse('0Fb8');
	assertTrue(Jsonix.Schema.XSD.HexBinary.INSTANCE.isInstance(d2));
	assertEquals(2, d2.length);
	assertEquals(0xB8, d2[1]);
	assertEquals('0FB8', Jsonix.Schema.XSD.HexBinary.INSTANCE.print(d2));
}
function testSchemaXSDQNamePrint() {
	var context = new Jsonix.Context([], {namespacePrefixes : {'urn:c' : 'c'}});
	var output = new Jsonix.XML.Output();
	var doc = output.writeStartDocument();
	output.writeStartElement({p: 't', lp : 'test', ns : 'urn:test'});
	var qn1 = {lp : 'a'};
	assertEquals('a', Jsonix.Schema.XSD.QName.INSTANCE.print(qn1));
	assertEquals('a', Jsonix.Schema.XSD.QName.INSTANCE.print(qn1, context, output, null));
	var qn2 = {lp : 'b', ns: 'urn:b'};
	assertEquals('b', Jsonix.Schema.XSD.QName.INSTANCE.print(qn2));
	assertEquals('p0:b', Jsonix.Schema.XSD.QName.INSTANCE.print(qn2, context, output, null));
	var qn3 = {lp : 'b1', ns: 'urn:b'};
	assertEquals('p0:b1', Jsonix.Schema.XSD.QName.INSTANCE.print(qn3, context, output, null));
	var qn4 = {lp : 'b', ns: 'urn:b', p: 'pb'};
	assertEquals('pb:b', Jsonix.Schema.XSD.QName.INSTANCE.print(qn4));
	assertEquals('pb:b', Jsonix.Schema.XSD.QName.INSTANCE.print(qn4, context, output, null));
	
	assertEquals('c:c', Jsonix.Schema.XSD.QName.INSTANCE.reprint('c:c', context, output, null));
	assertEquals('c:c', Jsonix.Schema.XSD.QName.INSTANCE.LIST.reprint(['c:c'], context, output, null));
	output.writeEndElement();
	output.writeEndDocument();
	var serializedDocument = Jsonix.DOM.serialize(doc);
	logger.debug(serializedDocument);
}
function testSchemaXSDQNameParse() {
	var context = new Jsonix.Context([], {namespacePrefixes : {'urn:c' : 'c'}});
	var doc = Jsonix.DOM.parse('<a xmlns="urn:a" xmlns:a="urn:a" b:b="b" xmlns:b="urn:b"></a>');
	var input = new Jsonix.XML.Input(doc);
	input.nextTag();
	assertEquals('a:a', Jsonix.Schema.XSD.QName.INSTANCE.parse('a:a'));
	assertEquals('urn:a', input.getNamespaceURI('a'));
	assertEquals('{urn:a}a', Jsonix.Schema.XSD.QName.INSTANCE.parse('a:a', context, input, null).key);
}
function testSchemaXSDDuration() {
	var t = Jsonix.Schema.XSD.Duration.INSTANCE;
	assertEquals('P1Y2M3DT4H5M6.789S', t.print({years:1, months: 2, days: 3, hours: 4, minutes: 5, seconds: 6.789}));
	assertEquals('-P1Y2M3DT4H5M6.789S', t.print({sign : -1, years:1, months: 2, days: 3, hours: 4, minutes: 5, seconds: 6.789}));
	assertEquals('-P1Y2M3D', t.print({sign : -1, years:1, months: 2, days: 3}));
	assertEquals('-PT4H5M6.789S', t.print({sign : -1, hours: 4, minutes: 5, seconds: 6.789}));
	assertEquals(-1, t.parse('-P1Y2M3DT4H5M6.789S').sign);
	assertEquals(1, t.parse('-P1Y2M3DT4H5M6.789S').years);
	assertEquals(2, t.parse('-P1Y2M3DT4H5M6.789S').months);
	assertEquals(3, t.parse('-P1Y2M3DT4H5M6.789S').days);
	assertEquals(4, t.parse('-P1Y2M3DT4H5M6.789S').hours);
	assertEquals(5, t.parse('-P1Y2M3DT4H5M6.789S').minutes);
	assertEquals(6.789, t.parse('-P1Y2M3DT4H5M6.789S').seconds);
}