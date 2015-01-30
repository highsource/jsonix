Jsonix.Mapping.Styled = Jsonix.Class({
	mappingStyle : null,
	initialize : function(options) {
		if (Jsonix.Util.Type.exists(options)) {
			Jsonix.Util.Ensure.ensureObject(options);
			if (Jsonix.Util.Type.isString(options.mappingStyle)) {
				var mappingStyle = Jsonix.Mapping.Style.STYLES[options.mappingStyle];
				if (!mappingStyle) {
					throw new Error("Mapping style [" + options.mappingStyle + "] is not known.");
				}
				this.mappingStyle = mappingStyle;
			} else if (Jsonix.Util.Type.isObject(options.mappingStyle)) {
				this.mappingStyle = options.mappingStyle;
			}
		}
		if (!this.mappingStyle) {
			this.mappingStyle = Jsonix.Mapping.Style.STYLES.standard;
		}
	},
	CLASS_NAME : 'Jsonix.Mapping.Styled'
});