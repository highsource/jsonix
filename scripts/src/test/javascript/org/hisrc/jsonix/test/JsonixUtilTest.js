function testUtilType() {
	assertTrue(Jsonix.Util.Type.isString('abc'));
	assertFalse(Jsonix.Util.Type.isString(1));
	assertFalse(Jsonix.Util.Type.isString(null));
	assertFalse(Jsonix.Util.Type.isString(undefined));
	//
	assertTrue(Jsonix.Util.Type.isBoolean(true));
	assertTrue(Jsonix.Util.Type.isBoolean(true));
	assertFalse(Jsonix.Util.Type.isBoolean('true'));
	//
	assertTrue(Jsonix.Util.Type.isNumber(0));
	assertTrue(Jsonix.Util.Type.isNumber(1.2));
	assertFalse(Jsonix.Util.Type.isNumber(Number('1..2')));
	assertFalse(Jsonix.Util.Type.isNumber('1.2'));

	assertTrue(Jsonix.Util.Type.isArray([]));
	assertTrue(Jsonix.Util.Type.isArray([0]));
	assertFalse(Jsonix.Util.Type.isArray(0));
	
	assertTrue(Jsonix.Util.Type.isNumberOrNaN(Number.NaN));
	assertTrue(Jsonix.Util.Type.isNaN(Number.NaN));
	assertFalse(Jsonix.Util.Type.isNumber(Number.NaN));
}
function testUtilStringUtils() {
	assertEquals('a b c', Jsonix.Util.StringUtils.trim('  a b c  '));
	assertTrue(Jsonix.Util.StringUtils.isEmpty('    '));
	assertTrue(Jsonix.Util.StringUtils.isEmpty(Jsonix.Util.StringUtils.whitespaceCharacters));
	
}