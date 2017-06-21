var Jsonix = require('jsonix').Jsonix;
var One = require('./One/Mappings').One;
var Two = require('./One/Mappings').Two;
module.exports =
{
	"MarshalValueType" : function(test)
	{
		var context = new Jsonix.Context([ One ]);
		var marshaller = context.createMarshaller();
		var value = {
			name : {
				localPart : "value"
			},
			value : {
				value : 'test'
			}
		};
		var node = marshaller.marshalDocument(value);
		var serializedNode = Jsonix.DOM.serialize(node);
		console.log(serializedNode);
		test.ok(serializedNode.length > 5);
		test.done();
	},
	"MarshalValueTypeDirectly" : function(test)
	{
		var context = new Jsonix.Context([ One ]);
		var marshaller = context.createMarshaller();
		var value = {
			name : "value",
			value : "value"
		};
		var node = marshaller.marshalDocument(value);
		var serializedNode = Jsonix.DOM.serialize(node);
		console.log(serializedNode);
		test.equal("<value>value</value>", serializedNode);
		test.done();
	},
	"UnmarshalValueType" : function(test)
	{
		var context = new Jsonix.Context([ One ]);
		var unmarshaller = context.createUnmarshaller();
		var text = '<value>test</value>';
		var result = unmarshaller.unmarshalString(text);
		test.equal('value', result.name.localPart);
		test.equal('test', result.value.value);
		test.done();
	},
	"MarhshalAnyAttributeType" : function(test) {
		var context = new Jsonix.Context([ One ], {
			namespacePrefixes : {
				'urn:b' : 'b'
			}
		});
		var marshaller = context.createMarshaller();
		var value = {
			name : {
				localPart : "anyAttribute"
			},
			value : {
				attributes : {
					a : 'a',
					'{urn:b}b' : 'b',
					'{urn:c}c:c' : 'c'
				}
			}
		};
		var node = marshaller.marshalDocument(value);
		var serializedNode = Jsonix.DOM.serialize(node);
		console.log(serializedNode);
		test.ok(serializedNode.length > 5);
		test.done();
	},
	"UnmarhshalAnyAttributeType" : function(test) {
		var context = new Jsonix.Context([ One ]);
		var unmarshaller = context.createUnmarshaller();
		var text = '<anyAttribute xmlns:b="urn:b" xmlns:c="urn:c" a="a" b:b="b" c:c="c"/>';
		var result = unmarshaller.unmarshalString(text);
		test.equal('anyAttribute', result.name.localPart);
		test.equal('a', result.value.attributes['a']);
		test.equal('b', result.value.attributes['{urn:b}b']);
		test.equal('c', result.value.attributes['{urn:c}c']);
		test.done();
	},

	"MarhshalAttributeType" : function(test) {
		var context = new Jsonix.Context([ One ], {
			namespacePrefixes : {}
		});
		var marshaller = context.createMarshaller();
		var value = {
			name : {
				localPart : "attribute"
			},
			value : {
				attribute : 'test'
			}
		};
		var node = marshaller.marshalDocument(value);
		var serializedNode = Jsonix.DOM.serialize(node);
		console.log(serializedNode);
		test.ok(serializedNode.length > 5);
		test.done();
	},
	"MarhshalAttributeTypeDirectly" : function(test) {
		var context = new Jsonix.Context([ One ], {
			namespacePrefixes : {}
		});
		var marshaller = context.createMarshaller();
		var value = {
			name :  "attribute",
			value : "test"
		};
		var node = marshaller.marshalDocument(value);
		var serializedNode = Jsonix.DOM.serialize(node);
		console.log(serializedNode);
		test.equal('<attribute attribute="test"/>', serializedNode);
		test.done();
	},
	"UnmarshalAttributeType" : function(test) {
		var context = new Jsonix.Context([ One ]);
		var unmarshaller = context.createUnmarshaller();
		var text = '<attribute attribute="test"/>';
		var result = unmarshaller.unmarshalString(text);
		test.equal('attribute', result.name.localPart);
		test.equal('test', result.value.attribute);
		test.done();
	},

	"MarhshalElementType" : function(test) {
		var context = new Jsonix.Context([ One ]);
		var marshaller = context.createMarshaller();
		var value = {
			name : {
				localPart : 'element'
			},
			value : {
				element : 'earth',
				item : [ 'a', 'b', 'c' ],
				items : [ 'd', 'e', 'f' ]
			}
		};
		var node = marshaller.marshalDocument(value);
		var serializedNode = Jsonix.DOM.serialize(node);
		console.log(serializedNode);
		test.ok(serializedNode.length > 5);
		test.done();
	},

	"UnmarhshalElementType" : function(test) {
		var context = new Jsonix.Context([ One ]);
		var unmarshaller = context.createUnmarshaller();
		var text = '<element>' +
		//
		'<element>earth</element>' +
		//
		'<elements>' +
		//
		'<element>wind</element>' +
		//
		'</elements>' +
		//
		'<item>a</item>' +
		//
		'<item>b</item>' +
		//
		'<item>c</item>' +
		//
		'<items>' +
		//
		'<item>d</item>' +
		//
		'<item>e</item>' +
		//
		'<item>f</item>' +
		//
		'</items>' +
		//
		'</element>';
		var result = unmarshaller.unmarshalString(text);
		test.equal('element', result.name.localPart);
		test.equal('earth', result.value.element);
		test.equal('wind', result.value.elements);
		test.equal(3, result.value.item.length);
		test.equal('a', result.value.item[0]);
		test.equal('b', result.value.item[1]);
		test.equal('c', result.value.item[2]);
		test.equal(3, result.value.items.length);
		test.equal('d', result.value.items[0]);
		test.equal('e', result.value.items[1]);
		test.equal('f', result.value.items[2]);
		test.done();
	},

	"MarhshalElementsType" : function(test) {
		var context = new Jsonix.Context([ One ]);
		var marshaller = context.createMarshaller();
		var value = {
			name : {
				localPart : 'elements'
			},
			value : {
				ab : 1,
				abs : {
					value : 'two',
					TYPE_NAME : 'One.ValueType'
				},
				cd : [ 3, {
					value : 'four',
					TYPE_NAME : 'One.ValueType'
				}, 5, {
					value : 'six',
					TYPE_NAME : 'One.ValueType'
				} ],
				cds : [ 7, {
					value : 'eight',
					TYPE_NAME : 'One.ValueType'
				}, 9, {
					value : 'ten',
					TYPE_NAME : 'One.ValueType'
				} ]
			}
		};
		var node = marshaller.marshalDocument(value);
		var serializedNode = Jsonix.DOM.serialize(node);
		console.log(serializedNode);
		test.ok(serializedNode.length > 5);
		test.done();
	},

	"UnmarhshalElementsType" : function(test) {
		var context = new Jsonix.Context([ One ]);
		var unmarshaller = context.createUnmarshaller();
		var marshaller = context.createMarshaller();
		var text = '<elements>' +
		//
		'<b>1</b>' +
		//
		'<abs>' +
		//
		'<a>two</a>' +
		//
		'</abs>' +
		//
		'<c>3</c>' +
		//
		'<d>four</d>' +
		//
		'<c>5</c>' +
		//
		'<d>six</d>' +
		//
		'<cds>' +
		//
		'<c>7</c>' +
		//
		'<d>eight</d>' +
		//
		'<c>9</c>' +
		//
		'<d>ten</d>' +
		//
		'</cds>' +
		//
		'</elements>';
		var result = unmarshaller.unmarshalString(text);
		test.equal('elements', result.name.localPart);
		test.equal(1, result.value.ab);
		test.equal('two', result.value.abs.value);
		test.equal('One.ValueType', result.value.abs.TYPE_NAME);
		test.equal(3, result.value.cd[0]);
		test.equal('four', result.value.cd[1].value);
		test.equal('One.ValueType', result.value.cd[1].TYPE_NAME);
		test.equal(5, result.value.cd[2]);
		test.equal('six', result.value.cd[3].value);
		test.equal('One.ValueType', result.value.cd[3].TYPE_NAME);
		test.equal(7, result.value.cds[0]);
		test.equal('eight', result.value.cds[1].value);
		test.equal('One.ValueType', result.value.cds[1].TYPE_NAME);
		test.equal(9, result.value.cds[2]);
		test.equal('ten', result.value.cds[3].value);
		test.equal('One.ValueType', result.value.cds[3].TYPE_NAME);
		console.log(marshaller.marshalString(result));
		test.done();
	},

	"MarhshalElementRefType" : function(test) {
		var context = new Jsonix.Context([ One, Two ], {
			namespacePrefixes : {
				'urn:s' : 's'
			}
		});
		var marshaller = context.createMarshaller();
		var value = {
			name : {
				localPart : "elementRef"
			},
			value : {
				element : {
					name : 'string',
					value : 'tiger'
				}
			}
		};
		var node = marshaller.marshalDocument(value);
		var serializedNode = Jsonix.DOM.serialize(node);
		console.log(serializedNode);
		test.ok(serializedNode.length > 5);
		test.done();
	},
	"UnmarshalElementRefType" : function(test) {
		var context = new Jsonix.Context([ One ]);
		var unmarshaller = context.createUnmarshaller();
		var text = '<elementRef>' +
		//
		'<element>one</element>' +
		//
		'<element1>one.1</element1>' +
		//
		'<elements>' +
		//
		'<element>two</element>' +
		//
		'</elements>' +
		//
		'<elements1>' +
		//
		'<element1>2.1</element1>' +
		//
		'</elements1>' +
		//
		'<item>three</item>' +
		//
		'<item>four</item>' +
		//
		'<items>' +
		//
		'<item>five</item>' +
		//
		'<item>six</item>' +
		//
		'</items>' +
		//
		'<mixes>' +
		//
		'<mix>seven</mix>' +
		//
		'eight' +
		//
		'<mix>nine</mix>' +
		//
		'</mixes>' +
		//
		'ten' +
		//
		'<mix>eleven</mix>' +
		//
		'twelve' +
		//
		'</elementRef>';
		var result = unmarshaller.unmarshalString(text);
		test.equal('elementRef', result.name.localPart);
		test.equal('element', result.value.element.name.localPart);
		test.equal('one', result.value.element.value);
		test.equal('element1', result.value.element1.name.localPart);
		test.equal('one.1', result.value.element1.value);
		test.equal('element', result.value.elements.name.localPart);
		test.equal('two', result.value.elements.value);
		test.equal('element1', result.value.elements1.name.localPart);
		test.equal(2.1, result.value.elements1.value);
		test.equal(2, result.value.item.length);
		test.equal('item', result.value.item[0].name.localPart);
		test.equal('three', result.value.item[0].value);
		test.equal('item', result.value.item[1].name.localPart);
		test.equal('four', result.value.item[1].value);
		test.equal(2, result.value.items.length);
		test.equal('item', result.value.items[0].name.localPart);
		test.equal('five', result.value.items[0].value);
		test.equal('item', result.value.items[1].name.localPart);
		test.equal('six', result.value.items[1].value);
		test.equal(3, result.value.mixes.length);
		test.equal('mix', result.value.mixes[0].name.localPart);
		test.equal('seven', result.value.mixes[0].value.value);
		test.equal('eight', result.value.mixes[1]);
		test.equal('mix', result.value.mixes[2].name.localPart);
		test.equal('nine', result.value.mixes[2].value.value);
		test.equal(3, result.value.mix.length);
		test.equal('ten', result.value.mix[0]);
		test.equal('mix', result.value.mix[1].name.localPart);
		test.equal('eleven', result.value.mix[1].value.value);
		test.equal('twelve', result.value.mix[2]);
		test.done();
	},

	"UnmarshalElementRefsType" : function(test) {
		var context = new Jsonix.Context([ One ]);
		var unmarshaller = context.createUnmarshaller();
		var text = '<elementRefs>' +
		//
		'<element>one</element>' +
		//
		'<element1>one.1</element1>' +
		//
		'<elements>' +
		//
		'<element>two</element>' +
		//
		'</elements>' +
		//
		'<elements1>' +
		//
		'<element1>2.1</element1>' +
		//
		'</elements1>' +
		//
		'<item>three</item>' +
		//
		'<item>four</item>' +
		//
		'<items>' +
		//
		'<item>five</item>' +
		//
		'<item>six</item>' +
		//
		'</items>' +
		//
		'<mixes>' +
		//
		'<mix>seven</mix>' +
		//
		'eight' +
		//
		'<mix>nine</mix>' +
		//
		'</mixes>' +
		//
		'ten' +
		//
		'<mix>eleven</mix>' +
		//
		'twelve' +
		//
		'</elementRefs>';
		var result = unmarshaller.unmarshalString(text);
		test.equal('elementRefs', result.name.localPart);
		test.equal('element', result.value.element.name.localPart);
		test.equal('one', result.value.element.value);
		test.equal('element1', result.value.element1.name.localPart);
		test.equal('one.1', result.value.element1.value);
		test.equal('element', result.value.elements.name.localPart);
		test.equal('two', result.value.elements.value);
		test.equal('element1', result.value.elements1.name.localPart);
		test.equal(2.1, result.value.elements1.value);
		test.equal(2, result.value.item.length);
		test.equal('item', result.value.item[0].name.localPart);
		test.equal('three', result.value.item[0].value);
		test.equal('item', result.value.item[1].name.localPart);
		test.equal('four', result.value.item[1].value);
		test.equal(2, result.value.items.length);
		test.equal('item', result.value.items[0].name.localPart);
		test.equal('five', result.value.items[0].value);
		test.equal('item', result.value.items[1].name.localPart);
		test.equal('six', result.value.items[1].value);
		test.equal(3, result.value.mixes.length);
		test.equal('mix', result.value.mixes[0].name.localPart);
		test.equal('seven', result.value.mixes[0].value.value);
		test.equal('eight', result.value.mixes[1]);
		test.equal('mix', result.value.mixes[2].name.localPart);
		test.equal('nine', result.value.mixes[2].value.value);
		test.equal(3, result.value.mix.length);
		test.equal('ten', result.value.mix[0]);
		test.equal('mix', result.value.mix[1].name.localPart);
		test.equal('eleven', result.value.mix[1].value.value);
		test.equal('twelve', result.value.mix[2]);
		test.done();
	},
	"MarhshalAnyElementType" : function(test) {
		var context = new Jsonix.Context([ One, Two ]);
		var marshaller = context.createMarshaller();
		var value = {
			name : {
				localPart : "anyElement"
			},
			value : {
				attribute : 'zero',
				any : [ {
					name : {
						localPart : 'string'
					},
					value : 'one'
				}, {
					name : 'value',
					value : {
						value : 'two'
					}
				}, 'three', Jsonix.DOM.parse('<node>four</node>').documentElement ]
			}

		};
		var node = marshaller.marshalDocument(value);
		var serializedNode = Jsonix.DOM.serialize(node);
		console.log(serializedNode);
		test.ok(serializedNode.length > 5);
		test.done();
	},

	"UnmarhshalAnyElementType" : function(test) {
		var context = new Jsonix.Context([ One, Two ]);
		var unmarshaller = context.createUnmarshaller();
		var text = '<anyElement attribute=\"zero\">' +
		//
		'<string>one</string>' +
		//
		'<value>two</value>' +
		//
		'three' +
		//
		'<node>four</node>' +
		//
		'</anyElement>';
		//
		var result = unmarshaller.unmarshalString(text);
		test.equal('anyElement', result.name.localPart);
		test.equal('zero', result.value.attribute);
		test.equal(4, result.value.any.length);
		//
		test.equal('string', result.value.any[0].name.localPart);
		test.equal('one', result.value.any[0].value);
		//
		test.equal('value', result.value.any[1].name.localPart);
		test.equal('two', result.value.any[1].value.value);
		//
		test.equal('three', result.value.any[2]);
		//
		test.equal('node', result.value.any[3].localName);
		test.done();
	},
	"MarhshalSimpleTypesType" : function(test) {
		var context = new Jsonix.Context([ One ]);
		var marshaller = context.createMarshaller();
		var value = {
			name : {
				localPart : 'simpleTypes'
			},
			value : {
				date : new Date(2000, 0, 1),
				'double' : 1.1,
				integer : 2,
				string : 'three',
				dates : [ new Date(2000, 0, 1), new Date(2001, 0, 1) ],
				doubles : [ 1.1, 1.2 ],
				integers : [ 2, 3 ],
				strings : [ 'three', 'four' ],
				//
				doublesList : [ [ 0, 0 ], [ 0, 1 ], [ 6, 7 ], [ 1, 0 ], [ 0, 0 ] ]
			}
		};
		var node = marshaller.marshalDocument(value);
		var serializedNode = Jsonix.DOM.serialize(node);
		console.log(serializedNode);
		test.ok(serializedNode.length > 5);
		test.done();
	},

	"UnmarhshalSimpleTypesType" : function(test) {
		var context = new Jsonix.Context([ One ]);
		var unmarshaller = context.createUnmarshaller();
		var text = '<simpleTypes>' +
		//
		'<date>2000-01-01</date>' +
		//
		'<double>1.1</double>' +
		//
		'<integer>2</integer>' +
		//
		'<string>three</string>' +
		//
		//
		//
		'<dates>2000-01-01 2001-01-01</dates>' +
		//
		'<doubles>1.1 1.2</doubles>' +
		//
		'<integers>2 3</integers>' +
		//
		'<strings>three four</strings>' +
		//
		//
		//
		'<doublesList>0 0, 0 1, 6 7, 1 0, 0 0</doublesList>' +
		//
		'</simpleTypes>';
		//
		var result = unmarshaller.unmarshalString(text);
		test.equal('simpleTypes', result.name.localPart);
		//
		test.equal(2000, result.value.date.getFullYear());
		test.equal(1.1, result.value['double']);
		test.equal(2, result.value.integer);
		test.equal('three', result.value.string);

		//
		test.equal(2000, result.value.dates[0].getFullYear());
		test.equal(2001, result.value.dates[1].getFullYear());
		test.equal(1.1, result.value.doubles[0]);
		test.equal(1.2, result.value.doubles[1]);
		test.equal(2, result.value.integers[0]);
		test.equal(3, result.value.integers[1]);
		test.equal('three', result.value.strings[0]);
		test.equal('four', result.value.strings[1]);
		test.equal(5, result.value.doublesList.length);
		test.equal(2, result.value.doublesList[2].length);
		test.equal(6, result.value.doublesList[2][0]);
		test.equal(7, result.value.doublesList[2][1]);
		test.done();
	},

	"UnmarhshalMapElementType" : function(test) {
		var context = new Jsonix.Context([ One ]);
		var unmarshaller = context.createUnmarshaller();
		var text = '<elementMap>' +
		//
		'<element key="one">earth</element>' +
		//
		'<element key="two">wind</element>' +
		//
		'<elementCollection key="one">1</elementCollection>' +
		//
		'<elementCollection key="one">I</elementCollection>' +
		//
		'<elementCollection key="two">2</elementCollection>' +
		//
		'<elementCollection key="two">II</elementCollection>' +
		//
		'<elements>' +
		//
		'<element key="three">fire</element>' +
		//
		'<element key="four">wood</element>' +
		//
		'</elements>' +
		//
		'<elementsCollection>' +
		//
		'<element key="three">3</element>' +
		//
		'<element key="three">III</element>' +
		//
		'<element key="four">4</element>' +
		//
		'<element key="four">IV</element>' +
		//
		'</elementsCollection>' +
		//
		'</elementMap>';
		var result = unmarshaller.unmarshalString(text);
		test.equal('elementMap', result.name.localPart);
		test.equal('earth', result.value.element.one);
		test.equal('wind', result.value.element.two);
		test.equal('fire', result.value.elements.three);
		test.equal('wood', result.value.elements.four);
		test.equal(2, result.value.elementCollection.one.length);
		test.equal('1', result.value.elementCollection.one[0]);
		test.equal('I', result.value.elementCollection.one[1]);
		test.equal(2, result.value.elementCollection.two.length);
		test.equal('2', result.value.elementCollection.two[0]);
		test.equal('II', result.value.elementCollection.two[1]);
		test.equal(2, result.value.elementsCollection.three.length);
		test.equal('3', result.value.elementsCollection.three[0]);
		test.equal('III', result.value.elementsCollection.three[1]);
		test.equal(2, result.value.elementsCollection.four.length);
		test.equal('4', result.value.elementsCollection.four[0]);
		test.equal('IV', result.value.elementsCollection.four[1]);
		test.done();
	},
	"MarhshalMapElementType" : function(test) {
		var context = new Jsonix.Context([ One ]);
		var marshaller = context.createMarshaller();
		var value = {
			name : {
				localPart : 'elementMap'
			},
			value : {
				element : {
					'one' : 'earth',
					'two' : 'wind'
				},
				elements : {
					'three' : 'fire',
					'four' : 'wood'
				},
				elementCollection : {
					one : [ '1', 'I' ],
					two : [ '2', 'II' ]
				},
				elementsCollection : {
					three : [ '3', 'III' ],
					four : [ '4', 'IV' ]
				}
			}
		};
		var node = marshaller.marshalDocument(value);
		var serializedNode = Jsonix.DOM.serialize(node);
		console.log(serializedNode);
		test.done();
	},
	"MarshalString" : function(test)
	{
		var context = new Jsonix.Context([ One, Two ]);
		var marshaller = context.createMarshaller();
		var value = {
			name : 'string',
			value : 'text'
		};
		var node = marshaller.marshalDocument(value);
		var serializedNode = Jsonix.DOM.serialize(node);
		console.log(serializedNode);
		test.ok(serializedNode.length > 5);
		test.done();
	},
	"UnmarshalString" : function(test)
	{
		var context = new Jsonix.Context([ One, Two ]);
		var unmarshaller = context.createUnmarshaller();
		var text = '<string>text</string>';
		var result = unmarshaller.unmarshalString(text);
		test.equal('string', result.name.localPart);
		test.equal('text', result.value);
		test.done();
	},
	"MarshalCDATAValueType" : function(test)
	{
		var context = new Jsonix.Context([ One ]);
		var marshaller = context.createMarshaller();
		var value = {
			name : {
				localPart : "valueAsCDATA"
			},
			value : {
				value : 'test<>?\'"&'
			}
		};
		var result = marshaller.marshalString(value);
		console.log(result);
		test.equal(result, '<valueAsCDATA><![CDATA[test<>?\'"&]]></valueAsCDATA>');
		test.done();
	},
	"UnmarshalCDATAValueType": function (test)
	{
		var context = new Jsonix.Context([ One ]);
		var unmarshaller = context.createUnmarshaller();
		var text = '<valueAsCDATA><![CDATA[test<>?\'"&]]></valueAsCDATA>';
		var result = unmarshaller.unmarshalString(text);
		test.equal('valueAsCDATA', result.name.localPart);
		test.equal('test<>?\'"&', result.value.value);
		test.done();
	}
};
