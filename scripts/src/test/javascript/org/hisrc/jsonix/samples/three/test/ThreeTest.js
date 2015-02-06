function testFourMarshalString() {
	var context = new Jsonix.Context([ Three, Four ]);
	var marshaller = context.createMarshaller();
	var value = {
		name : {
			localPart : "string"
		},
		value : 'text'
	};
	var node = marshaller.marshalDocument(value);
	var serializedNode = Jsonix.DOM.serialize(node);
	logger.debug(serializedNode);
	assertTrue(serializedNode.length > 5);
}
function testFourUnmarshalString() {
	var context = new Jsonix.Context([ Three, Four ]);
	var unmarshaller = context.createUnmarshaller();
	var text = '<string>text</string>';
	var result = unmarshaller.unmarshalString(text);
	assertEquals('string', result.name.localPart);
	assertEquals('text', result.value);
}
function testThree() {
	var context = new Jsonix.Context([ Three ]);
	var ThreeValueType = context.resolveTypeInfo('Three.ValueType', Three)
	assertEquals(1, ThreeValueType.properties.length);
	logger.debug(ThreeValueType.properties[0].CLASS_NAME);
}
function testThreeMarhshalValueType() {
	var context = new Jsonix.Context([ Three ]);
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
	logger.debug(serializedNode);
	assertTrue(serializedNode.length > 8);
}
function testThreeUnmarshalValueType() {
	var context = new Jsonix.Context([ Three ]);
	var unmarshaller = context.createUnmarshaller();
	var text = '<value>test</value>';
	var result = unmarshaller.unmarshalString(text);
	assertEquals('value', result.name.localPart);
	assertEquals('test', result.value.value);
}
function testThreeMarhshalAnyAttributeType() {
	var context = new Jsonix.Context([ Three ], {
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
	logger.debug(serializedNode);
	assertTrue(serializedNode.length > 5);
}
function testThreeUnmarhshalAnyAttributeType() {
	var context = new Jsonix.Context([ Three ]);
	var unmarshaller = context.createUnmarshaller();
	var text = '<anyAttribute xmlns:b="urn:b" xmlns:c="urn:c" a="a" b:b="b" c:c="c"/>';
	var result = unmarshaller.unmarshalString(text);
	assertEquals('anyAttribute', result.name.localPart);
	assertEquals('a', result.value.attributes['a']);
	assertEquals('b', result.value.attributes['{urn:b}b']);
	assertEquals('c', result.value.attributes['{urn:c}c']);
}

function testThreeMarhshalAttributeType() {
	var context = new Jsonix.Context([ Three ], {
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
	logger.debug(serializedNode);
	assertTrue(serializedNode.length > 5);
}
function testThreeUnmarshalAttributeType() {
	var context = new Jsonix.Context([ Three ]);
	var unmarshaller = context.createUnmarshaller();
	var text = '<attribute attribute="test"/>';
	var result = unmarshaller.unmarshalString(text);
	assertEquals('attribute', result.name.localPart);
	assertEquals('test', result.value.attribute);
}

function testThreeMarhshalElementType() {
	var context = new Jsonix.Context([ Three ]);
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
	logger.debug(serializedNode);
	assertTrue(serializedNode.length > 5);
}

function testThreeUnmarhshalElementType() {
	var context = new Jsonix.Context([ Three ]);
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
	assertEquals('element', result.name.localPart);
	assertEquals('earth', result.value.element);
	assertEquals('wind', result.value.elements);
	assertEquals(3, result.value.item.length);
	assertEquals('a', result.value.item[0]);
	assertEquals('b', result.value.item[1]);
	assertEquals('c', result.value.item[2]);
	assertEquals(3, result.value.items.length);
	assertEquals('d', result.value.items[0]);
	assertEquals('e', result.value.items[1]);
	assertEquals('f', result.value.items[2]);
}

function testThreeMarhshalElementsType() {
	var context = new Jsonix.Context([ Three ]);
	var marshaller = context.createMarshaller();
	var value = {
		name : {
			localPart : 'elements'
		},
		value : {
			ab : 1,
			abs : {
				value : 'two',
				TYPE_NAME : 'Three.ValueType'
			},
			cd : [ 3, {
				value : 'four',
				TYPE_NAME : 'Three.ValueType'
			}, 5, {
				value : 'six',
				TYPE_NAME : 'Three.ValueType'
			} ],
			cds : [ 7, {
				value : 'eight',
				TYPE_NAME : 'Three.ValueType'
			}, 9, {
				value : 'ten',
				TYPE_NAME : 'Three.ValueType'
			} ]
		}
	};
	var node = marshaller.marshalDocument(value);
	var serializedNode = Jsonix.DOM.serialize(node);
	logger.debug(serializedNode);
	assertTrue(serializedNode.length > 5);
}

function testThreeUnmarhshalElementsType() {
	var context = new Jsonix.Context([ Three ]);
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
	assertEquals('elements', result.name.localPart);
	assertEquals(1, result.value.ab);
	assertEquals('two', result.value.abs.value);
	assertEquals('Three.ValueType', result.value.abs.TYPE_NAME);
	assertEquals(3, result.value.cd[0]);
	assertEquals('four', result.value.cd[1].value);
	assertEquals('Three.ValueType', result.value.cd[1].TYPE_NAME);
	assertEquals(5, result.value.cd[2]);
	assertEquals('six', result.value.cd[3].value);
	assertEquals('Three.ValueType', result.value.cd[3].TYPE_NAME);
	assertEquals(7, result.value.cds[0]);
	assertEquals('eight', result.value.cds[1].value);
	assertEquals('Three.ValueType', result.value.cds[1].TYPE_NAME);
	assertEquals(9, result.value.cds[2]);
	assertEquals('ten', result.value.cds[3].value);
	assertEquals('Three.ValueType', result.value.cds[3].TYPE_NAME);
	logger.debug(marshaller.marshalString(result));
}

function testThreeMarhshalElementRefType() {
	var context = new Jsonix.Context([ Three, Four ], {
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
				name : {
					localPart : 'string'
				},
				value : 'tiger'
			}
		}
	};
	var node = marshaller.marshalDocument(value);
	var serializedNode = Jsonix.DOM.serialize(node);
	logger.debug(serializedNode);
	assertTrue(serializedNode.length > 5);
}
function testThreeUnmarshalElementRefType() {
	var context = new Jsonix.Context([ Three ]);
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
	assertEquals('elementRef', result.name.localPart);
	assertEquals('element', result.value.element.name.localPart);
	assertEquals('one', result.value.element.value);
	assertEquals('element1', result.value.element1.name.localPart);
	assertEquals('one.1', result.value.element1.value);
	assertEquals('element', result.value.elements.name.localPart);
	assertEquals('two', result.value.elements.value);
	assertEquals('element1', result.value.elements1.name.localPart);
	assertEquals(2.1, result.value.elements1.value);
	assertEquals(2, result.value.item.length);
	assertEquals('item', result.value.item[0].name.localPart);
	assertEquals('three', result.value.item[0].value);
	assertEquals('item', result.value.item[1].name.localPart);
	assertEquals('four', result.value.item[1].value);
	assertEquals(2, result.value.items.length);
	assertEquals('item', result.value.items[0].name.localPart);
	assertEquals('five', result.value.items[0].value);
	assertEquals('item', result.value.items[1].name.localPart);
	assertEquals('six', result.value.items[1].value);
	assertEquals(3, result.value.mixes.length);
	assertEquals('mix', result.value.mixes[0].name.localPart);
	assertEquals('seven', result.value.mixes[0].value.value);
	assertEquals('eight', result.value.mixes[1]);
	assertEquals('mix', result.value.mixes[2].name.localPart);
	assertEquals('nine', result.value.mixes[2].value.value);
	assertEquals(3, result.value.mix.length);
	assertEquals('ten', result.value.mix[0]);
	assertEquals('mix', result.value.mix[1].name.localPart);
	assertEquals('eleven', result.value.mix[1].value.value);
	assertEquals('twelve', result.value.mix[2]);
}

function testThreeUnmarshalElementRefsType() {
	var context = new Jsonix.Context([ Three ]);
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
	assertEquals('elementRefs', result.name.localPart);
	assertEquals('element', result.value.element.name.localPart);
	assertEquals('one', result.value.element.value);
	assertEquals('element1', result.value.element1.name.localPart);
	assertEquals('one.1', result.value.element1.value);
	assertEquals('element', result.value.elements.name.localPart);
	assertEquals('two', result.value.elements.value);
	assertEquals('element1', result.value.elements1.name.localPart);
	assertEquals(2.1, result.value.elements1.value);
	assertEquals(2, result.value.item.length);
	assertEquals('item', result.value.item[0].name.localPart);
	assertEquals('three', result.value.item[0].value);
	assertEquals('item', result.value.item[1].name.localPart);
	assertEquals('four', result.value.item[1].value);
	assertEquals(2, result.value.items.length);
	assertEquals('item', result.value.items[0].name.localPart);
	assertEquals('five', result.value.items[0].value);
	assertEquals('item', result.value.items[1].name.localPart);
	assertEquals('six', result.value.items[1].value);
	assertEquals(3, result.value.mixes.length);
	assertEquals('mix', result.value.mixes[0].name.localPart);
	assertEquals('seven', result.value.mixes[0].value.value);
	assertEquals('eight', result.value.mixes[1]);
	assertEquals('mix', result.value.mixes[2].name.localPart);
	assertEquals('nine', result.value.mixes[2].value.value);
	assertEquals(3, result.value.mix.length);
	assertEquals('ten', result.value.mix[0]);
	assertEquals('mix', result.value.mix[1].name.localPart);
	assertEquals('eleven', result.value.mix[1].value.value);
	assertEquals('twelve', result.value.mix[2]);
}

function testThreeUnmarshalElementRefsSimplifiedType() {
	var context = new Jsonix.Context([ Three ], { mappingStyle : 'simplified' });
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
//	assertEquals('elementRefs', result.name.localPart);
	assertEquals('one', result.elementRefs.element.element);
	assertEquals('one.1', result.elementRefs.element1.element1);
	assertEquals('two', result.elementRefs.elements.element);
	assertEquals(2.1, result.elementRefs.elements1.element1);
	assertEquals(2, result.elementRefs.item.length);
	assertEquals('three', result.elementRefs.item[0].item);
	assertEquals('four', result.elementRefs.item[1].item);
	assertEquals(2, result.elementRefs.items.length);
	assertEquals('five', result.elementRefs.items[0].item);
	assertEquals('six', result.elementRefs.items[1].item);
	assertEquals(3, result.elementRefs.mixes.length);
	assertEquals('seven', result.elementRefs.mixes[0].mix.value);
	assertEquals('eight', result.elementRefs.mixes[1]);
	assertEquals('nine', result.elementRefs.mixes[2].mix.value);
	assertEquals(3, result.elementRefs.mix.length);
	assertEquals('ten', result.elementRefs.mix[0]);
	assertEquals('eleven', result.elementRefs.mix[1].mix.value);
	assertEquals('twelve', result.elementRefs.mix[2]);
}

function testThreeMarhshalAnyElementType() {
	var context = new Jsonix.Context([ Three, Four ]);
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
				name : {
					localPart : 'value'
				},
				value : {
					value : 'two'
				}
			}, 'three', Jsonix.DOM.parse('<node>four</node>').documentElement ]
		}

	};
	var node = marshaller.marshalDocument(value);
	var serializedNode = Jsonix.DOM.serialize(node);
	logger.debug(serializedNode);
	assertTrue(serializedNode.length > 5);
}

function testThreeUnmarhshalAnyElementType() {
	var context = new Jsonix.Context([ Three, Four ]);
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
	assertEquals('anyElement', result.name.localPart);
	assertEquals('zero', result.value.attribute);
	assertEquals(4, result.value.any.length);
	//
	assertEquals('string', result.value.any[0].name.localPart);
	assertEquals('one', result.value.any[0].value);
	//
	assertEquals('value', result.value.any[1].name.localPart);
	assertEquals('two', result.value.any[1].value.value);
	//
	assertEquals('three', result.value.any[2]);
	//
	assertEquals('node', result.value.any[3].localName);
}
function testThreeMarhshalSimpleTypesType() {
	var context = new Jsonix.Context([ Three ]);
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
	logger.debug(serializedNode);
	assertTrue(serializedNode.length > 5);
}
function testThreeUnmarhshalSimpleTypesType() {
	var context = new Jsonix.Context([ Three ]);
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
	assertEquals('simpleTypes', result.name.localPart);
	//
	assertEquals(2000, result.value.date.getFullYear());
	assertEquals(1.1, result.value['double']);
	assertEquals(2, result.value.integer);
	assertEquals('three', result.value.string);

	//
	assertEquals(2000, result.value.dates[0].getFullYear());
	assertEquals(2001, result.value.dates[1].getFullYear());
	assertEquals(1.1, result.value.doubles[0]);
	assertEquals(1.2, result.value.doubles[1]);
	assertEquals(2, result.value.integers[0]);
	assertEquals(3, result.value.integers[1]);
	assertEquals('three', result.value.strings[0]);
	assertEquals('four', result.value.strings[1]);
	assertEquals(5, result.value.doublesList.length);
	assertEquals(2, result.value.doublesList[2].length);
	assertEquals(6, result.value.doublesList[2][0]);
	assertEquals(7, result.value.doublesList[2][1]);
}
function testThreeUnmarhshalMapElementType() {
	var context = new Jsonix.Context([ Three ]);
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
	assertEquals('elementMap', result.name.localPart);
	assertEquals('earth', result.value.element.one);
	assertEquals('wind', result.value.element.two);
	assertEquals('fire', result.value.elements.three);
	assertEquals('wood', result.value.elements.four);
	assertEquals(2, result.value.elementCollection.one.length);
	assertEquals('1', result.value.elementCollection.one[0]);
	assertEquals('I', result.value.elementCollection.one[1]);
	assertEquals(2, result.value.elementCollection.two.length);
	assertEquals('2', result.value.elementCollection.two[0]);
	assertEquals('II', result.value.elementCollection.two[1]);
	assertEquals(2, result.value.elementsCollection.three.length);
	assertEquals('3', result.value.elementsCollection.three[0]);
	assertEquals('III', result.value.elementsCollection.three[1]);
	assertEquals(2, result.value.elementsCollection.four.length);
	assertEquals('4', result.value.elementsCollection.four[0]);
	assertEquals('IV', result.value.elementsCollection.four[1]);

}

function testThreeMarhshalMapElementType() {
	var context = new Jsonix.Context([ Three ]);
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
	logger.debug(serializedNode);
}
function testThreeUnmarhshalEnumInfoArrayType() {
	var context = new Jsonix.Context([ Three ]);
	var unmarshaller = context.createUnmarshaller();
	var text = '<enumInfoArray>a</enumInfoArray>';
	var result = unmarshaller.unmarshalString(text);
	assertEquals('enumInfoArray', result.name.localPart);
	assertEquals('a', result.value);
}
function testThreeUnmarhshalEnumInfoObjectType() {
	var context = new Jsonix.Context([ Three ]);
	var unmarshaller = context.createUnmarshaller();
	var text = '<enumInfoObject>a</enumInfoObject>';
	var result = unmarshaller.unmarshalString(text);
	assertEquals('enumInfoObject', result.name.localPart);
	assertEquals('AA', result.value);
}
function testThreeUnmarhshalStringEnumInfoArrayType() {
	var context = new Jsonix.Context([ Three ]);
	var unmarshaller = context.createUnmarshaller();
	var text = '<stringEnumInfoArray>a</stringEnumInfoArray>';
	var result = unmarshaller.unmarshalString(text);
	assertEquals('stringEnumInfoArray', result.name.localPart);
	assertEquals('a', result.value);
}
function testThreeUnmarhshalEnumInfoObjectType() {
	var context = new Jsonix.Context([ Three ]);
	var unmarshaller = context.createUnmarshaller();
	var text = '<stringEnumInfoObject>a</stringEnumInfoObject>';
	var result = unmarshaller.unmarshalString(text);
	assertEquals('stringEnumInfoObject', result.name.localPart);
	assertEquals('AA', result.value);
}
function testThreeUnmarhshalIntegerEnumInfoArrayType() {
	var context = new Jsonix.Context([ Three ]);
	var unmarshaller = context.createUnmarshaller();
	var text = '<integerEnumInfoArray>2</integerEnumInfoArray>';
	var result = unmarshaller.unmarshalString(text);
	assertEquals('integerEnumInfoArray', result.name.localPart);
	assertEquals(2, result.value);
}
function testThreeUnmarhshalIntegerEnumInfoObjectType() {
	var context = new Jsonix.Context([ Three ]);
	var unmarshaller = context.createUnmarshaller();
	var text = '<integerEnumInfoObject>two</integerEnumInfoObject>';
	var result = unmarshaller.unmarshalString(text);
	assertEquals('integerEnumInfoObject', result.name.localPart);
	assertEquals(2, result.value);
}
function testThreeMarhshalEnumInfoArrayType() {
	var context = new Jsonix.Context([ Three ]);
	var marshaller = context.createMarshaller();
	var value = {
		name : {
			localPart : 'enumInfoArray'
		},
		value : 'a'
	};
	var node = marshaller.marshalDocument(value);
	var serializedNode = Jsonix.DOM.serialize(node);
	logger.debug(serializedNode);
}
function testThreeMarhshalEnumInfoObjectType() {
	var context = new Jsonix.Context([ Three ]);
	var marshaller = context.createMarshaller();
	var value = {
		name : {
			localPart : 'enumInfoObject'
		},
		value : 'AA'
	};
	var node = marshaller.marshalDocument(value);
	var serializedNode = Jsonix.DOM.serialize(node);
	logger.debug(serializedNode);
}
function testThreeMarhshalStringEnumInfoArrayType() {
	var context = new Jsonix.Context([ Three ]);
	var marshaller = context.createMarshaller();
	var value = {
		name : {
			localPart : 'stringEnumInfoArray'
		},
		value : 'a'
	};
	var node = marshaller.marshalDocument(value);
	var serializedNode = Jsonix.DOM.serialize(node);
	logger.debug(serializedNode);
}
function testThreeMarhshalStringEnumInfoObjectType() {
	var context = new Jsonix.Context([ Three ]);
	var marshaller = context.createMarshaller();
	var value = {
		name : {
			localPart : 'stringEnumInfoObject'
		},
		value : 'AA'
	};
	var node = marshaller.marshalDocument(value);
	var serializedNode = Jsonix.DOM.serialize(node);
	logger.debug(serializedNode);
}
function testThreeMarhshalIntegerEnumInfoArrayType() {
	var context = new Jsonix.Context([ Three ]);
	var marshaller = context.createMarshaller();
	var value = {
		name : {
			localPart : 'integerEnumInfoArray'
		},
		value : 2
	};
	var node = marshaller.marshalDocument(value);
	var serializedNode = Jsonix.DOM.serialize(node);
	logger.debug(serializedNode);
}
function testThreeMarhshalIntegerEnumInfoObjectType() {
	var context = new Jsonix.Context([ Three ]);
	var marshaller = context.createMarshaller();
	var value = {
		name : {
			localPart : 'integerEnumInfoObject'
		},
		value : 2
	};
	var node = marshaller.marshalDocument(value);
	var serializedNode = Jsonix.DOM.serialize(node);
	logger.debug(serializedNode);
}
function testThreeAnyType() {
	var context = new Jsonix.Context([ Three ]);
	var unmarshaller = context.createUnmarshaller();
	var marshaller = context.createMarshaller();
//	var unmarshaller = context.createUnmarshaller();
	var text = '<anyType a="b">' +
	//
	'foo' +
	'<value>test</value>' +
	'bar' +
	'<dom/>' +
	'</anyType>';
	var result = unmarshaller.unmarshalString(text);
	assertEquals('anyType', result.name.localPart);
	assertEquals('b', result.value.attributes.a);
	assertEquals(4, result.value.content.length);
	assertEquals('foo', result.value.content[0]);
	assertEquals('value', result.value.content[1].name.localPart);
	assertEquals('test', result.value.content[1].value.value);
	assertEquals('bar', result.value.content[2]);
	assertEquals(1, result.value.content[3].nodeType);
	assertEquals('dom', result.value.content[3].nodeName);
	assertEquals('<anyType a="b">foo<value>test</value>bar<dom/></anyType>',marshaller.marshalString(result));
}
