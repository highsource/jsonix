GML_V_3_1_1.GeoJSON.InverseLinearRingConverter = Jsonix.Class(GML_V_3_1_1.GeoJSON.InverseLineStringConverter, {
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		GML_V_3_1_1.GeoJSON.InverseLineStringConverter.prototype.initialize.apply(this, [ options ]);
	},
	createElement: function(linearRing) {
		return {
			name : new Jsonix.XML.QName("http://www.opengis.net/gml", "LinearRing"),
			value : this.createGeometryType(linearRing)
		};
	},
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.InverseLinearRingConverter"
});