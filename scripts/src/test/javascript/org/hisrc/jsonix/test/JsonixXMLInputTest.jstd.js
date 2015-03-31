JsonixXMLInputTest = TestCase("JsonixXMLInputTest");

JsonixXMLInputTest.prototype.testGetAttributeValueNS = function() {

  assertNotNull(Jsonix);
	var doc = Jsonix.DOM
			.parse('<root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Literal"/>');
	var input = new Jsonix.XML.Input(doc.documentElement);
	input.nextTag();
	assertEquals("Literal", input.getAttributeNodeNS("http://www.w3.org/2001/XMLSchema-instance", "type").nodeValue);
	assertEquals("Literal", input.getAttributeValueNS("http://www.w3.org/2001/XMLSchema-instance", "type"));
};