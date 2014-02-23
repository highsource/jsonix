/*
 * Jsonix is a JavaScript library which allows you to convert between XML
 * and JavaScript object structures.
 *
 * Copyright (c) 2010 - 2014, Alexey Valikov, Highsource.org
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Alexey Valikov nor the
 *       names of contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ALEXEY VALIKOV BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

function testPO() {
	assertNotNull(PO);
}

function testPOContext() {
	var context = new Jsonix.Context([ PO ]);
	assertNotNull(context);

	assertNotNull(context.elementInfos['purchaseOrder']);
	assertNotNull(context.elementInfos['comment']);
}

function testPOMarhshal1() {
	var context = new Jsonix.Context([ PO ]);
	var marshaller = context.createMarshaller();
	var value = {
		name : {
			localPart : "purchaseOrder"
		},
		value : {
			orderDate : new Date(1999, 10, 20),
			shipTo : {
				name : "Alice Smith",
				street : "123 Maple Street",
				city : "Mill Valley",
				state : "CA",
				zip : 90952,
				country : "US"
			},
			billTo : {
				name : "Robert Smith",
				street : "8 Oak Avenue",
				city : "Old Town",
				state : "PA",
				zip : 95819,
				country : "US"
			},
			comment : 'Hurry, my lawn is going wild!',
			item : [ {
				partNum : '872-AA',
				productName : 'Lawnmower',
				quantity : 1,
				usPrice : 148.95,
				comment : 'Confirm this is electric'
			}, {
				partNum : '926-AA',
				productName : 'Baby Monitor',
				quantity : 1,
				usPrice : 39.98,
				shipDate : new Date(1999, 4, 21)
			} ]
		}
	};
	var node = marshaller.marshalDocument(value);
	var serializedNode = Jsonix.DOM.serialize(node);
	logger.debug(serializedNode);
	assertTrue(serializedNode.length > 5);
}
function testPOUnmarshal0() {
	var context = new Jsonix.Context([ PO ]);
	var unmarshaller = context.createUnmarshaller();
	var result = unmarshaller.unmarshalString('<comment>test</comment>');
	assertEquals('comment', result.name.localPart);
	assertEquals('test', result.value);
}

function testPOUnmarshal1() {
	// First we construct a Jsonix context - a factory for unmarshaller (parser)
	// and marshaller (serializer)
	var context = new Jsonix.Context([ PO ]);
	// Then we create an unmarshaller
	var unmarshaller = context.createUnmarshaller();
	// Unmarshal an object from the XML retrieved from the URL
	unmarshaller.unmarshalURL('/org/hisrc/jsonix/samples/po/test/po-0.xml',
	// This callback function will be provided with the result
	// of the unmarshalling
	function(result) {
		// We just check that we get the values we expect
		assertEquals('Alice Smith', result.value.shipTo.name);
		assertEquals('Lawnmower', result.value.item[0].productName);
		assertEquals('Baby Monitor', result.value.item[1].productName);
	}, {
		async : false
	});
}
