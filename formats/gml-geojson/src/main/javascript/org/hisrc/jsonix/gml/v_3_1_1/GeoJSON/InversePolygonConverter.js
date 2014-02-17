GML_V_3_1_1.GeoJSON.InversePolygonConverter = Jsonix.Class(GML_V_3_1_1.GeoJSON.AbstractInverseGeometryConverter, {
	linearRingConverter: null,
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		GML_V_3_1_1.GeoJSON.AbstractInverseGeometryConverter.prototype.initialize.apply(this, [ options ]);
		Jsonix.Util.Ensure.ensureObject(options.linearRingConverter);
		this.linearRingConverter = options.linearRingConverter;
	},
	doCreateGeometryType: function(polygon) {
		Jsonix.Util.Ensure.ensureObject(polygon);
		Jsonix.Util.Ensure.ensureArray(polygon.coordinates);
		if (polygon.coordinates.length < 0)
		{
			throw "At least one element (shell) is expected in the coordinates array.";
		}
		
		var resultPolygon = {};
		Jsonix.Util.Ensure.ensureArray(polygon.coordinates[0]);
		
		resultPolygon.exterior = {};
		
		resultPolygon.exterior = {
				name : new Jsonix.XML.QName("http://www.opengis.net/gml", "exterior"),
				value: {
					ring: this.linearRingConverter.createElement({type: 'LinearRing', coordinates: polygon.coordinates[0]})
				} 
		};
		
		if (polygon.coordinates.length > 1)
		{
			resultPolygon.interior = [];
			for (var index = 1; index < polygon.coordinates.length; index++)
			{
				resultPolygon.interior.push(
				{
					name : new Jsonix.XML.QName("http://www.opengis.net/gml", "interior"),
					value: {
						ring: this.linearRingConverter.createElement({type: 'LinearRing', coordinates: polygon.coordinates[index]})
					} 
				});
			}
		}
		return resultPolygon;
	},
	createPropertyType: function(polygon) {
		var polygonPropertyType = {};
		polygonPropertyType.polygon = this.createGeometryType(polygon);
		return polygonPropertyType;
	},
	createElement: function(polygon) {
		return {
			name : new Jsonix.XML.QName("http://www.opengis.net/gml", "Polygon"),
			value : this.createGeometryType(polygon)
		};
	},
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.InversePolygonConverter"
});