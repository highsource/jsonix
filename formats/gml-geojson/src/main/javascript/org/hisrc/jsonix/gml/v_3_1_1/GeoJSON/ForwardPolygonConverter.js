GML_V_3_1_1.GeoJSON.ForwardPolygonConverter = Jsonix.Class(GML_V_3_1_1.GeoJSON.AbstractForwardGeometryConverter, {
	linearRingConverter: null,
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		GML_V_3_1_1.GeoJSON.AbstractForwardGeometryConverter.prototype.initialize.apply(this, [ options ]);
		Jsonix.Util.Ensure.ensureObject(options.linearRingConverter);
		this.linearRingConverter = options.linearRingConverter;
	},
	doCreateGeometry: function(polygon) {
		var coordinates = [];
		if (Jsonix.Util.Type.exists(polygon.exterior)) {
			Jsonix.Util.Ensure.ensureObject(polygon.exterior);
			Jsonix.Util.Ensure.ensureObject(polygon.exterior.value);
			var shell = polygon.exterior.value;
			if (Jsonix.Util.Type.exists(shell.ring)) {
				Jsonix.Util.Ensure.ensureObject(shell.ring);
				Jsonix.Util.Ensure.ensureObject(shell.ring.value);
				coordinates.push(this.linearRingConverter
						.createGeometry(shell.ring.value).coordinates);
			}
			else
			{
				throw "The [_Ring] element is expected.";
			}
		}
		else
		{
			throw "The [exterior] element is expected.";
		}
		if (Jsonix.Util.Type.exists(polygon.interior)) {
			Jsonix.Util.Ensure.ensureArray(polygon.interior);
			var hole;
			for (var index = 0; index < polygon.interior.length; index++)
			{
				Jsonix.Util.Ensure.ensureObject(polygon.interior[index]);
				Jsonix.Util.Ensure.ensureObject(polygon.interior[index].value);
				hole = polygon.interior[index].value;
				if (Jsonix.Util.Type.exists(hole.ring)) {
					Jsonix.Util.Ensure.ensureObject(hole.ring);
					Jsonix.Util.Ensure.ensureObject(hole.ring.value);
					coordinates.push(this.linearRingConverter
							.createGeometry(hole.ring.value).coordinates);
				}
				else
				{
					throw "The [_Ring] element is expected.";
				}
			}
		}
		return {type: 'Polygon', coordinates: coordinates};
	},
	createGeometryFromProperty: function(polygonProperty) {
		if (Jsonix.Util.Type.exists(polygonProperty.polygon)) {
			return this.createGeometry(polygonProperty.polygon);
		} else {
			throw "Expected [Polygon] element.";
		}
	},	
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.ForwardPolygonConverter"
});