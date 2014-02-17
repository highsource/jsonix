GML_V_3_1_1.GeoJSON.ForwardMultiPolygonConverter = Jsonix.Class(GML_V_3_1_1.GeoJSON.AbstractForwardGeometryConverter, {
	polygonConverter: null,
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		GML_V_3_1_1.GeoJSON.AbstractForwardGeometryConverter.prototype.initialize.apply(this, [ options ]);
		Jsonix.Util.Ensure.ensureObject(options.polygonConverter);
		this.polygonConverter = options.polygonConverter;
	},
	doCreateGeometry: function(multiPolygon) {
		var coordinates = [];
		if (Jsonix.Util.Type.exists(multiPolygon.polygonMember)) {
			Jsonix.Util.Ensure.ensureArray(multiPolygon.polygonMember);
			for (var index0 = 0; index0 < multiPolygon.polygonMember.length; index0++)
			{
				coordinates.push(this.polygonConverter.createGeometryFromProperty(multiPolygon.polygonMember[index0]).coordinates);
			}
		}
		return { type : 'MultiPolygon', coordinates : coordinates};
	},
	createGeometryFromProperty: function(multiPolygonProperty) {
		if (Jsonix.Util.Type.exists(multiPolygonProperty.multiPolygon)) {
			return this.createGeometry(multiPolygonProperty.multiPolygon);
		} else {
			throw "Expected [MultiPolygon] element.";
		}
	},	
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.ForwardMultiPolygonConverter"
});