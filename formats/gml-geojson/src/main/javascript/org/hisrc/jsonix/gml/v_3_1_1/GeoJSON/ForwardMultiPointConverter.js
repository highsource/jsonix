GML_V_3_1_1.GeoJSON.ForwardMultiPointConverter = Jsonix.Class(GML_V_3_1_1.GeoJSON.AbstractForwardGeometryConverter, {
	pointConverter: null,
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		GML_V_3_1_1.GeoJSON.AbstractForwardGeometryConverter.prototype.initialize.apply(this, [ options ]);
		Jsonix.Util.Ensure.ensureObject(options.pointConverter);
		this.pointConverter = options.pointConverter;
	},
	doCreateGeometry: function(multiPoint) {
		var coordinates = [];
		if (Jsonix.Util.Type.exists(multiPoint.pointMember)) {
			Jsonix.Util.Ensure.ensureArray(multiPoint.pointMember);
			for (var index0 = 0; index0 < multiPoint.pointMember.length; index0++)
			{
				coordinates.push(this.pointConverter.createGeometryFromProperty(multiPoint.pointMember[index0]).coordinates);
			}
		}
		if (Jsonix.Util.Type.exists(multiPoint.pointMembers)) {
			Jsonix.Util.Ensure.ensureObject(multiPoint.pointMembers);
			Jsonix.Util.Ensure.ensureArray(multiPoint.pointMembers.point);
			for (var index1 = 0; index1 < multiPoint.pointMembers.point.length; index1++)
			{
				coordinates.push(this.pointConverter.createGeometry(multiPoint.pointMembers.point[index1]).coordinates);
			}
		}
		return { type: 'MultiPoint', coordinates: coordinates };
	},
	createGeometryFromProperty: function(multiPointProperty) {
		if (Jsonix.Util.Type.exists(multiPointProperty.multiPoint)) {
			return this.createGeometry(multiPointProperty.multiPoint);
		} else {
			throw "Expected [MultiPoint] element.";
		}
	},	
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.ForwardMultiPointConverter"
});