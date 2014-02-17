GML_V_3_1_1.GeoJSON.InverseMultiPolygonConverter = Jsonix.Class(GML_V_3_1_1.GeoJSON.AbstractInverseGeometryConverter, {
	polygonConverter: null,
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		GML_V_3_1_1.GeoJSON.AbstractInverseGeometryConverter.prototype.initialize.apply(this, [ options ]);
		Jsonix.Util.Ensure.ensureObject(options.polygonConverter);
		this.polygonConverter = options.polygonConverter;
	},
	doCreateGeometryType: function(multiPolygon) {
		Jsonix.Util.Ensure.ensureObject(multiPolygon);
		Jsonix.Util.Ensure.ensureArray(multiPolygon.coordinates);
		var resultMultiPolygon = {
			polygonMember : []
		};
		for (var index = 0; index < multiPolygon.coordinates.length; index++) {
			resultMultiPolygon.polygonMember.push(this.polygonConverter.createPropertyType({type: 'Polygon', coordinates: multiPolygon.coordinates[index]}))
		}
		return resultMultiPolygon;
	},
	createPropertyType: function(multiPolygon) {
		var multiPolygonPropertyType = {};
		multiPolygonPropertyType.multiPolygon = this.createGeometryType(multiPolygon);
		return multiPolygonPropertyType;
	},
	createElement: function(multiPolygon) {
		return {
			name : new Jsonix.XML.QName("http://www.opengis.net/gml", "MultiPolygon"),
			value : this.createGeometryType(multiPolygon)
		};
	},
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.InverseMultiPolygonConverter"
});