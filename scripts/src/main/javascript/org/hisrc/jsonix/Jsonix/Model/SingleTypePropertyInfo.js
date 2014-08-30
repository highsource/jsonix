Jsonix.Model.SingleTypePropertyInfo = Jsonix.Class(Jsonix.Model.PropertyInfo,
		{
			typeInfo : 'String',
			initialize : function(options) {
				Jsonix.Util.Ensure.ensureObject(options);
				Jsonix.Model.PropertyInfo.prototype.initialize.apply(this,
						[ options ]);
				if (Jsonix.Util.Type.exists(options.typeInfo)) {
					this.typeInfo = options.typeInfo;
				}
			},
			doBuild : function(context, module) {
				this.typeInfo = context.resolveTypeInfo(this.typeInfo, module);
			},
			unmarshalValue : function(context, input, scope, value) {
				return this.parse(context, scope, value);
			},
			parse : function(context, scope, value) {
				return this.typeInfo.parse(value, context, scope);
			},
			print : function(context, scope, value) {
				return this.typeInfo.reprint(value, context, scope);
			},
			CLASS_NAME : 'Jsonix.Model.SingleTypePropertyInfo'
		});
