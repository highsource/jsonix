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
			unmarshalValue : function(value, context, input, scope) {
				return this.parse(value, context, scope);
			},
			parse : function(value, context, scope) {
				return this.typeInfo.parse(value, context, scope);
			},
			print : function(value, context, scope) {
				return this.typeInfo.reprint(value, context, scope);
			},
			CLASS_NAME : 'Jsonix.Model.SingleTypePropertyInfo'
		});
