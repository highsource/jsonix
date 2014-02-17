GML_V_3_1_1.GeoJSON.InverseMultiGeometryConverter = Jsonix.Class(GML_V_3_1_1.GeoJSON.AbstractInverseGeometryConverter, {
	geometryConverter: null,
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		GML_V_3_1_1.GeoJSON.AbstractInverseGeometryConverter.prototype.initialize.apply(this, [ options ]);
		Jsonix.Util.Ensure.ensureObject(options.geometryConverter);
		this.geometryConverter = options.geometryConverter;
	},
	doCreateGeometryType: function(multiGeometry) {
		Jsonix.Util.Ensure.ensureObject(multiGeometry);
		Jsonix.Util.Ensure.ensureArray(multiGeometry.geometries);
		var resultMultiGeometry = {
			geometryMember : []
		};
		for (var index = 0; index < multiGeometry.geometries.length; index++) {
			resultMultiGeometry.geometryMember.push(this.geometryConverter.createPropertyType(multiGeometry.geometries[index]));
		}
		return resultMultiGeometry;
	},
	createPropertyType: function(multiGeometry) {
		var multiGeometryPropertyType = {};
		multiGeometryPropertyType.multiGeometry = this.createGeometryType(multiGeometry);
		return multiGeometryPropertyType;
	},
	createElement: function(multiGeometry) {
		return {
			name : new Jsonix.XML.QName("http://www.opengis.net/gml", "MultiGeometry"),
			value : this.createGeometryType(multiGeometry)
		};
	},
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.InverseMultiGeometryConverter"
});