var data = {
	"csw:GetRecords" : { "maxRecords" : 10, "resultType" : "results", "service" : "CSW", "version" : "2.0.2",
		"abstractQuery" : {
			"csw:Query" : { "typeNames" : [ "csw:Record", ],
				"elementSetName" : "full",
				"constraint" : { "version" : "1.1.0",
					"filter" : {
						"ogc:Filter" : {
							"logicOps" : {
								"ogc:And" : {
									"comparisonOpsOrSpatialOpsOrLogicOps" : [ {
										"ogc:BBOX" : {
											"propertyName" : "ows:BoundingBox",
											"envelope" : {
												"gml:Envelope" : { "srsName" : "urn:x-ogc:def:crs:EPSG:6.11:4326",
													"lowerCorner" : [ -80, 150 ],
													"upperCorner" : [ 80, -150 ]
												}
											}
										}
									}, {
										"ogc:PropertyIsLike" : { "escapeChar" : "\\", "singleChar" : "_", "wildCard" : "%",
											"propertyName" : "dc:title",
											"literal" : [ "%WATER DEPTH%" ]
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