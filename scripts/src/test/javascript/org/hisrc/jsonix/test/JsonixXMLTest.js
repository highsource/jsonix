function testXMLQName() {
	assertEquals("test", (new Jsonix.XML.QName("test")).toString());
	assertEquals("{urn:test}test", (new Jsonix.XML.QName("urn:test", "test"))
			.toString());
	assertEquals("{urn:test}test",
			(new Jsonix.XML.QName("urn:test", "test")).key);
	assertEquals("{urn:test}test:test", (new Jsonix.XML.QName("urn:test",
			"test", "test")).toString());
	assertEquals("{urn:test}test", (new Jsonix.XML.QName("urn:test", "test",
			"test")).key);
}

function testXMLOutput() {

	var output = new Jsonix.XML.Output();
	var doc = output.writeStartDocument();
	output.writeStartElement(new Jsonix.XML.QName("test"));
	output.writeAttribute(new Jsonix.XML.QName("test"), 'test');
	output.writeCharacters('test');

	output.writeEndElement();
	output.writeEndDocument();
	assertNotNull(doc.documentElement);
	var serializedDocument = Jsonix.DOM.serialize(doc);
	logger.debug(serializedDocument);
}

function testXMLInput() {
	var doc = Jsonix.DOM
			.parse('<!DOCTYPE a [<!ENTITY g2 "g2" >]><a>b<c>d</c>e<f> <g>h</g><![CDATA[g1]]>&g2;</f><!-- a --></a>');
	assertNotNull(doc);
	{
		var input = new Jsonix.XML.Input(doc);

		var result = [];
		while (input.hasNext()) {
			var eventType = input.next();
			var name = input.getName();
			result.push(eventType);
		}
		// entity reference 9
		// attribute 10
		// dtd 11
		// namespace 13
		// NOTATION_DECLARATION 14
		// entity declaration 15

		var etalon = [ 7, 1, 4, 1, 4, 2, 4, 1, 6, 1, 4, 2, 12, 4, 2, 5, 2, 8 ];

		assertEquals(etalon.length, result.length);
		for ( var index = 0; index < result.length; index++) {
			assertEquals(etalon[index], result[index]);
		}
	}
	{
		var input = new Jsonix.XML.Input(doc.documentElement);

		var result = [];
		while (input.hasNext()) {
			var eventType = input.next();
			result.push(eventType);
		}

		var etalon = [ 1, 4, 1, 4, 2, 4, 1, 6, 1, 4, 2, 12, 4, 2, 5, 2 ];

		assertEquals(etalon.length, result.length);
		for ( var index = 0; index < result.length; index++) {
			assertEquals(etalon[index], result[index]);
		}
	}
}

function testXMLInputNextTag() {
	var doc = Jsonix.DOM
			.parse('<a>b<c>d</c>e<f> <g><![CDATA[h0]]> <!-- ... -->h<?pi?> <![CDATA[h1]]></g><![CDATA[g1]]>g2</f><!-- a --></a>');
	{
		var input = new Jsonix.XML.Input(doc.documentElement);

		var result = [];
		// input.next();
		while (input.hasNext()) {
			var eventType = input.nextTag();
			var name = input.getName();
			result.push(eventType);
		}

		var etalon = [ 1, 1, 2, 1, 1, 2, 2, 2 ];

		assertEquals(etalon.length, result.length);
		for ( var index = 0; index < result.length; index++) {
			assertEquals(etalon[index], result[index]);
		}
	}
	{
		var input = new Jsonix.XML.Input(doc.documentElement);
		input.nextTag();
		input.nextTag();
		input.nextTag();
		input.nextTag();
		input.nextTag();
		assertEquals('h0 h h1', input.getElementText());
	}
}

function testXMLInputNamespaces() {
	var doc = Jsonix.DOM
			.parse('<a xmlns="urn:a" xmlns:a="urn:a" b:b="b" xmlns:b="urn:b"></a>');
	var input = new Jsonix.XML.Input(doc);
	input.nextTag();
	assertEquals('urn:a', input.getNamespaceURI(''));
	assertEquals('urn:a', input.getNamespaceURI('a'));
	assertEquals('urn:b', input.getNamespaceURI('b'));
}