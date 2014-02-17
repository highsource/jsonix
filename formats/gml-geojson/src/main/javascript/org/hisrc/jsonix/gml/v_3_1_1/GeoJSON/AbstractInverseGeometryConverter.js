GML_V_3_1_1.GeoJSON.AbstractInverseGeometryConverter = Jsonix.Class({
	initialize : function() {
	},
	createGeometryType:function(geometry)
	{
		var target = this.doCreateGeometryType(geometry);
	    //getSrsReferenceGroupConverter().convert(geometry, target);
		return target;
	},
	doCreateGeometryType: function(geometry)
	{
		throw 'Abstract method';
	},
	createPropertyType: function(geometry)
	{
		throw 'Abstract method';
	},
	createElement: function(geometry)
	{
		throw 'Abstract method';
	},
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.AbstractInverseGeometryConverter"
});