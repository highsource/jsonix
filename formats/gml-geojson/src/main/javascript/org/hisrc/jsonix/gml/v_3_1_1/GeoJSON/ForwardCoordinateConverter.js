GML_V_3_1_1.GeoJSON.ForwardCoordinateConverter = Jsonix.Class({
	initialize : function() {
	},
	createCoordinateFromDirectPositionType: function(directPositionType) {
		var value = directPositionType.value;
		var count = value.length;
		if (count == 2) {
			var x0 = value[0];
			var y0 = value[1];
			return [x0, y0];
		} else if (count == 3) {
			var x1 = value[0];
			var y1 = value[1];
			var z1 = value[2];
			return [x1, y1, z1];

		} else {
			throw "Direct position type is expected to have 2 or 3 items.";
		}
	},
	createCoordinatesFromDirectPositionListType: function(directPositionListType) {
		var dimensions = Jsonix.Util.Type.isNumber(directPositionListType.srsDimension) ? directPositionListType.srsDimension : 2;

		if (dimensions < 2 || dimensions > 3) {
			throw "Only two- or three-dimensional coordinates are supported.";
		}
		var values = directPositionListType.value;
		if (values.length % dimensions !== 0) {
			throw 'Wrong number of entries [' + values.length + '] in the list.';
		}

		var coordinates = [];
		for (var index = 0; index < values.length / dimensions; index++) {
			if (dimensions == 2) {
				coordinates.push([values[index * dimensions], values[index * dimensions + 1]]);
			} else if (dimensions == 3) {
				coordinates.push([values[index * dimensions], values[index * dimensions + 1], values[index * dimensions + 2]]);
			}
		}
		return coordinates;

	},
	createCoordinateFromCoordType: function(coordType) {
		Jsonix.Util.Ensure.ensureObject(coordType);
		if (Jsonix.Util.Type.exists(coordType.x) && Jsonix.Util.Type.exists(coordType.y) && !Jsonix.Util.Type.exists(coordType.z)) {
			Jsonix.Util.Ensure.ensureNumber(coordType.x);
			Jsonix.Util.Ensure.ensureNumber(coordType.y);
			return [coordType.x, coordType.y];
		} else if (Jsonix.Util.Type.exists(coordType.x) && Jsonix.Util.Type.exists(coordType.y) && Jsonix.Util.Type.exists(coordType.z)) {
			Jsonix.Util.Ensure.ensureNumber(coordType.x);
			Jsonix.Util.Ensure.ensureNumber(coordType.y);
			Jsonix.Util.Ensure.ensureNumber(coordType.z);
			return [coordType.x, coordType.y, coordType.z];

		} else {
			throw 'Either X, Y or X, Y, Z values are required.';
		}
	},
	createCoordinatesFromCoordinatesType: function(coordinates) {
		Jsonix.Util.Ensure.ensureObject(coordinates);
		var coords = this.createCoordinates(
				coordinates.value, coordinates.decimal,
				coordinates.cs, coordinates.ts);
		return coords;
	},
	createCoordinates: function(value, ds, cs, ts) {
		Jsonix.Util.Ensure.ensureString(value);

		var tupleSeparator = Jsonix.Util.Type.isString(ts) ? ts : ' ';

		var tuples = value.split(tupleSeparator);

		var coordinates = [];
		for (var index = 0; index < tuples.length; index++) {
			coordinates.push(this.createCoordinate(tuples[index], ds, cs));
		}
		return coordinates;
	},
	createCoordinate: function(value, ds, cs) {
		Jsonix.Util.Ensure.ensureString(value);

		var coordinateSeparator = Jsonix.Util.Type.isString(cs) ? cs : ',';

		var coordinates = value.split(coordinateSeparator);
		
		var coordinateComponents = [];
		for (var index = 0; index < coordinates.length; index++) {
			coordinateComponents.push(this.createCoordinateComponent(
					coordinates[index], ds));
		}
		if (coordinateComponents.length == 2) {
			return [coordinateComponents[0],
					coordinateComponents[1]];
		} else if (coordinateComponents.length == 3) {
			return [coordinateComponents[0],
					coordinateComponents[1], coordinateComponents[2]];

		} else {
			throw 'Expected two or three coordinates in [' + value + '].';
		}
	},
	createCoordinateComponent: function(value, ds) {
		Jsonix.Util.Ensure.ensureString(value);
		var decimalSeparator = Jsonix.Util.Type.isString(ds) ? ds : '.';
		var decimalSeparatorIndex = value.indexOf(decimalSeparator);
		var text;
		if (decimalSeparatorIndex < 0)
		{
			text = value;
		}
		else
		{
			text = value.substring(0, decimalSeparatorIndex) + '.' + value.substring(decimalSeparatorIndex + decimalSeparator.length);
		}
		var n = Number(text);
		return n;
	},
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.ForwardCoordinateConverter"
});