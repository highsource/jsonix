Jsonix.Util.Ensure = {
	ensureBoolean : function(value) {
		if (!Jsonix.Util.Type.isBoolean(value)) {
			throw new Error('Argument [' + value + '] must be a boolean.');
		}
	},
	ensureString : function(value) {
		if (!Jsonix.Util.Type.isString(value)) {
			throw new Error('Argument [' + value + '] must be a string.');
		}
	},
	ensureNumber : function(value) {
		if (!Jsonix.Util.Type.isNumber(value)) {
			throw new Error('Argument [' + value + '] must be a number.');
		}
	},
	ensureNumberOrNaN : function(value) {
		if (!Jsonix.Util.Type.isNumberOrNaN(value)) {
			throw new Error('Argument [' + value + '] must be a number or NaN.');
		}
	},
	ensureInteger : function(value) {
		if (!Jsonix.Util.Type.isNumber(value)) {
			throw new Error('Argument [' + value + '] must be an integer, but it is not a number.');
		} else if (!Jsonix.Util.NumberUtils.isInteger(value)) {
			throw new Error('Argument [' + value + '] must be an integer.');
		}
	},
	ensureDate : function(value) {
		if (!(value instanceof Date)) {
			throw new Error('Argument [' + value + '] must be a date.');
		}
	},
	ensureObject : function(value) {
		if (!Jsonix.Util.Type.isObject(value)) {
			throw new Error('Argument [' + value + '] must be an object.');
		}
	},
	ensureArray : function(value) {
		if (!Jsonix.Util.Type.isArray(value)) {
			throw new Error('Argument [' + value + '] must be an array.');
		}
	},
	ensureFunction : function(value) {
		if (!Jsonix.Util.Type.isFunction(value)) {
			throw new Error('Argument [' + value + '] must be a function.');
		}
	},
	ensureExists : function(value) {
		if (!Jsonix.Util.Type.exists(value)) {
			throw new Error('Argument [' + value + '] does not exist.');
		}
	}
};