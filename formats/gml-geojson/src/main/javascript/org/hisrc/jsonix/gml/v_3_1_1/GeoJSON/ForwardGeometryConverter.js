GML_V_3_1_1.GeoJSON.ForwardGeometryConverter = Jsonix.Class(GML_V_3_1_1.GeoJSON.AbstractForwardGeometryConverter, {
	coordinateConverter: null,
	pointConverter: null,
	lineStringConverter: null,
	linearRingConverter: null,
	polygonConverter: null,
	multiPointConverter: null,
	multiLineStringConverter: null,
	multiPolygonConverter: null,
	multiGeometryConverter: null,
	properties: null,
	propertyConverters: null,
	elementConverters: null,
	initialize : function(options) {
		GML_V_3_1_1.GeoJSON.AbstractForwardGeometryConverter.prototype.initialize.apply(this, arguments);
		
		this.coordinateConverter = new GML_V_3_1_1.GeoJSON.ForwardCoordinateConverter();
    	this.pointConverter = new GML_V_3_1_1.GeoJSON.ForwardPointConverter({coordinateConverter:this.coordinateConverter});
    	this.lineStringConverter = new GML_V_3_1_1.GeoJSON.ForwardLineStringConverter({coordinateConverter:this.coordinateConverter, pointConverter: this.pointConverter});
    	this.linearRingConverter = new GML_V_3_1_1.GeoJSON.ForwardLinearRingConverter({coordinateConverter:this.coordinateConverter, pointConverter: this.pointConverter});
    	this.polygonConverter = new GML_V_3_1_1.GeoJSON.ForwardPolygonConverter({linearRingConverter:this.linearRingConverter});
		this.multiPointConverter = new GML_V_3_1_1.GeoJSON.ForwardMultiPointConverter({pointConverter:this.pointConverter});
		this.multiLineStringConverter = new GML_V_3_1_1.GeoJSON.ForwardMultiLineStringConverter({lineStringConverter:this.lineStringConverter});
		this.multiPolygonConverter = new GML_V_3_1_1.GeoJSON.ForwardMultiPolygonConverter({polygonConverter:this.polygonConverter});
		this.multiGeometryConverter = new GML_V_3_1_1.GeoJSON.ForwardMultiGeometryConverter({geometryConverter:this});
		this.properties = ['point', 'lineString', 'polygon', 'multiPoint', 'multiLineString', 'multiPolygon', 'geometricAggregate'];
		this.propertyConverters = 
		{
			'point' : this.pointConverter,
			'lineString' : this.lineStringConverter,
			'polygon' : this.polygonConverter,
			'multiPoint' : this.multiPointConverter,
			'multiLineString' : this.multiLineStringConverter,
			'multiPolygon' : this.multiPolygonConverter,
			'geometricAggregate': this.multiGeometryConverter
		};
		this.elementConverters = 
		{
			'{http://www.opengis.net/gml}Point' : this.pointConverter,
			'{http://www.opengis.net/gml}LineString' : this.lineStringConverter,
			'{http://www.opengis.net/gml}Polygon' : this.polygonConverter,
			'{http://www.opengis.net/gml}MultiPoint' : this.multiPointConverter,
			'{http://www.opengis.net/gml}MultiLineString' : this.multiLineStringConverter,
			'{http://www.opengis.net/gml}MultiPolygon' : this.multiPolygonConverter,
			'{http://www.opengis.net/gml}MultiGeometry' : this.multiGeometryConverter
		};
	},
	doCreateGeometry: function(geometry) {
		if (Jsonix.Util.Type.exists(geometry.pos) ||
			Jsonix.Util.Type.exists(geometry.coordinates) ||
			Jsonix.Util.Type.exists(geometry.coords)) {
			return this.pointConverter.createGeometry(geometry);
		} else if (Jsonix.Util.Type.exists(geometry.posOrPointPropertyOrPointRep) ||
			Jsonix.Util.Type.exists(geometry.posList) ||
			Jsonix.Util.Type.exists(geometry.coordinates)) {
			return this.lineStringConverter.createGeometry(geometry);
		} else if (Jsonix.Util.Type.exists(geometry.exterior) ||
			Jsonix.Util.Type.exists(geometry.interior)) {
			return this.polygonConverter.createGeometry(geometry);
		} else if (Jsonix.Util.Type.exists(geometry.pointMember) ||
			Jsonix.Util.Type.exists(geometry.pointMembers)) {
			return this.multiPointConverter.createGeometry(geometry);
		} else if (Jsonix.Util.Type.exists(geometry.lineStringMember) ||
			Jsonix.Util.Type.exists(geometry.lineStringMembers)) {
			return this.multiLineStringConverter.createGeometry(geometry);
		} else if (Jsonix.Util.Type.exists(geometry.polygonMember) ||
			Jsonix.Util.Type.exists(geometry.polygonMembers)) {
			return this.multiPolygonConverter.createGeometry(geometry);
		} else if (Jsonix.Util.Type.exists(geometry.geometryMember) ||
			Jsonix.Util.Type.exists(geometry.geometryMembers)) {
			return this.multiGeometryConverter.createGeometry(geometry);
		} else	{
			throw "Geometry [" + geometry + "] was not recognized.";
		}
	},
	createGeometryFromProperty: function(geometryProperty) {
		Jsonix.Util.Ensure.ensureObject(geometryProperty);
		if (Jsonix.Util.Type.exists(geometryProperty.geometry))
		{
			return this.createGeometryFromElement(geometryProperty.geometry);
		}
		else
		{
			for (var index1 = 0; index1 < this.properties.length; index1++) {
				var p = this.properties[index1];
				if (Jsonix.Util.Type.exists(geometryProperty[p]))
				{
					var converter0 = this.propertyConverters[p];
					return converter0.createGeometryFromProperty(geometryProperty);
				}
			}
			throw "Geometry property [" + geometryProperty + "] is not supported.";
		}
	},
	createGeometryFromElement: function(geometryElement) {
		Jsonix.Util.Ensure.ensureObject(geometryElement);
		Jsonix.Util.Ensure.ensureObject(geometryElement.name);
		Jsonix.Util.Ensure.ensureObject(geometryElement.value);
		var key = Jsonix.XML.QName.fromObject(geometryElement.name).key;
		var converter1 = this.elementConverters[key];
		if (Jsonix.Util.Type.exists(converter1)) {
			return converter1.createGeometryFromElement(geometryElement);
		}
		else {
			throw "Geometry element [" + key + "] is not supported.";
		}
	},	
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.ForwardGeometryConverter"
});