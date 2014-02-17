GML_V_3_1_1.GeoJSON.ForwardMultiLineStringConverter = Jsonix.Class(GML_V_3_1_1.GeoJSON.AbstractForwardGeometryConverter, {
	lineStringConverter: null,
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		GML_V_3_1_1.GeoJSON.AbstractForwardGeometryConverter.prototype.initialize.apply(this, [ options ]);
		Jsonix.Util.Ensure.ensureObject(options.lineStringConverter);
		this.lineStringConverter = options.lineStringConverter;
	},
	doCreateGeometry: function(multiLineString) {
		var coordinates = [];
		if (Jsonix.Util.Type.exists(multiLineString.lineStringMember)) {
			Jsonix.Util.Ensure.ensureArray(multiLineString.lineStringMember);
			for (var index0 = 0; index0 < multiLineString.lineStringMember.length; index0++)
			{
				coordinates.push(this.lineStringConverter.createGeometryFromProperty(multiLineString.lineStringMember[index0]).coordinates);
			}
		}
		return { type : 'MultiLineString', coordinates : coordinates};
	},
	createGeometryFromProperty: function(multiLineStringProperty) {
		if (Jsonix.Util.Type.exists(multiLineStringProperty.multiLineString)) {
			return this.createGeometry(multiLineStringProperty.multiLineString);
		} else {
			throw "Expected [MultiLineString] element.";
		}
	},	
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.ForwardMultiLineStringConverter"
});