var fs = require('fs');
var DOMParser = require('xmldom').DOMParser;
module.exports = {
	parseFromString: function(test) {
		var Handler = function(){};
		Handler.prototype = {
			startDocument : function() {
				console.log('startDocument');
			},
			startElement:function(namespaceURI, localName, qName, attrs) {
				console.log('=====================================');
				console.log('startElement');
				console.log('=====================================');
				console.log('namespaceURI');
				console.log(namespaceURI);
				console.log('localName');
				console.log(localName);
				console.log('qName');
				console.log(qName);
				console.log('attrs');
				console.log(attrs);
			},
			endElement:function(namespaceURI, localName, qName) {
				console.log('=====================================');
				console.log('endElement');
				console.log('=====================================');
				console.log('namespaceURI');
				console.log(namespaceURI);
				console.log('localName');
				console.log(localName);
				console.log('qName');
				console.log(qName);
			},
			startPrefixMapping:function(prefix, uri) {
				console.log('=====================================');
				console.log('startPrefixMapping');
				console.log('=====================================');
				console.log('prefix');
				console.log(prefix);
				console.log('uri');
				console.log(uri);
			},
			endPrefixMapping:function(prefix) {
				console.log('=====================================');
				console.log('endPrefixMapping');
				console.log('=====================================');
				console.log('prefix');
				console.log(prefix);
			},
			processingInstruction:function(target, data) {
				console.log('=====================================');
				console.log('processingInstruction');
				console.log('=====================================');
				console.log('target');
				console.log(target);
				console.log('data');
				console.log(data);
			},
			ignorableWhitespace:function(ch, start, length) {
				console.log('=====================================');
				console.log('ignorableWhitespace');
				console.log('=====================================');
				console.log('ch');
				console.log(ch);
				console.log('start');
				console.log(start);
				console.log('length');
				console.log(length);
			},
			characters:function(chars, start, length) {
				console.log('=====================================');
				console.log('characters');
				console.log('=====================================');
				console.log('chars');
				console.log(chars);
				console.log('start');
				console.log(start);
				console.log('length');
				console.log(length);
			},
			skippedEntity:function(name) {
				console.log('=====================================');
				console.log('skippedEntity');
				console.log('=====================================');
				console.log('name');
				console.log(name);
			},
			endDocument:function() {
				console.log('endDocument');
			},
			comment:function(chars, start, length) {
				console.log('=====================================');
				console.log('comment');
				console.log('=====================================');
				console.log('chars');
				console.log(chars);
				console.log('start');
				console.log(start);
				console.log('length');
				console.log(length);
			},
			startCDATA:function() {
				console.log('=====================================');
				console.log('startCDATA');
				console.log('=====================================');
			},
			endCDATA:function() {
				console.log('=====================================');
				console.log('endCDATA');
				console.log('=====================================');
			},
			startDTD:function(name, publicId, systemId) {
				console.log('=====================================');
				console.log('startDTD');
				console.log('=====================================');
				console.log('name');
				console.log(name);
				console.log('publicId');
				console.log(publicId);
				console.log('systemId');
				console.log(systemId);
			},
		};
		
		var parser = new DOMParser({
			domBuilder: new Handler()
		});

		console.log('Reading [test1.xml].');
		fs.readFile('tests/test1.xml', {encoding: 'utf8'}, function(err, data) {
			if (err)
			{
				throw err;
			}
			else
			{
				test.notEqual(null, data);


				var dataString = data.toString();
				test.notEqual(null, dataString);
				parser.parseFromString(dataString, 'application/xml');
			}
			test.ifError(err);
			test.done();
		});

	}
};
