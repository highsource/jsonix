GML_V_3_1_1.GeoJSON.InverseMultiLineStringConverter = Jsonix.Class(GML_V_3_1_1.GeoJSON.AbstractInverseGeometryConverter, {
	lineStringConverter: null,
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		GML_V_3_1_1.GeoJSON.AbstractInverseGeometryConverter.prototype.initialize.apply(this, [ options ]);
		Jsonix.Util.Ensure.ensureObject(options.lineStringConverter);
		this.lineStringConverter = options.lineStringConverter;
	},
	doCreateGeometryType: function(multiLineString) {
		Jsonix.Util.Ensure.ensureObject(multiLineString);
		Jsonix.Util.Ensure.ensureArray(multiLineString.coordinates);
		var resultMultiLineString = {
			lineStringMember : []
		};
		for (var index = 0; index < multiLineString.coordinates.length; index++) {
			resultMultiLineString.lineStringMember.push(this.lineStringConverter.createPropertyType({type: 'LineString', coordinates: multiLineString.coordinates[index]}))
		}
		return resultMultiLineString;
	},
	createPropertyType: function(multiLineString) {
		var multiLineStringPropertyType = {};
		multiLineStringPropertyType.multiLineString = this.createGeometryType(multiLineString);
		return multiLineStringPropertyType;
	},
	createElement: function(multiLineString) {
		return {
			name : new Jsonix.XML.QName("http://www.opengis.net/gml", "MultiLineString"),
			value : this.createGeometryType(multiLineString)
		};
	},
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.InverseMultiLineStringConverter"
});