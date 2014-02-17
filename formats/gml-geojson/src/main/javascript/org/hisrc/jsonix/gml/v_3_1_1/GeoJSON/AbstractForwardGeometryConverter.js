GML_V_3_1_1.GeoJSON.AbstractForwardGeometryConverter = Jsonix.Class({
	initialize : function() {
	},
	createGeometry:function(geometry) {
		Jsonix.Util.Ensure.ensureObject(geometry);
		var result = this.doCreateGeometry(geometry);
		// getSridConverter().convert(locator, geometryType, geometry);
		return result;
	},
	doCreateGeometry: function(geometry)
	{
		throw 'Abstract method.';
	},
	createGeometryFromProperty: function(property)
	{
		throw 'Abstract method.';
	},
	createGeometryFromElement: function(geometryElement) {
		Jsonix.Util.Ensure.ensureObject(geometryElement);
		Jsonix.Util.Ensure.ensureObject(geometryElement.name);
		Jsonix.Util.Ensure.ensureObject(geometryElement.value);
		return this.createGeometry(geometryElement.value);
	},
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.AbstractForwardGeometryConverter"
});