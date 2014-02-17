GML_V_3_1_1.GeoJSON.GeometryAdapter = Jsonix.Class({
	forwardGeometryConverter: null,
	inverseGeometryConverter: null,
	initialize : function(options) {
		this.forwardGeometryConverter = new GML_V_3_1_1.GeoJSON.ForwardGeometryConverter();
		this.inverseGeometryConverter = new GML_V_3_1_1.GeoJSON.InverseGeometryConverter();
	},
	unmarshal: function(context, input, typeInfo)
	{
		var name = Jsonix.XML.QName.fromObject(input.getName());
		var value = typeInfo.unmarshal(context, input);
		var geometryElement = {
			name : name,
			value : value
		};
		var geometry = this.forwardGeometryConverter.createGeometryFromElement(geometryElement);
		return geometry;
	},
	marshal: function(context, geometry, output, typeInfo)
	{
		var geometryElement = this.inverseGeometryConverter.createElement(geometry);
		typeInfo.marshal(context, geometryElement.value, output);
	},	
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.GeometryAdapter"
});
GML_V_3_1_1.GeoJSON.GeometryAdapter.INSTANCE = new GML_V_3_1_1.GeoJSON.GeometryAdapter();