GML_V_3_1_1.GeoJSON.ForwardMultiGeometryConverter = Jsonix.Class(GML_V_3_1_1.GeoJSON.AbstractForwardGeometryConverter, {
	geometryConverter: null,
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		GML_V_3_1_1.GeoJSON.AbstractForwardGeometryConverter.prototype.initialize.apply(this, [ options ]);
		Jsonix.Util.Ensure.ensureObject(options.geometryConverter);
		this.geometryConverter = options.geometryConverter;
	},
	doCreateGeometry: function(multiGeometry) {
		var geometries = [];
		if (Jsonix.Util.Type.exists(multiGeometry.geometryMember)) {
			Jsonix.Util.Ensure.ensureArray(multiGeometry.geometryMember);
			for (var index0 = 0; index0 < multiGeometry.geometryMember.length; index0++)
			{
				geometries.push(this.geometryConverter.createGeometryFromProperty(multiGeometry.geometryMember[index0]));
			}
		}
		if (Jsonix.Util.Type.exists(multiGeometry.geometryMembers)) {
			Jsonix.Util.Ensure.ensureObject(multiGeometry.geometryMembers);
			Jsonix.Util.Ensure.ensureArray(multiGeometry.geometryMembers.geometry);
			for (var index1 = 0; index1 < multiGeometry.geometryMembers.geometry.length; index1++)
			{
				geometries.push(this.geometryConverter.createGeometryFromElement(multiGeometry.geometryMembers.geometry[index1]));
			}
		}
		return { type : 'GeometryCollection', geometries : geometries};
	},
	createGeometryFromProperty: function(multiGeometryProperty) {
		if (Jsonix.Util.Type.exists(multiGeometryProperty.geometricAggregate)) {
			return this.createGeometryFromElement(multiGeometryProperty.geometricAggregate);
		} else {
			throw "Expected [_GeometricAggregate] element.";
		}
	},	
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.ForwardMultiPolygonConverter"
});