GML_V_3_1_1.GeoJSON.InverseMultiPointConverter = Jsonix.Class(GML_V_3_1_1.GeoJSON.AbstractInverseGeometryConverter, {
	pointConverter: null,
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		GML_V_3_1_1.GeoJSON.AbstractInverseGeometryConverter.prototype.initialize.apply(this, [ options ]);
		Jsonix.Util.Ensure.ensureObject(options.pointConverter);
		this.pointConverter = options.pointConverter;
	},
	doCreateGeometryType: function(multiPoint) {
		Jsonix.Util.Ensure.ensureObject(multiPoint);
		Jsonix.Util.Ensure.ensureArray(multiPoint.coordinates);
		var resultMultiPoint = {
			pointMember : []
		};
		for (var index = 0; index < multiPoint.coordinates.length; index++) {
			resultMultiPoint.pointMember.push(this.pointConverter.createPropertyType({type: 'Point', coordinates: multiPoint.coordinates[index]}))
		}
		return resultMultiPoint;
	},
	createPropertyType: function(multiPoint) {
		var multiPointPropertyType = {};
		multiPointPropertyType.multiPoint = this.createGeometryType(multiPoint);
		return multiPointPropertyType;
	},
	createElement: function(multiPoint) {
		return {
			name : new Jsonix.XML.QName("http://www.opengis.net/gml", "MultiPoint"),
			value : this.createGeometryType(multiPoint)
		};
	},
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.InverseMultiPointConverter"
});