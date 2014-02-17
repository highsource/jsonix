GML_V_3_1_1.GeoJSON.InverseLineStringConverter = Jsonix.Class(GML_V_3_1_1.GeoJSON.AbstractInverseGeometryConverter, {
	coordinateConverter: null,
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		GML_V_3_1_1.GeoJSON.AbstractInverseGeometryConverter.prototype.initialize.apply(this, [ options ]);
		Jsonix.Util.Ensure.ensureObject(options.coordinateConverter);
		this.coordinateConverter = options.coordinateConverter;
	},
	doCreateGeometryType: function(lineString) {
		Jsonix.Util.Ensure.ensureObject(lineString);
		Jsonix.Util.Ensure.ensureArray(lineString.coordinates);
		var resultLineString = {
			posList: this.coordinateConverter.convertCoordinates(lineString.coordinates)
		};
		return resultLineString;
	},
	createPropertyType: function(lineString) {
		var lineStringPropertyType = {};
		lineStringPropertyType.lineString = this.createGeometryType(lineString);
		return lineStringPropertyType;
	},
	createElement: function(lineString) {
		return {
			name : new Jsonix.XML.QName("http://www.opengis.net/gml", "LineString"),
			value : this.createGeometryType(lineString)
		};
	},
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.InverseLineStringConverter"
});