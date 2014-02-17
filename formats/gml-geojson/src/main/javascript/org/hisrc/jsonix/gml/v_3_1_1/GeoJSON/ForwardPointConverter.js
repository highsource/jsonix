GML_V_3_1_1.GeoJSON.ForwardPointConverter = Jsonix.Class(GML_V_3_1_1.GeoJSON.AbstractForwardGeometryConverter, {
	coordinateConverter: null,
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		GML_V_3_1_1.GeoJSON.AbstractForwardGeometryConverter.prototype.initialize.apply(this, [ options ]);
		Jsonix.Util.Ensure.ensureObject(options.coordinateConverter);
		this.coordinateConverter = options.coordinateConverter;
	},
	doCreateGeometry: function(point) {
		if (Jsonix.Util.Type.exists(point.pos)) {
			return { type: 'Point', coordinates : this.coordinateConverter.createCoordinateFromDirectPositionType(point.pos) };
		} else if (Jsonix.Util.Type.exists(point.coordinates)) {
			var coords = this.coordinateConverter.createCoordinatesFromCoordinatesType(point.coordinates);
			if (coords.length != 1) {
				throw "Expected exactly one coordinate.";
			} else {
				return { type: 'Point', coordinates : coords[0]};
			}
		} else if (Jsonix.Util.Type.exists(point.coord)) {
			return { type: 'Point', coordinates : this.coordinateConverter.createCoordinateFromCoordType(point.coord) };
		} else {
			throw "Either [pos], [coordinates] or [coord] elements are expected.";
		}
	},
	createGeometryFromProperty: function(pointProperty) {
		if (Jsonix.Util.Type.exists(pointProperty.point)) {
			return this.createGeometry(pointProperty.point);
		} else {
			throw "Expected [Point] element.";
		}
	},	
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.ForwardPointConverter"
});