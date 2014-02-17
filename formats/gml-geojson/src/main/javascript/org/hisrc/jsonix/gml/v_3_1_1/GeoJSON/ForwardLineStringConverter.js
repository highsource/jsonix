GML_V_3_1_1.GeoJSON.ForwardLineStringConverter = Jsonix.Class(GML_V_3_1_1.GeoJSON.AbstractForwardGeometryConverter, {
	coordinateConverter: null,
	pointConverter: null,
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		GML_V_3_1_1.GeoJSON.AbstractForwardGeometryConverter.prototype.initialize.apply(this, [ options ]);
		Jsonix.Util.Ensure.ensureObject(options.coordinateConverter);
		this.coordinateConverter = options.coordinateConverter;
		Jsonix.Util.Ensure.ensureObject(options.pointConverter);
		this.pointConverter = options.pointConverter;
	},
	doCreateGeometry: function(lineString) {
		if (Jsonix.Util.Type.exists(lineString.posOrPointPropertyOrPointRep)) {
			Jsonix.Util.Ensure.ensureArray(lineString.posOrPointPropertyOrPointRep);
			var coordinates0 = [];
			for (var index = 0; index < lineString.posOrPointPropertyOrPointRep.length; index++) {
				var item = lineString.posOrPointPropertyOrPointRep[index];
				var name = item.name;
				var value = item.value;
				if (name.namespaceURI === 'http://www.opengis.net/gml' && (name.localPart === 'pointProperty'||name.localPart === 'pointRep')) {
					coordinates0.push(this.pointConverter.createGeometryFromProperty(value).coordinates);
				} else if (name.namespaceURI === 'http://www.opengis.net/gml' && name.localPart === 'coord') {
					coordinates0.push(this.coordinateConverter.createCoordinateFromCoordType(value));
				} else if (name.namespaceURI === 'http://www.opengis.net/gml' && name.localPart === 'pos') {
					coordinates0.push(this.coordinateConverter.createCoordinateFromDirectPositionType(value));
				} else {
					throw "Expected Unexpected type.";
				}
			}
			return { type: 'LineString', coordinates : coordinates0 };
		} else if (Jsonix.Util.Type.exists(lineString.posList)) {
			var coordinates1 = this.coordinateConverter.createCoordinatesFromDirectPositionListType(lineString.posList);
			return { type: 'LineString', coordinates : coordinates1 };
		} else if (Jsonix.Util.Type.exists(lineString.coordinates)) {
			var coordinates2 = this.coordinateConverter.createCoordinatesFromCoordinatesType(lineString.coordinates);
			return { type: 'LineString', coordinates : coordinates2 };
		} else {
			throw "Either [pos], [pointProperty], [pointRep], [coord] or [coordinates] elements are expected.";
		}
	},
	createGeometryFromProperty: function(lineStringProperty) {
		if (Jsonix.Util.Type.exists(lineStringProperty.lineString)) {
			return this.createGeometry(lineStringProperty.lineString);
		} else {
			throw "Expected [LineString] element.";
		}
	},	
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.ForwardLineStringConverter"
});