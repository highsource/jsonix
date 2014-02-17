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

function testGML_V_3_1_1() {
	assertNotNull(GML_V_3_1_1);
}

function testGML_V_3_1_1UnmarshalPoint() {
	var context = new Jsonix.Context([ GML_V_3_1_1 ]);
	assertNotNull(context);
	assertNotNull(context.elementInfos[0]['{http://www.opengis.net/gml}Point']);
	assertNotNull(context.getElementInfo(Jsonix.XML.QName.fromString('{http://www.opengis.net/gml}Point')));
	var unmarshaller = context.createUnmarshaller();
	unmarshaller.unmarshalURL('/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/Point0.xml', function(pointElement)
		{
			var point = pointElement.value;
			var x = point.pos.value[0];
			var y = point.pos.value[1];
			assertEquals(0, x);
			assertEquals(1, y);
			logger.info('Ok.');
		},
		{
			async : false
		}
	);
}

function testGML_V_3_1_1_GeoJSON_InverseCoordinateConverter() {
    var converter = new GML_V_3_1_1.GeoJSON.InverseCoordinateConverter();
	var coordinates = [ [-180.0, 10.0], [20.0, 90.0], [180.0, -5.0], [-30.0, -90.0]];
	var convertedCoordinates = converter.convertCoordinates(coordinates);
	assertEquals(20.0, convertedCoordinates.value[2]);
	assertEquals(90.0, convertedCoordinates.value[3]);
}

function testGML_V_3_1_1_GeoJSON_ForwardCoordinateConverter_createCoordinateComponent() {
    var converter = new GML_V_3_1_1.GeoJSON.ForwardCoordinateConverter();
    assertEquals(1.0, converter.createCoordinateComponent('1.0'));
    assertEquals(1.0, converter.createCoordinateComponent('1,0', ','));
    assertEquals(0.1, converter.createCoordinateComponent(',1', ','));
    assertEquals(1, converter.createCoordinateComponent('1,', ','));
}
function testGML_V_3_1_1_GeoJSON_ForwardCoordinateConverter_createCoordinate() {
    var converter = new GML_V_3_1_1.GeoJSON.ForwardCoordinateConverter();
    {
    	var a0 = converter.createCoordinate('1.0,2.0');
	    assertEquals(2, a0.length);
	    assertEquals(1.0, a0[0]);
	    assertEquals(2.0, a0[1]);
    }
    {
    	var a1 = converter.createCoordinate('1.0 2.0 3.0', '.', ' ');
	    assertEquals(3, a1.length);
	    assertEquals(1.0, a1[0]);
	    assertEquals(2.0, a1[1]);
	    assertEquals(3.0, a1[2]);
    }
    {
    	var a2 = converter.createCoordinate('1-0,2-0', '-');
	    assertEquals(2, a2.length);
	    assertEquals(1.0, a2[0]);
	    assertEquals(2.0, a2[1]);
    }
}
function testGML_V_3_1_1_GeoJSON_ForwardCoordinateConverter_createCoordinates() {
    var converter = new GML_V_3_1_1.GeoJSON.ForwardCoordinateConverter();
    {
    	var a0 = converter.createCoordinates('1.0,2.0 3,4');
	    assertEquals(2, a0.length);
	    assertEquals(2, a0[0].length);
	    assertEquals(2, a0[1].length);
	    assertEquals(1.0, a0[0][0]);
	    assertEquals(2.0, a0[0][1]);
	    assertEquals(3, a0[1][0]);
	    assertEquals(4, a0[1][1]);
    }
    {
    	var a1 = converter.createCoordinates('1-0:2-0;3:4:5', '-', ':', ';');
	    assertEquals(2, a1.length);
	    assertEquals(2, a1[0].length);
	    assertEquals(3, a1[1].length);
	    assertEquals(1.0, a1[0][0]);
	    assertEquals(2.0, a1[0][1]);
	    assertEquals(3, a1[1][0]);
	    assertEquals(4, a1[1][1]);
	    assertEquals(5, a1[1][2]);
    }
    {
    	var a2 = converter.createCoordinatesFromCoordinatesType({ value : '1-0:2-0;3:4:5', decimal : '-', cs: ':', ts: ';'});
	    assertEquals(2, a2.length);
	    assertEquals(2, a2[0].length);
	    assertEquals(3, a2[1].length);
    }
}
function testGML_V_3_1_1_GeoJSON_ForwardCoordinateConverter_createCoordinateFromCoordType() {
    var converter = new GML_V_3_1_1.GeoJSON.ForwardCoordinateConverter();
    {
    	var a0 = converter.createCoordinateFromCoordType({x:1, y:2});
    	assertEquals(2, a0.length);
	    assertEquals(1.0, a0[0]);
	    assertEquals(2.0, a0[1]);
    }
    {
    	var a1 = converter.createCoordinateFromCoordType({x:1, y:2, z:3});
    	assertEquals(3, a1.length);
	    assertEquals(1.0, a1[0]);
	    assertEquals(2.0, a1[1]);
	    assertEquals(3.0, a1[2]);
    }
}
function testGML_V_3_1_1_GeoJSON_ForwardCoordinateConverter_createCoordinateFromDirectPositionType() {
    var converter = new GML_V_3_1_1.GeoJSON.ForwardCoordinateConverter();
    {
    	var a0 = converter.createCoordinateFromDirectPositionType({value:[1,2]});
    	assertEquals(2, a0.length);
	    assertEquals(1.0, a0[0]);
	    assertEquals(2.0, a0[1]);
    }
    {
    	var a1 = converter.createCoordinateFromDirectPositionType({value:[1, 2, 3]});
    	assertEquals(3, a1.length);
	    assertEquals(1.0, a1[0]);
	    assertEquals(2.0, a1[1]);
	    assertEquals(3.0, a1[2]);
    }
}
function testGML_V_3_1_1_GeoJSON_ForwardCoordinateConverter_createCoordinateFromDirectPositionType() {
    var converter = new GML_V_3_1_1.GeoJSON.ForwardCoordinateConverter();
    {
    	var a0 = converter.createCoordinatesFromDirectPositionListType({value:[1,2,3,4]});
    	assertEquals(2, a0.length);
	    assertEquals(2, a0[0].length);
	    assertEquals(2, a0[1].length);
	    assertEquals(1, a0[0][0]);
	    assertEquals(2, a0[0][1]);
	    assertEquals(3, a0[1][0]);
	    assertEquals(4, a0[1][1]);
    }
}
function testGML_V_3_1_1_GeoJSON_InversePointConverter() {
    var coordinateConverter = new GML_V_3_1_1.GeoJSON.InverseCoordinateConverter();
    var pointConverter = new GML_V_3_1_1.GeoJSON.InversePointConverter({coordinateConverter:coordinateConverter});
    var context = new Jsonix.Context([ GML_V_3_1_1 ]);
    var marshaller = context.createMarshaller();
    
    {
    	var a0 = pointConverter.createElement({ "type": "Point", "coordinates": [100.0, 0.0] });
    	logger.info(marshaller.marshalString(a0));
    }
}
function testGML_V_3_1_1_GeoJSON_ForwardPointConverter() {
    var coordinateConverter = new GML_V_3_1_1.GeoJSON.ForwardCoordinateConverter();
    var pointConverter = new GML_V_3_1_1.GeoJSON.ForwardPointConverter({coordinateConverter:coordinateConverter});
    var context = new Jsonix.Context([ GML_V_3_1_1 ]);
    {
    	var a0 = {
    		name: new Jsonix.XML.QName("http://www.opengis.net/gml", "Point"),
    		value: {
    			pos: {
    				value: [10, 20]
    			}
    		}
    	};
    	var g0 = pointConverter.createGeometry(a0.value);
    	assertEquals('Point', g0.type);
    	assertEquals(2, g0.coordinates.length);
    	assertEquals(10, g0.coordinates[0]);
    	assertEquals(20, g0.coordinates[1]);
    }
    {
    	var unmarshaller = context.createUnmarshaller();
		unmarshaller.unmarshalURL('/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/Point0.xml', function(pointElement)
			{
				var a1 = pointElement;
				var g1 = pointConverter.createGeometry(a1.value);
    			assertEquals('Point', g0.type);
    			assertEquals(2, g1.coordinates.length);
	    		assertEquals(0, g1.coordinates[0]);
    			assertEquals(1, g1.coordinates[1]);
			},
			{
				async : false
			}
		);
	}
	{
    	var a2 = {
    		name: new Jsonix.XML.QName("http://www.opengis.net/gml", "Point"),
    		value: {
    			coordinates: {
    				value: '0-1:1-2',
    				decimal:'-',
    				cs:':',
    				ts:';'
    			}
    		}
    	};
    	var g2 = pointConverter.createGeometry(a2.value);
    	assertEquals('Point', g2.type);
    	assertEquals(2, g2.coordinates.length);
    	assertEquals(0.1, g2.coordinates[0]);
    	assertEquals(1.2, g2.coordinates[1]);
    }
    {
    	var a3 = {
    		name: new Jsonix.XML.QName("http://www.opengis.net/gml", "Point"),
    		value: {
    			coord: { x: 0.1, y: 2.3, z : 4.5}
    		}
    	};
    	var g3 = pointConverter.createGeometry(a3.value);
    	assertEquals('Point', g3.type);
    	assertEquals(3, g3.coordinates.length);
    	assertEquals(0.1, g3.coordinates[0]);
    	assertEquals(2.3, g3.coordinates[1]);
    	assertEquals(4.5, g3.coordinates[2]);
    }
    {
    	var a4 = {
    		name: new Jsonix.XML.QName("http://www.opengis.net/gml", "pointProperty"),
    		value:
    		{
    			point: {
   					pos: {
    					value: [10, 20]
    				}
    			}
    		}
    	};
    	var g4 = pointConverter.createGeometryFromProperty(a4.value);
    	assertEquals('Point', g4.type);
    	assertEquals(2, g4.coordinates.length);
    	assertEquals(10, g4.coordinates[0]);
    	assertEquals(20, g4.coordinates[1]);
    }
}
function testGML_V_3_1_1_GeoJSON_ForwardLineStringConverter() {
    var coordinateConverter = new GML_V_3_1_1.GeoJSON.ForwardCoordinateConverter();
    var pointConverter = new GML_V_3_1_1.GeoJSON.ForwardPointConverter({coordinateConverter:coordinateConverter});
    var lineStringConverter = new GML_V_3_1_1.GeoJSON.ForwardLineStringConverter({coordinateConverter:coordinateConverter, pointConverter: pointConverter});
    var context = new Jsonix.Context([ GML_V_3_1_1 ]);
    {
    	var a0 = {
    		name: new Jsonix.XML.QName("http://www.opengis.net/gml", "LineString"),
    		value: {
    			posOrPointPropertyOrPointRep: [
    				{
    					name: new Jsonix.XML.QName("http://www.opengis.net/gml", "pos"),
    					value : {
    						value : [0, 0]
    					}
    				},
    				{
    					name: new Jsonix.XML.QName("http://www.opengis.net/gml", "pointProperty"),
    					value : {
    						point : {
    							pos: {
    								value : [1, 0]
    							}
    						}
    					}
    				},
    				{
    					name: new Jsonix.XML.QName("http://www.opengis.net/gml", "pointRep"),
    					value : {
    						point : {
    							pos: {
    								value : [1, 1]
    							}
    						}
    					}
    				},
    				{
    					name: new Jsonix.XML.QName("http://www.opengis.net/gml", "coord"),
    					value : {
    						x: 0,
    						y: 1
    					}
    				}
    			]
    		}
    	};
    	var g0 = lineStringConverter.createGeometry(a0.value);
    	assertEquals('LineString', g0.type);
    	assertEquals(4, g0.coordinates.length);
    	assertEquals(2, g0.coordinates[0].length);
    	assertEquals(2, g0.coordinates[1].length);
    	assertEquals(2, g0.coordinates[2].length);
    	assertEquals(2, g0.coordinates[3].length);
    	assertEquals(0, g0.coordinates[0][0]);
    	assertEquals(0, g0.coordinates[0][1]);
    	assertEquals(1, g0.coordinates[1][0]);
    	assertEquals(0, g0.coordinates[1][1]);
    	assertEquals(1, g0.coordinates[2][0]);
    	assertEquals(1, g0.coordinates[2][1]);
    	assertEquals(0, g0.coordinates[3][0]);
    	assertEquals(1, g0.coordinates[3][1]);
    }
    {
    	var unmarshaller = context.createUnmarshaller();
		unmarshaller.unmarshalURL('/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/LineString0.xml', function(lineString)
			{
				var a1 = lineString;
				var g1 = lineStringConverter.createGeometry(a1.value);
		    	assertEquals('LineString', g1.type);
		    	assertEquals(4, g1.coordinates.length);
		    	assertEquals(2, g1.coordinates[0].length);
		    	assertEquals(2, g1.coordinates[1].length);
		    	assertEquals(2, g1.coordinates[2].length);
		    	assertEquals(2, g1.coordinates[3].length);
		    	assertEquals(0, g1.coordinates[0][0]);
		    	assertEquals(0, g1.coordinates[0][1]);
		    	assertEquals(1, g1.coordinates[1][0]);
		    	assertEquals(0, g1.coordinates[1][1]);
		    	assertEquals(1, g1.coordinates[2][0]);
		    	assertEquals(1, g1.coordinates[2][1]);
		    	assertEquals(0, g1.coordinates[3][0]);
		    	assertEquals(1, g1.coordinates[3][1]);
			},
			{
				async : false
			}
		);
	}
	{
    	var a2 = {
    		name: new Jsonix.XML.QName("http://www.opengis.net/gml", "LineString"),
    		value: {
    			coordinates: {
    				value: '0,0 1,0 1,1 0,1'
    			}
    		}
    	};
    	var g2 = lineStringConverter.createGeometry(a2.value);
    	assertEquals('LineString', g2.type);
    	assertEquals(4, g2.coordinates.length);
    	assertEquals(2, g2.coordinates[0].length);
    	assertEquals(2, g2.coordinates[1].length);
    	assertEquals(2, g2.coordinates[2].length);
    	assertEquals(2, g2.coordinates[3].length);
    	assertEquals(0, g2.coordinates[0][0]);
    	assertEquals(0, g2.coordinates[0][1]);
    	assertEquals(1, g2.coordinates[1][0]);
    	assertEquals(0, g2.coordinates[1][1]);
    	assertEquals(1, g2.coordinates[2][0]);
    	assertEquals(1, g2.coordinates[2][1]);
    	assertEquals(0, g2.coordinates[3][0]);
    	assertEquals(1, g2.coordinates[3][1]);
    }
}
function testGML_V_3_1_1_GeoJSON_InverseLineStringConverter() {
    var coordinateConverter = new GML_V_3_1_1.GeoJSON.InverseCoordinateConverter();
    var lineStringConverter = new GML_V_3_1_1.GeoJSON.InverseLineStringConverter({coordinateConverter:coordinateConverter});
    var context = new Jsonix.Context([ GML_V_3_1_1 ]);
    var marshaller = context.createMarshaller();
    
    {
    	var a0 = lineStringConverter.createElement({ "type": "LineString", "coordinates": [[100.0, 0.0], [0.0, 100.0]] });
    	logger.info(marshaller.marshalString(a0));
    }
}
function testGML_V_3_1_1_GeoJSON_ForwardPolygonConverter() {
    var coordinateConverter = new GML_V_3_1_1.GeoJSON.ForwardCoordinateConverter();
    var pointConverter = new GML_V_3_1_1.GeoJSON.ForwardPointConverter({coordinateConverter:coordinateConverter});
    var linearRingConverter = new GML_V_3_1_1.GeoJSON.ForwardLinearRingConverter({coordinateConverter:coordinateConverter, pointConverter: pointConverter});
    var polygonConverter = new GML_V_3_1_1.GeoJSON.ForwardPolygonConverter({linearRingConverter:linearRingConverter});
    var context = new Jsonix.Context([ GML_V_3_1_1 ]);
    {
    	var unmarshaller = context.createUnmarshaller();
		unmarshaller.unmarshalURL('/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/Polygon1.xml', function(polygon)
			{
				var a1 = polygon;
				var g1 = polygonConverter.createGeometry(a1.value);
		    	assertEquals('Polygon', g1.type);
		    	assertEquals(2, g1.coordinates.length);
		    	assertEquals(5, g1.coordinates[0].length);
		    	assertEquals(2, g1.coordinates[0][0].length);
		    	assertEquals(2, g1.coordinates[0][1].length);
		    	assertEquals(2, g1.coordinates[0][2].length);
		    	assertEquals(2, g1.coordinates[0][3].length);
		    	assertEquals(2, g1.coordinates[0][4].length);
		    	assertEquals(5, g1.coordinates[1].length);
		    	assertEquals(2, g1.coordinates[1][0].length);
		    	assertEquals(2, g1.coordinates[1][1].length);
		    	assertEquals(2, g1.coordinates[1][2].length);
		    	assertEquals(2, g1.coordinates[1][3].length);
		    	assertEquals(2, g1.coordinates[1][4].length);
		    	assertEquals(0, g1.coordinates[0][0][0]);
		    	assertEquals(0, g1.coordinates[0][0][1]);
		    	assertEquals(1, g1.coordinates[0][1][0]);
		    	assertEquals(0, g1.coordinates[0][1][1]);
		    	assertEquals(1, g1.coordinates[0][2][0]);
		    	assertEquals(1, g1.coordinates[0][2][1]);
		    	assertEquals(0, g1.coordinates[0][3][0]);
		    	assertEquals(1, g1.coordinates[0][3][1]);
		    	assertEquals(0, g1.coordinates[0][4][0]);
		    	assertEquals(0, g1.coordinates[0][4][1]);
		    	assertEquals(0.1, g1.coordinates[1][0][0]);
		    	assertEquals(0.1, g1.coordinates[1][0][1]);
		    	assertEquals(0.9, g1.coordinates[1][1][0]);
		    	assertEquals(0.1, g1.coordinates[1][1][1]);
		    	assertEquals(0.9, g1.coordinates[1][2][0]);
		    	assertEquals(0.9, g1.coordinates[1][2][1]);
		    	assertEquals(0.1, g1.coordinates[1][3][0]);
		    	assertEquals(0.9, g1.coordinates[1][3][1]);
		    	assertEquals(0.1, g1.coordinates[1][4][0]);
		    	assertEquals(0.1, g1.coordinates[1][4][1]);
			},
			{
				async : false
			}
		);
	}
}
function testGML_V_3_1_1_GeoJSON_InversePolygonConverter() {
    var coordinateConverter = new GML_V_3_1_1.GeoJSON.InverseCoordinateConverter();
    var pointConverter = new GML_V_3_1_1.GeoJSON.InversePointConverter({coordinateConverter:coordinateConverter});
    var linearRingConverter = new GML_V_3_1_1.GeoJSON.InverseLinearRingConverter({coordinateConverter:coordinateConverter, pointConverter: pointConverter});
    var polygonConverter = new GML_V_3_1_1.GeoJSON.InversePolygonConverter({linearRingConverter:linearRingConverter});
    var context = new Jsonix.Context([ GML_V_3_1_1 ]);
    var marshaller = context.createMarshaller();
    
    {
    	var a0 = polygonConverter.createElement({ "type": "Polygon",
 			coordinates: [
    			[ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ],
    			[ [100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2] ]
    		]
 		});
    	logger.info(marshaller.marshalString(a0));
    }
}
function testGML_V_3_1_1_GeoJSON_ForwardMultiPointConverter() {
    var coordinateConverter = new GML_V_3_1_1.GeoJSON.ForwardCoordinateConverter();
    var pointConverter = new GML_V_3_1_1.GeoJSON.ForwardPointConverter({coordinateConverter:coordinateConverter});
    var multiPointConverter = new GML_V_3_1_1.GeoJSON.ForwardMultiPointConverter({pointConverter: pointConverter});
    var context = new Jsonix.Context([ GML_V_3_1_1 ]);
    {
    	var unmarshaller = context.createUnmarshaller();
		unmarshaller.unmarshalURL('/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/MultiPoint1.xml', function(multiPoint)
			{
				var a1 = multiPoint;
				var g1 = multiPointConverter.createGeometry(a1.value);
		    	assertEquals('MultiPoint', g1.type);
		    	assertEquals(4, g1.coordinates.length);
		    	assertEquals(2, g1.coordinates[0].length);
		    	assertEquals(2, g1.coordinates[1].length);
		    	assertEquals(2, g1.coordinates[2].length);
		    	assertEquals(2, g1.coordinates[3].length);
		    	assertEquals(0, g1.coordinates[0][0]);
		    	assertEquals(0, g1.coordinates[0][1]);
		    	assertEquals(1, g1.coordinates[1][0]);
		    	assertEquals(0, g1.coordinates[1][1]);
		    	assertEquals(1, g1.coordinates[2][0]);
		    	assertEquals(1, g1.coordinates[2][1]);
		    	assertEquals(0, g1.coordinates[3][0]);
		    	assertEquals(1, g1.coordinates[3][1]);
			},
			{
				async : false
			}
		);
	}
	{
    	var a2 = {
    		name: new Jsonix.XML.QName("http://www.opengis.net/gml", "MultiPoint"),
    		value:{
    			pointMember: [
    				{
	    				point :{
    						pos: {
    							value: [10, 20]
	    					}
    					}
    				}
	    		],
    			pointMembers: {
    				point: [
	    				{
    						pos: {
    							value: [30, 40]
    						}
	    				}
    				]
    			}
    		}
    	};
    	var g2 = multiPointConverter.createGeometry(a2.value);
    	assertEquals('MultiPoint', g2.type);
    	assertEquals(2, g2.coordinates.length);
    	assertEquals(2, g2.coordinates[0].length);
    	assertEquals(2, g2.coordinates[1].length);
    	assertEquals(10, g2.coordinates[0][0]);
    	assertEquals(20, g2.coordinates[0][1]);
    	assertEquals(30, g2.coordinates[1][0]);
    	assertEquals(40, g2.coordinates[1][1]);
    }
}
function testGML_V_3_1_1_GeoJSON_InverseMultiPointConverter() {
    var coordinateConverter = new GML_V_3_1_1.GeoJSON.InverseCoordinateConverter();
    var pointConverter = new GML_V_3_1_1.GeoJSON.InversePointConverter({coordinateConverter:coordinateConverter});
    var multiPointConverter = new GML_V_3_1_1.GeoJSON.InverseMultiPointConverter({pointConverter:pointConverter});
    var context = new Jsonix.Context([ GML_V_3_1_1 ]);
    var marshaller = context.createMarshaller();
    
    {
    	var a0 = multiPointConverter.createElement({ "type": "MultiPoint",
 			coordinates: [ [100.0, 0.0], [101.0, 1.0] ]
 		});
    	logger.info(marshaller.marshalString(a0));
    }
}
function testGML_V_3_1_1_GeoJSON_ForwardMultiLineStringConverter() {
    var coordinateConverter = new GML_V_3_1_1.GeoJSON.ForwardCoordinateConverter();
    var pointConverter = new GML_V_3_1_1.GeoJSON.ForwardPointConverter({coordinateConverter:coordinateConverter});
    var lineStringConverter = new GML_V_3_1_1.GeoJSON.ForwardLineStringConverter({coordinateConverter:coordinateConverter, pointConverter: pointConverter});
    var multiLineStringConverter = new GML_V_3_1_1.GeoJSON.ForwardMultiLineStringConverter({lineStringConverter:lineStringConverter});
    var context = new Jsonix.Context([ GML_V_3_1_1 ]);
    {
    	var unmarshaller = context.createUnmarshaller();
		unmarshaller.unmarshalURL('/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/MultiLineString0.xml', function(multiLineString)
			{
				var a1 = multiLineString;
				var g1 = multiLineStringConverter.createGeometry(a1.value);
		    	assertEquals('MultiLineString', g1.type);
		    	assertEquals(2, g1.coordinates.length);
		    	assertEquals(4, g1.coordinates[0].length);
		    	assertEquals(4, g1.coordinates[1].length);
		    	assertEquals(2, g1.coordinates[0][0].length);
		    	assertEquals(2, g1.coordinates[0][1].length);
		    	assertEquals(2, g1.coordinates[0][2].length);
		    	assertEquals(2, g1.coordinates[0][3].length);
		    	assertEquals(2, g1.coordinates[1][0].length);
		    	assertEquals(2, g1.coordinates[1][1].length);
		    	assertEquals(2, g1.coordinates[1][2].length);
		    	assertEquals(2, g1.coordinates[1][3].length);

		    	assertEquals(0, g1.coordinates[0][0][0]);
		    	assertEquals(0, g1.coordinates[0][0][1]);
		    	assertEquals(1, g1.coordinates[0][1][0]);
		    	assertEquals(0, g1.coordinates[0][1][1]);
		    	assertEquals(1, g1.coordinates[0][2][0]);
		    	assertEquals(1, g1.coordinates[0][2][1]);
		    	assertEquals(0, g1.coordinates[0][3][0]);
		    	assertEquals(1, g1.coordinates[0][3][1]);

		    	assertEquals(2, g1.coordinates[1][0][0]);
		    	assertEquals(2, g1.coordinates[1][0][1]);
		    	assertEquals(3, g1.coordinates[1][1][0]);
		    	assertEquals(2, g1.coordinates[1][1][1]);
		    	assertEquals(3, g1.coordinates[1][2][0]);
		    	assertEquals(3, g1.coordinates[1][2][1]);
		    	assertEquals(2, g1.coordinates[1][3][0]);
		    	assertEquals(3, g1.coordinates[1][3][1]);
			},
			{
				async : false
			}
		);
	}
}
function testGML_V_3_1_1_GeoJSON_InverseMultiLineStringConverter() {
	var coordinateConverter = new GML_V_3_1_1.GeoJSON.InverseCoordinateConverter();
    var lineStringConverter = new GML_V_3_1_1.GeoJSON.InverseLineStringConverter({coordinateConverter:coordinateConverter});
	var multiLineStringConverter = new GML_V_3_1_1.GeoJSON.InverseMultiLineStringConverter({lineStringConverter:lineStringConverter});
    var context = new Jsonix.Context([ GML_V_3_1_1 ]);
    var marshaller = context.createMarshaller();
    
    {
    	var a0 = multiLineStringConverter.createElement({ type: "MultiLineString",
  			coordinates: [[[100.0, 0.0], [101.0, 1.0] ],[ [102.0, 2.0], [103.0, 3.0]]]
  		});
    	logger.info(marshaller.marshalString(a0));
    }
}
function testGML_V_3_1_1_GeoJSON_ForwardMultiLineStringConverter() {
    var coordinateConverter = new GML_V_3_1_1.GeoJSON.ForwardCoordinateConverter();
    var pointConverter = new GML_V_3_1_1.GeoJSON.ForwardPointConverter({coordinateConverter:coordinateConverter});
    var linearRingConverter = new GML_V_3_1_1.GeoJSON.ForwardLinearRingConverter({coordinateConverter:coordinateConverter, pointConverter: pointConverter});
    var polygonConverter = new GML_V_3_1_1.GeoJSON.ForwardPolygonConverter({linearRingConverter:linearRingConverter});
    var multiPolygonConverter = new GML_V_3_1_1.GeoJSON.ForwardMultiPolygonConverter({polygonConverter:polygonConverter});
    var context = new Jsonix.Context([ GML_V_3_1_1 ]);
    {
    	var unmarshaller = context.createUnmarshaller();
		unmarshaller.unmarshalURL('/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/MultiPolygon0.xml', function(multiPolygon)
			{
				var a1 = multiPolygon;
				var g1 = multiPolygonConverter.createGeometry(a1.value);
		    	assertEquals('MultiPolygon', g1.type);
		    	assertEquals(1, g1.coordinates.length);
		    	assertEquals(1, g1.coordinates[0].length);
		    	assertEquals(5, g1.coordinates[0][0].length);
		    	assertEquals(2, g1.coordinates[0][0][0].length);
		    	assertEquals(2, g1.coordinates[0][0][1].length);
		    	assertEquals(2, g1.coordinates[0][0][2].length);
		    	assertEquals(2, g1.coordinates[0][0][3].length);
		    	assertEquals(2, g1.coordinates[0][0][4].length);

		    	assertEquals(0, g1.coordinates[0][0][0][0]);
		    	assertEquals(0, g1.coordinates[0][0][0][1]);
		    	assertEquals(1, g1.coordinates[0][0][1][0]);
		    	assertEquals(0, g1.coordinates[0][0][1][1]);
		    	assertEquals(1, g1.coordinates[0][0][2][0]);
		    	assertEquals(1, g1.coordinates[0][0][2][1]);
		    	assertEquals(0, g1.coordinates[0][0][3][0]);
		    	assertEquals(1, g1.coordinates[0][0][3][1]);
		    	assertEquals(0, g1.coordinates[0][0][4][0]);
		    	assertEquals(0, g1.coordinates[0][0][4][1]);
			},
			{
				async : false
			}
		);
	}
}
function testGML_V_3_1_1_GeoJSON_InverseMultiPolygonConverter() {
	var coordinateConverter = new GML_V_3_1_1.GeoJSON.InverseCoordinateConverter();
    var pointConverter = new GML_V_3_1_1.GeoJSON.InversePointConverter({coordinateConverter:coordinateConverter});
    var linearRingConverter = new GML_V_3_1_1.GeoJSON.InverseLinearRingConverter({coordinateConverter:coordinateConverter, pointConverter: pointConverter});
    var polygonConverter = new GML_V_3_1_1.GeoJSON.InversePolygonConverter({linearRingConverter:linearRingConverter});
	var multiPolygonConverter = new GML_V_3_1_1.GeoJSON.InverseMultiPolygonConverter({polygonConverter:polygonConverter});
    var context = new Jsonix.Context([ GML_V_3_1_1 ]);
    var marshaller = context.createMarshaller();
    
    {
    	var a0 = multiPolygonConverter.createElement({ type: "MultiPolygon",
  			coordinates: [
    			[[[102.0, 2.0], [103.0, 2.0], [103.0, 3.0], [102.0, 3.0], [102.0, 2.0]], [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]],
    			[[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]], [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]]
    		]
  		});
    	logger.info(marshaller.marshalString(a0));
    }
}
function testGML_V_3_1_1_GeoJSON_InverseMultiGeometryConverter() {
	var geometryConverter = new GML_V_3_1_1.GeoJSON.InverseGeometryConverter();
    var context = new Jsonix.Context([ GML_V_3_1_1 ]);
    var marshaller = context.createMarshaller();
    
    {
    	var a0 = geometryConverter.createElement({
    		type: 'GeometryCollection',
  			geometries: [{
    			type: 'Point',
      			coordinates: [100.0, 0.0]
      		}, {
      			type: "LineString",
      			coordinates: [ [101.0, 0.0], [102.0, 1.0] ]
      		}]});
    	logger.info(marshaller.marshalString(a0));
    }
}

function testGML_V_3_1_1_GeoJSON_Converters() {
	var forwardGeometryConverter = new GML_V_3_1_1.GeoJSON.ForwardGeometryConverter();
	var inverseGeometryConverter = new GML_V_3_1_1.GeoJSON.InverseGeometryConverter();
    var context = new Jsonix.Context([ GML_V_3_1_1 ]);
    
    var elementNames = [
    	new Jsonix.XML.QName('http://www.opengis.net/gml', 'Point'),
    	new Jsonix.XML.QName('http://www.opengis.net/gml', 'LineString'),
    	new Jsonix.XML.QName('http://www.opengis.net/gml', 'Polygon'),
    	new Jsonix.XML.QName('http://www.opengis.net/gml', 'MultiPoint'),
    	new Jsonix.XML.QName('http://www.opengis.net/gml', 'MultiLineString'),
    	new Jsonix.XML.QName('http://www.opengis.net/gml', 'MultiPolygon'),
    	new Jsonix.XML.QName('http://www.opengis.net/gml', 'MultiGeometry')];
    for (var endex = 0; endex < elementNames.length; endex++)
    {
    	var elementName = elementNames[endex];
    	context.getElementInfo(elementName).adapter = GML_V_3_1_1.GeoJSON.GeometryAdapter.INSTANCE;
    }
    
    var data = {
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/Point0.xml' :
    	{
    		type: 'Point',
    		coordinates: [0, 1]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/Point1.xml' :
    	{
    		type: 'Point',
    		coordinates: [0, 1]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/Point2.xml' :
    	{
    		type: 'Point',
    		coordinates: [0, 1]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/Point3.xml' :
    	{
    		type: 'Point',
    		coordinates: [0, 1]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/Point4.xml' :
    	{
    		type: 'Point',
    		coordinates: [0, 1]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/Point5.xml' :
    	{
    		type: 'Point',
    		coordinates: [0, 1]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/LineString0.xml' :
    	{
    		type: 'LineString',
    		coordinates: [[0, 0], [1, 0], [1, 1], [0, 1]]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/LineString1.xml' :
    	{
    		type: 'LineString',
    		coordinates: [[0, 0], [1, 0], [1, 1], [0, 1]]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/LineString2.xml' :
    	{
    		type: 'LineString',
    		coordinates: [[0, 0], [1, 0], [1, 1], [0, 1]]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/LineString3.xml' :
    	{
    		type: 'LineString',
    		coordinates: [[0, 0], [1, 0], [1, 1], [0, 1]]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/Polygon0.xml' :
    	{
    		type: 'Polygon',
    		coordinates: [[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/Polygon1.xml' :
    	{
    		type: 'Polygon',
    		coordinates: [
    			[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]],
    			[[0.1, 0.1], [0.9, 0.1], [0.9, 0.9], [0.1, 0.9], [0.1, 0.1]]
    		]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/Polygon2.xml' :
    	{
    		type: 'Polygon',
    		coordinates: [[[0, 0], [100, 0], [100, 100], [0, 100], [0, 0]],
    			[[10, 10], [90, 10], [90, 90], [10, 90], [10, 10]]]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/Polygon2.xml' :
    	{
    		type: 'Polygon',
    		coordinates: [[[0, 0], [100, 0], [100, 100], [0, 100], [0, 0]],
    			[[10, 10], [90, 10], [90, 90], [10, 90], [10, 10]]]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/MultiPoint0.xml' :
    	{
    		type: 'MultiPoint',
    		coordinates: [[0, 0], [1, 0]]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/MultiPoint1.xml' :
    	{
    		type: 'MultiPoint',
    		coordinates: [[0, 0], [1, 0], [1, 1], [0, 1]]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/MultiLineString0.xml' :
    	{
    		type: 'MultiLineString',
    		coordinates: [[[0, 0], [1, 0], [1, 1], [0, 1]], [[2, 2], [3, 2], [3, 3], [2, 3]]]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/MultiPolygon0.xml' :
    	{
    		type: 'MultiPolygon',
    		coordinates: [[[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]]]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/MultiPolygon1.xml' :
    	{
    		type: 'MultiPolygon',
    		coordinates: [
    			[
    				[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]],
    				[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]],
    				[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]
    			],
    			[
    				[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]],
    				[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]],
    				[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]
    			]
    		]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/MultiGeometry0.xml' :
    	{
    		type: 'GeometryCollection',
    		geometries: [
    			{
    				type: 'Point',
    				coordinates: [0, 0]
    			},
    			{
    				type: 'Point',
    				coordinates: [1, 0]
    			},
    			{
    				type: 'Point',
    				coordinates: [1, 1]
    			},
    			{
    				type: 'Point',
    				coordinates: [0, 1]
    			}
    		]
    	},
    	'/org/hisrc/jsonix/gml/v_3_1_1/geojson/tests/MultiGeometry1.xml' :
    	{
    		type: 'GeometryCollection',
    		geometries: [
    			{
    				type: 'Point',
    				coordinates: [100.0, 0]
    			},
    			{
    				type: 'LineString',
    				coordinates: [[100.0, 0.0], [101.0, 1.0]]
    			},
    			{
    				type: 'Polygon',
    				coordinates: [
						[ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ]
					]
    			},
    			{
    				type: 'Polygon',
    				coordinates: [
						[ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ],
    					[ [100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2] ]
					]
    			}
    		]
    	} 
    };
    
    for (var url in data)
    {
    	if (data.hasOwnProperty(url))
    	{
    		logger.info('Checking [' + url + '].');
    		var value = data[url];
    		var unmarshaller0 = context.createUnmarshaller();
    		unmarshaller0.unmarshalURL(url, function(geometryElement0)
			{
				var geometry0 = geometryElement0.value;
				assertTrue(Jsonix.Util.Type.isEqual(value, geometry0, function(report) {logger.info(report)}));
				logger.info('Stage 0 passed.');
				var marshaller0 = context.createMarshaller();
				logger.info(marshaller0.marshalString(geometryElement0));
				var document1 = marshaller0.marshalDocument(geometryElement0)
				var unmarshaller1 = context.createUnmarshaller();
				var geometryElement1 = unmarshaller1.unmarshalDocument(document1);
				var geometry1 = geometryElement1.value;
				assertTrue(Jsonix.Util.Type.isEqual(value, geometry1, function(report) {logger.info(report)}));
				logger.info('Stage 1 passed.');
			},
			{
				async : false
			});
    	}
    }
    for (var endex = 0; endex < elementNames.length; endex++)
    {
    	var elementName = elementNames[endex];
    	delete context.getElementInfo(elementName).adapter;
    }
}
