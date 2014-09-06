Jsonix.Model.SingleTypePropertyInfo = Jsonix.Class(Jsonix.Model.PropertyInfo,
		{
			typeInfo : 'String',
			initialize : function(mapping) {
				Jsonix.Util.Ensure.ensureObject(mapping);
				Jsonix.Model.PropertyInfo.prototype.initialize.apply(this,
						[ mapping ]);
				var ti = mapping.typeInfo || mapping.ti || 'String';
				this.typeInfo = ti;
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
