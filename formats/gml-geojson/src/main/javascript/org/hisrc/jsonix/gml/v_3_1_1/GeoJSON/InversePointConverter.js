GML_V_3_1_1.GeoJSON.InversePointConverter = Jsonix.Class(GML_V_3_1_1.GeoJSON.AbstractInverseGeometryConverter, {
	coordinateConverter: null,
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		GML_V_3_1_1.GeoJSON.AbstractInverseGeometryConverter.prototype.initialize.apply(this, [ options ]);
		Jsonix.Util.Ensure.ensureObject(options.coordinateConverter);
		this.coordinateConverter = options.coordinateConverter;
	},
	doCreateGeometryType: function(point) {
		Jsonix.Util.Ensure.ensureObject(point);
		Jsonix.Util.Ensure.ensureArray(point.coordinates);
		var resultPoint = {};
		var directPosition = this.coordinateConverter
					.convertCoordinate(point.coordinates);
		resultPoint.pos = directPosition;
		return resultPoint;
	},
	createPropertyType: function(point) {
		var pointPropertyType = {};
		pointPropertyType.point = this.createGeometryType(point);
		return pointPropertyType;
	},
	createElement: function(point) {
		return {
			name : new Jsonix.XML.QName("http://www.opengis.net/gml", "Point"),
			value : this.createGeometryType(point)
		};
	},
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.InversePointConverter"
});