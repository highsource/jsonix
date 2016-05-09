Jsonix.Schema.XSD.Duration = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'Duration',
	typeName : Jsonix.Schema.XSD.qname('duration'),
	isInstance : function(value, context, scope) {
		return Jsonix.Util.Type.isObject(value) && (
				(Jsonix.Util.Type.exists(value.sign) ? (value.sign === -1 || value.sign === 1) : true)
				(Jsonix.Util.NumberUtils.isInteger(value.years) && value.years >=0) ||
				(Jsonix.Util.NumberUtils.isInteger(value.months) && value.months >=0) ||
				(Jsonix.Util.NumberUtils.isInteger(value.days) && value.days >= 0) ||
				(Jsonix.Util.NumberUtils.isInteger(value.hours) && value.hours >= 0) ||
				(Jsonix.Util.NumberUtils.isInteger(value.minutes) && value.minutes >= 0) ||
				(Jsonix.Util.Type.isNumber(value.seconds) && value.seconds >= 0) );
	},
	validate : function(value) {
		Jsonix.Util.Ensure.ensureObject(value);
		if (Jsonix.Util.Type.exists(value.sign)) {
			if (!(value.sign === 1 || value.sign === -1)) {
				throw new Error("Sign of the duration [" + value.sign + "] must be either [1] or [-1].");
			}
		}
		var empty = true;
		var ifExistsEnsureUnsignedInteger = function(v, message) {
			if (Jsonix.Util.Type.exists(v)) {
				if (!(Jsonix.Util.NumberUtils.isInteger(v) && v >= 0)) {
					throw new Error(message.replace("{0}", v));
				} else {
					return true;
				}
			} else {
				return false;
			}
		};
		var ifExistsEnsureUnsignedNumber = function(v, message) {
			if (Jsonix.Util.Type.exists(v)) {
				if (!(Jsonix.Util.Type.isNumber(v) && v >= 0)) {
					throw new Error(message.replace("{0}", v));
				} else {
					return true;
				}
			} else {
				return false;
			}
		};
		empty = empty && !ifExistsEnsureUnsignedInteger(value.years, "Number of years [{0}] must be an unsigned integer.");
		empty = empty && !ifExistsEnsureUnsignedInteger(value.months, "Number of months [{0}] must be an unsigned integer.");
		empty = empty && !ifExistsEnsureUnsignedInteger(value.days, "Number of days [{0}] must be an unsigned integer.");
		empty = empty && !ifExistsEnsureUnsignedInteger(value.hours, "Number of hours [{0}] must be an unsigned integer.");
		empty = empty && !ifExistsEnsureUnsignedInteger(value.minutes, "Number of minutes [{0}] must be an unsigned integer.");
		empty = empty && !ifExistsEnsureUnsignedNumber(value.seconds, "Number of seconds [{0}] must be an unsigned number.");
		if (empty) {
			throw new Error("At least one of the components (years, months, days, hours, minutes, seconds) must be set.");
		}
	},
	print : function(value, context, output, scope) {
		this.validate(value);
		var result = '';
		if (value.sign === -1)
		{
			result += '-';
		}
		result += 'P';
		if (Jsonix.Util.Type.exists(value.years)) {
			result += (value.years + 'Y');
		}
		if (Jsonix.Util.Type.exists(value.months)) {
			result += (value.months + 'M');
		}
		if (Jsonix.Util.Type.exists(value.days)) {
			result += (value.days + 'D');
		}
		if (Jsonix.Util.Type.exists(value.hours) || Jsonix.Util.Type.exists(value.minutes) || Jsonix.Util.Type.exists(value.seconds))
		{
			result += 'T';
			if (Jsonix.Util.Type.exists(value.hours)) {
				result += (value.hours + 'H');
			}
			if (Jsonix.Util.Type.exists(value.minutes)) {
				result += (value.minutes + 'M');
			}
			if (Jsonix.Util.Type.exists(value.seconds)) {
				result += (value.seconds + 'S');
			}
		}
		return result;
	},
	parse : function(value, context, input, scope) {
		var durationExpression = new RegExp("^" + Jsonix.Schema.XSD.Duration.PATTERN + "$");
		var results = value.match(durationExpression);
		if (results !== null) {
			var empty = true;
			var duration = {};
			if (results[1]) { duration.sign = -1; }
			if (results[3]) { duration.years = parseInt(results[3], 10); empty = false; }
			if (results[5]) { duration.months = parseInt(results[5], 10); empty = false; }
			if (results[7]) { duration.days = parseInt(results[7], 10); empty = false; }
			if (results[10]) { duration.hours = parseInt(results[10], 10); empty = false; }
			if (results[12]) { duration.minutes = parseInt(results[12], 10); empty = false; }
			if (results[14]) { duration.seconds = Number(results[14]); empty = false; }
			return duration;
		} else {
			throw new Error('Value [' + value + '] does not match the duration pattern.');
		}
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.Duration'
});
Jsonix.Schema.XSD.Duration.PATTERN = '(-)?P(([0-9]+)Y)?(([0-9]+)M)?(([0-9]+)D)?(T(([0-9]+)H)?(([0-9]+)M)?(([0-9]+(\\.[0-9]+)?)S)?)?';
Jsonix.Schema.XSD.Duration.INSTANCE = new Jsonix.Schema.XSD.Duration();
Jsonix.Schema.XSD.Duration.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Duration.INSTANCE);