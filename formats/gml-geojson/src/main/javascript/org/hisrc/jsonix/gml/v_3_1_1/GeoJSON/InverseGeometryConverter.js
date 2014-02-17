GML_V_3_1_1.GeoJSON.InverseGeometryConverter = Jsonix.Class(GML_V_3_1_1.GeoJSON.AbstractInverseGeometryConverter, {
	coordinateConverter: null,
	pointConverter: null,
	lineStringConverter: null,
	linearRingConverter: null,
	polygonConverter: null,
	multiPointConverter: null,
	multiLineStringConverter: null,
	multiPolygonConverter: null,
	multiGeometryConverter: null,
	converters: null,
	initialize : function() {
		GML_V_3_1_1.GeoJSON.AbstractInverseGeometryConverter.prototype.initialize.apply(this, arguments);
		
		this.coordinateConverter = new GML_V_3_1_1.GeoJSON.InverseCoordinateConverter();
    	this.pointConverter = new GML_V_3_1_1.GeoJSON.InversePointConverter({coordinateConverter:this.coordinateConverter});
    	this.lineStringConverter = new GML_V_3_1_1.GeoJSON.InverseLineStringConverter({coordinateConverter:this.coordinateConverter, pointConverter: this.pointConverter});
    	this.linearRingConverter = new GML_V_3_1_1.GeoJSON.InverseLinearRingConverter({coordinateConverter:this.coordinateConverter, pointConverter: this.pointConverter});
    	this.polygonConverter = new GML_V_3_1_1.GeoJSON.InversePolygonConverter({linearRingConverter:this.linearRingConverter});
		this.multiPointConverter = new GML_V_3_1_1.GeoJSON.InverseMultiPointConverter({pointConverter:this.pointConverter});
		this.multiLineStringConverter = new GML_V_3_1_1.GeoJSON.InverseMultiLineStringConverter({lineStringConverter:this.lineStringConverter});
		this.multiPolygonConverter = new GML_V_3_1_1.GeoJSON.InverseMultiPolygonConverter({polygonConverter:this.polygonConverter});
		this.multiGeometryConverter = new GML_V_3_1_1.GeoJSON.InverseMultiGeometryConverter({geometryConverter:this});
		this.converters = 
		{
			'Point' : this.pointConverter,
			'LineString' : this.lineStringConverter,
			'Polygon' : this.polygonConverter,
			'MultiPoint' : this.multiPointConverter,
			'MultiLineString' : this.multiLineStringConverter,
			'MultiPolygon' : this.multiPolygonConverter,
			'GeometryCollection' : this.multiGeometryConverter
		};
	},
	doCreateGeometryType: function(geometry) {
		Jsonix.Util.Ensure.ensureObject(geometry);
		Jsonix.Util.Ensure.ensureString(geometry.type);
		var converter0 = this.converters[geometry.type];
		if (Jsonix.Util.Type.exists(converter0)) {
			return converter0.createGeometryType(geometry);
		}
		else {
			throw "Geometry type [" + geometry.type + "] is not supported.";
		}
	},
	createPropertyType: function(geometry) {
		var geometryPropertyType = {};
		geometryPropertyType.geometry = this.createElement(geometry);
		return geometryPropertyType;
	},
	createElement: function(geometry) {
		Jsonix.Util.Ensure.ensureObject(geometry);
		Jsonix.Util.Ensure.ensureString(geometry.type);
		var converter1 = this.converters[geometry.type];
		if (Jsonix.Util.Type.exists(converter1)) {
			return converter1.createElement(geometry);
		}
		else {
			throw "Geometry type [" + geometry.type + "] is not supported.";
		}
	},
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.InverseGeometryConverter"
});