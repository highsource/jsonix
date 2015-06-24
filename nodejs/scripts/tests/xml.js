var Jsonix = require('../jsonix').Jsonix;
module.exports =
{
	"XMLDOM" : 
	{
		"Without prefix" : function(test)
		{
			var xmldom = require('xmldom');
			var di = new (xmldom.DOMImplementation)();
			var doc = di.createDocument();
			var element = doc.createElementNS('urn:test', 'test');
			element.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns', 'urn:test');
			doc.appendChild(element);
			var xs = new (xmldom.XMLSerializer)();
			var docAsString = xs.serializeToString(doc);
			test.equal('<test xmlns="urn:test"/>', docAsString);
			test.done();
		},
		"With Prefix" : function(test)
		{
			var xmldom = require('xmldom');
			var di = new (xmldom.DOMImplementation)();
			var doc = di.createDocument();
			var element = doc.createElementNS('urn:test', 't:test');
			element.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:t', 'urn:test');
			doc.appendChild(element);
			var xs = new (xmldom.XMLSerializer)();
			var docAsString = xs.serializeToString(doc);
			test.equal('<t:test xmlns:t="urn:test"/>', docAsString);
			test.done();
		}
	},
	"QName" : function(test) {
		test.equal("test", (new Jsonix.XML.QName("test")).toString());
		test.equal("{urn:test}test", (new Jsonix.XML.QName("urn:test", "test")).toString());
		test.equal("{urn:test}test", (new Jsonix.XML.QName("urn:test", "test")).key);
		test.equal("{urn:test}test:test", (new Jsonix.XML.QName("urn:test", "test", "test")).toString());
		test.equal("{urn:test}test", (new Jsonix.XML.QName("urn:test", "test", "test")).key);
		test.done();
	},
	"Output": function(test) {
		var output = new Jsonix.XML.Output();
		var doc = output.writeStartDocument();
		output.writeStartElement(new Jsonix.XML.QName("test"));
		output.writeAttribute(new Jsonix.XML.QName("test"), 'test');
		output.writeCharacters('test');

		output.writeEndElement();
		output.writeEndDocument();
		test.notEqual(null, doc.documentElement);
		var serializedDocument = Jsonix.DOM.serialize(doc);
		console.log(serializedDocument);
		test.done();
	},
	"OutputNS": function(test) {
		var output = new Jsonix.XML.Output();
		var doc = output.writeStartDocument();
		output.writeStartElement({ns:'urn:test', lp: 'test', p:''});
		output.writeEndElement();
		output.writeEndDocument();
		var docAsString = Jsonix.DOM.serialize(doc);
		console.log("OutputNS:");
		console.log(docAsString);
		test.done();
	},
	"Input":
	{
		"One": function(test) {
			var doc = Jsonix.DOM
					.parse('<!DOCTYPE a [<!ENTITY g2 "g2" >]><a>b<c>d</c>e<f> <g>h</g><![CDATA[g1]]>&g2;</f><!-- a --></a>');
			test.notEqual(null, doc);
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
                
				test.equal(etalon.length, result.length);
				for ( var index = 0; index < result.length; index++) {
					test.equal(etalon[index], result[index]);
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
                
				test.equal(etalon.length, result.length);
				for ( var index = 0; index < result.length; index++) {
					test.equal(etalon[index], result[index]);
				}
			}
			test.done();
		},
		"Two": function(test) {
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
                
				test.equal(etalon.length, result.length);
				for ( var index = 0; index < result.length; index++) {
					test.equal(etalon[index], result[index]);
				}
			}
			{
				var input = new Jsonix.XML.Input(doc.documentElement);
				input.nextTag();
				input.nextTag();
				input.nextTag();
				input.nextTag();
				input.nextTag();
				test.equal('h0 h h1', input.getElementText());
			}
			test.done();
		},
		"Three": function(test) {
			var doc = Jsonix.DOM
					.parse('<root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Literal"/>');
			var input = new Jsonix.XML.Input(doc.documentElement);
			input.nextTag();
			test.equal("Literal", input.getAttributeNodeNS("http://www.w3.org/2001/XMLSchema-instance", "type").nodeValue);
			test.equal("Literal", input.getAttributeValueNS("http://www.w3.org/2001/XMLSchema-instance", "type"));
			test.done();
		}
	},
	"Calendar" : {
		"Validation" : function(test) {
			test.throws(function() { new Jsonix.XML.Calendar(); });
			test.doesNotThrow(function() { new Jsonix.XML.Calendar({}); });
			test.throws(function() { new Jsonix.XML.Calendar({year:0}); });

			test.doesNotThrow(function() { new Jsonix.XML.Calendar({year:10000}); });
			test.doesNotThrow(function() { new Jsonix.XML.Calendar({year:-10000}); });

			test.throws(function() { new Jsonix.XML.Calendar({month:0}); });
			test.throws(function() { new Jsonix.XML.Calendar({month:13}); });

			test.throws(function() { new Jsonix.XML.Calendar({day:0}); });
			test.throws(function() { new Jsonix.XML.Calendar({day:32}); });
			test.doesNotThrow(function() { new Jsonix.XML.Calendar({day:1}); });
			test.doesNotThrow(function() { new Jsonix.XML.Calendar({day:31}); });

			test.throws(function() { new Jsonix.XML.Calendar({month:2, day:30}); });
			test.throws(function() { new Jsonix.XML.Calendar({month:4, day:31}); });
			test.throws(function() { new Jsonix.XML.Calendar({month:6, day:31}); });
			test.throws(function() { new Jsonix.XML.Calendar({month:9, day:31}); });
			test.throws(function() { new Jsonix.XML.Calendar({month:11, day:31}); });

			test.doesNotThrow(function() { new Jsonix.XML.Calendar({month:1, day:31}); });
			test.doesNotThrow(function() { new Jsonix.XML.Calendar({month:2, day:29}); });
			test.doesNotThrow(function() { new Jsonix.XML.Calendar({month:3, day:31}); });
			test.doesNotThrow(function() { new Jsonix.XML.Calendar({month:4, day:30}); });
			test.doesNotThrow(function() { new Jsonix.XML.Calendar({month:5, day:31}); });
			test.doesNotThrow(function() { new Jsonix.XML.Calendar({month:6, day:30}); });
			test.doesNotThrow(function() { new Jsonix.XML.Calendar({month:7, day:31}); });
			test.doesNotThrow(function() { new Jsonix.XML.Calendar({month:8, day:31}); });
			test.doesNotThrow(function() { new Jsonix.XML.Calendar({month:9, day:30}); });
			test.doesNotThrow(function() { new Jsonix.XML.Calendar({month:10, day:31}); });
			test.doesNotThrow(function() { new Jsonix.XML.Calendar({month:11, day:30}); });
			test.doesNotThrow(function() { new Jsonix.XML.Calendar({month:12, day:31}); });
			test.done();
		},
		"Date" : function(test) {
			test.equal(0, new Jsonix.XML.Calendar({}).date.getTime());
			test.equal(34401906700 - 480 * 60000, new Jsonix.XML.Calendar({year:1971,month:2,day:3,hour:4,minute:5,second:6,fractionalSecond:.7,timezone:480}).date.getTime());
			test.done();
		}
	}
};