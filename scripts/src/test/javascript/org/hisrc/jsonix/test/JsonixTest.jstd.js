JsonixTest = TestCase("JsonixTest");

JsonixTest.prototype.testJsonix = function() {
  assertNotNull(Jsonix);
	var t = Jsonix.Schema.XSD.String.INSTANCE;
	assertEquals('test', t.print('test'));
	assertEquals('test', t.parse('test'));

};