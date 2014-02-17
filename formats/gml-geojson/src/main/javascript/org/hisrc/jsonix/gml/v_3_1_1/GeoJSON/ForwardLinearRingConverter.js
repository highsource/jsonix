GML_V_3_1_1.GeoJSON.ForwardLinearRingConverter = Jsonix.Class(GML_V_3_1_1.GeoJSON.ForwardLineStringConverter, {
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		GML_V_3_1_1.GeoJSON.ForwardLineStringConverter.prototype.initialize.apply(this, [ options ]);
	},
	createGeometryFromProperty: function(linearRingProperty) {
		if (Jsonix.Util.Type.exists(linearRingProperty.linearRing)) {
			return { type: 'LineString', coordinates : this.createGeometry(linearRingProperty.linearRing).coordinates };
		} else {
			throw "Expected [LinearRing] element.";
		}
	},	
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.ForwardLinearRingConverter"
});