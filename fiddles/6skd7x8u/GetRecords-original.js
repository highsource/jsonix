var data = {
	"name" : {
		"namespaceURI" : "http://www.opengis.net/cat/csw/2.0.2",
		"localPart" : "GetRecords",
		"prefix" : "csw"
	},
	"value" : {
		"maxRecords" : 10,
		"resultType" : "results",
		"service" : "CSW",
		"version" : "2.0.2",
		"abstractQuery" : {
			"name" : {
				"namespaceURI" : "http://www.opengis.net/cat/csw/2.0.2",
				"localPart" : "Query",
				"prefix" : "csw"
			},
			"value" : {
				"typeNames" : [ 'csw:Record', ],
				"elementSetName" : {
					"value" : "full"
				},
				"constraint" : {
					"version" : "1.1.0",
					"filter" : {
						"name" : {
							"namespaceURI" : "http://www.opengis.net/ogc",
							"localPart" : "Filter",
							"prefix" : "ogc"
						},
						"value" : {
							"logicOps" : {
								"name" : {
									"namespaceURI" : "http://www.opengis.net/ogc",
									"localPart" : "And",
									"prefix" : "ogc"
								},
								"value" : {
									"comparisonOpsOrSpatialOpsOrLogicOps" : [ {
										"name" : {
											"namespaceURI" : "http://www.opengis.net/ogc",
											"localPart" : "BBOX",
											"prefix" : "ogc"
										},
										"value" : {
											"propertyName" : {
												"content" : "ows:BoundingBox"
											},
											"envelope" : {
												"name" : {
													"namespaceURI" : "http://www.opengis.net/gml",
													"localPart" : "Envelope",
													"prefix" : "gml"
												},
												"value" : {
													"srsName" : "urn:x-ogc:def:crs:EPSG:6.11:4326",
													"lowerCorner" : {
														"value" : [ -80, 150 ]
													},
													"upperCorner" : {
														"value" : [ 80, -150 ]
													}
												}
											}
										}
									}, {
										"name" : {
											"namespaceURI" : "http://www.opengis.net/ogc",
											"localPart" : "PropertyIsLike",
											"prefix" : "ogc"
										},
										"value" : {
											"escapeChar" : "\\",
											"singleChar" : "_",
											"wildCard" : "%",
											"propertyName" : {
												"content" : "dc:title"
											},
											"literal" : {
												"content" : [ "%WATER DEPTH%" ]
											}
										}
									} ]
								}
							}
						}
					}
				}
			}
		}
	}
};