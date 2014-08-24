Jsonix.Util.NumberUtils = {
	isInteger : function(value) {
		return Jsonix.Util.Type.isNumber(value) && ((value % 1) === 0);
	}
};