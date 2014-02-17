GML_V_3_1_1.GeoJSON.InverseCoordinateConverter = Jsonix.Class({
	initialize : function() {
	},
	convertCoordinate: function(coordinate) {
		Jsonix.Util.Ensure.ensureArray(coordinate);
		if (coordinate.length < 2 || coordinate.length > 3)
		{
			throw 'Coordinate must contain two or three components.';
		}
		Jsonix.Util.Ensure.ensureNumber(coordinate[0]);
		Jsonix.Util.Ensure.ensureNumber(coordinate[1]);
		if (coordinate.length > 2)
		{
			Jsonix.Util.Ensure.ensureNumber(coordinate[2]);
			return { value: [coordinate[0], coordinate[1], coordinate[2]]};
		}
		else
		{
			return { value: [coordinate[0], coordinate[1]]};
		}
	},
	convertCoordinates: function(coordinates) {
		Jsonix.Util.Ensure.ensureArray(coordinates);
		var directPositions = [];
		if (coordinates.length > 0)
		{
			var firstCoordinate = this.convertCoordinate(coordinates[0]);
			var dimension = firstCoordinate.value.length;
			var index, jndex;
			var coordinate;
			for (index = 0; index < coordinates.length; index++) {
				coordinate = this.convertCoordinate(coordinates[index]);
				if (coordinate.value.length !== dimension) {
					throw 'Not all of the coordinates have the same number of components [' + dimension + '].';
				} 
				for (jndex = 0; jndex < dimension; jndex++)	{
					directPositions.push(coordinate.value[jndex]);
				}
			}
			return {
				value: directPositions,
				srsDimension: dimension
			}; 
		}
		else
		{
			return {
				value: [] 
			};		
		}
	},
	CLASS_NAME : "GML_V_3_1_1.GeoJSON.InverseCoordinateConverter"
});