/*
 * Jsonix is a JavaScript library which allows you to convert between XML
 * and JavaScript object structures.
 *
 * Copyright (c) 2010, Aleksei Valikov, Highsource.org
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Aleksei Valikov nor the
 *       names of contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ALEKSEI VALIKOV BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

Three = {
	name : 'Three',
	typeInfos : [ {
		type : 'classInfo',
		localName : 'ValueType',
		propertyInfos : [ {
			type : 'value',
			name : 'value',
			typeInfo : 'String'
		} ]
	}, {
		type : 'classInfo',
		localName : 'AnyAttributeType',
		propertyInfos : [ {
			type : 'anyAttribute',
			name : 'attributes'
		} ]
	}, {
		type : 'classInfo',
		localName : 'AttributeType',
		propertyInfos : [ {
			type : 'attribute',
			name : 'attribute',
			typeInfo : 'String'
		} ]
	}, {
		type : 'classInfo',
		localName : 'ElementType',
		propertyInfos : [ {
			type : 'element',
			name : 'element',
			typeInfo : 'String'
		}, {
			type : 'element',
			name : 'elements',
			elementName : 'element',
			wrapperElementName : 'elements',
			typeInfo : 'String'
		}, {
			type : 'element',
			name : 'item',
			collection : true,
			typeInfo : 'String'
		}, {
			type : 'element',
			name : 'items',
			elementName : 'item',
			wrapperElementName : 'items',
			collection : true,
			typeInfo : 'String'
		} ]
	}, {
		type : 'classInfo',
		localName : 'ElementsType',
		propertyInfos : [ {
			type : 'elements',
			name : 'ab',
			elementTypeInfos : [ {
				elementName : 'a',
				typeInfo : 'Three.ValueType'
			}, {
				elementName : 'b',
				typeInfo : 'Integer'
			} ]
		}, {
			type : 'elements',
			name : 'abs',
			wrapperElementName : 'abs',
			elementTypeInfos : [ {
				elementName : 'a',
				typeInfo : 'Three.ValueType'
			}, {
				elementName : 'b',
				typeInfo : 'Integer'
			} ]
		}, {
			type : 'elements',
			name : 'cd',
			collection : true,
			elementTypeInfos : [ {
				elementName : 'c',
				typeInfo : 'Integer'
			}, {
				elementName : 'd',
				typeInfo : 'Three.ValueType'
			} ]
		}, {
			type : 'elements',
			name : 'cds',
			collection : true,
			wrapperElementName : 'cds',
			elementTypeInfos : [ {
				elementName : 'c',
				typeInfo : 'Integer'
			}, {
				elementName : 'd',
				typeInfo : 'Three.ValueType'
			} ]
		} ]
	}, {
		type : 'classInfo',
		localName : 'ElementRefType',
		propertyInfos : [ {
			type : 'elementRef',
			name : 'element',
			typeInfo : 'String'
		}, {
			type : 'elementRef',
			name : 'element1',
			typeInfo : 'String'
		}, {
			type : 'elementRef',
			name : 'elements',
			elementName : 'element',
			wrapperElementName : 'elements',
			typeInfo : 'String'
		}, {
			type : 'elementRef',
			name : 'elements1',
			elementName : 'element1',
			wrapperElementName : 'elements1',
			typeInfo : 'Double'
		}, {
			type : 'elementRef',
			name : 'item',
			collection : true,
			typeInfo : 'String'
		}, {
			type : 'elementRef',
			name : 'items',
			elementName : 'item',
			wrapperElementName : 'items',
			collection : true,
			typeInfo : 'String'
		}, {
			type : 'elementRef',
			name : 'mixes',
			elementName : 'mix',
			wrapperElementName : 'mixes',
			collection : true,
			mixed : true,
			typeInfo : 'Three.ValueType'
		}, {
			type : 'elementRef',
			name : 'mix',
			collection : true,
			mixed : true,
			typeInfo : 'Three.ValueType'
		} ]
	}, {
		type : 'classInfo',
		localName : 'ElementRefsType',
		propertyInfos : [ {
			type : 'elementRefs',
			name : 'element',
			elementTypeInfos : [ {
				elementName : 'element',
				typeInfo : 'String'
			} ]
		}, {
			type : 'elementRefs',
			name : 'element1',
			elementTypeInfos : [ {
				elementName : 'element1',
				typeInfo : 'String'
			} ]
		}, {
			type : 'elementRefs',
			name : 'elements',
			wrapperElementName : 'elements',
			elementTypeInfos : [ {
				elementName : 'element',
				typeInfo : 'String'
			} ]
		}, {
			type : 'elementRefs',
			name : 'elements1',
			wrapperElementName : 'elements1',
			elementTypeInfos : [ {
				elementName : 'element1',
				typeInfo : 'Double'
			} ]
		}, {
			type : 'elementRefs',
			name : 'item',
			collection : true,
			elementTypeInfos : [ {
				elementName : 'item',
				typeInfo : 'String'
			} ]
		}, {
			type : 'elementRefs',
			name : 'items',
			wrapperElementName : 'items',
			collection : true,
			elementTypeInfos : [ {
				elementName : 'item',
				typeInfo : 'String'
			} ]
		}, {
			type : 'elementRefs',
			name : 'mixes',
			wrapperElementName : 'mixes',
			collection : true,
			mixed : true,
			elementTypeInfos : [ {
				elementName : 'mix',
				typeInfo : 'Three.ValueType'
			} ]
		}, {
			type : 'elementRefs',
			name : 'mix',
			collection : true,
			mixed : true,
			elementTypeInfos : [ {
				elementName : 'mix',
				typeInfo : 'Three.ValueType'
			} ]
		} ]
	}, {
		type : 'classInfo',
		localName : 'AnyElementType',
		propertyInfos : [ {
			type : 'attribute',
			name : 'attribute',
			typeInfo : 'String'
		}, {
			type : 'anyElement',
			name : 'any',
			collection : true
		} ]
	}, {
		type : 'classInfo',
		localName : 'SimpleTypesType',
		propertyInfos : [ {
			type : 'element',
			name : 'date',
			typeInfo : 'Date'
		}, {
			type : 'element',
			name : 'double',
			typeInfo : 'Double'
		}, {
			type : 'element',
			name : 'integer',
			typeInfo : 'Integer'
		}, {
			type : 'element',
			name : 'string',
			typeInfo : 'String'
		}, {
			type : 'element',
			name : 'dates',
			typeInfo : {
				type : 'list',
				typeInfo : 'Date'

			}
		}, {
			type : 'element',
			name : 'doubles',
			typeInfo : {
				type : 'list',
				typeInfo : 'Double'
			}
		}, {
			type : 'element',
			name : 'integers',
			typeInfo : {
				type : 'list',
				typeInfo : 'Integer'
			}
		}, {
			type : 'element',
			name : 'strings',
			typeInfo : {
				type : 'list',
				typeInfo : 'String'
			}
		}, {
			type : 'element',
			name : 'doublesList',
			typeInfo : {
				type : 'list',
				typeInfo : {
					type : 'list',
					typeInfo : 'Double'
				},
				separator : ', '
			}
		} ]
	}, {
		type : 'classInfo',
		localName : 'ElementMapType',
		propertyInfos : [ {
			type : 'elementMap',
			name : 'element',
			key : {
				type : 'attribute',
				name : 'key',
				typeInfo : 'String'
			},
			value : {
				type : 'value',
				name : 'value',
				typeInfo : 'String'
			}
		}, {
			type : 'elementMap',
			name : 'elements',
			wrapperElementName : 'elements',
			elementName : 'element',
			key : {
				type : 'attribute',
				name : 'key',
				typeInfo : 'String'
			},
			value : {
				type : 'value',
				name : 'value',
				typeInfo : 'String'
			}
		}, {
			type : 'elementMap',
			name : 'elementCollection',
			collection : true,
			key : {
				type : 'attribute',
				name : 'key',
				typeInfo : 'String'
			},
			value : {
				type : 'value',
				name : 'value',
				typeInfo : 'String'
			}
		}, {
			type : 'elementMap',
			name : 'elementsCollection',
			wrapperElementName : 'elementsCollection',
			elementName : 'element',
			collection : true,
			key : {
				type : 'attribute',
				name : 'key',
				typeInfo : 'String'
			},
			value : {
				type : 'value',
				name : 'value',
				typeInfo : 'String'
			}
		} ]
	} ],
	elementInfos : [ {
		elementName : 'value',
		typeInfo : 'Three.ValueType'
	}, {
		elementName : 'anyAttribute',
		typeInfo : 'Three.AnyAttributeType'
	}, {
		elementName : 'attribute',
		typeInfo : 'Three.AttributeType'
	}, {
		elementName : 'element',
		typeInfo : 'Three.ElementType'
	}, {
		elementName : 'elements',
		typeInfo : 'Three.ElementsType'
	}, {
		elementName : 'elementRef',
		typeInfo : 'Three.ElementRefType'
	}, {
		elementName : 'elementRefs',
		typeInfo : 'Three.ElementRefsType'
	}, {
		elementName : 'anyElement',
		typeInfo : 'Three.AnyElementType'
	}, {
		elementName : 'simpleTypes',
		typeInfo : 'Three.SimpleTypesType'
	}, {
		elementName : 'element',
		typeInfo : 'String',
		scope : 'Three.ElementRefType'
	}, {
		elementName : 'item',
		typeInfo : 'String',
		scope : 'Three.ElementRefType'
	}, {
		elementName : 'mix',
		typeInfo : 'Three.ValueType',
		scope : 'Three.ElementRefType'
	}, {
		elementName : 'elementMap',
		typeInfo : 'Three.ElementMapType'
	} ]
};
Four = {
	name : 'Four',
	elementInfos : [ {
		elementName : 'string',
		typeInfo : 'String'
	} ]
};