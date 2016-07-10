Jsonix.Model.TypeInfo = Jsonix.Class({
	module: null,			
	name : null,
	baseTypeInfo : null,
	initialize : function() {
	},
	isBasedOn : function(typeInfo) {
		var currentTypeInfo = this;
		while (currentTypeInfo) {
			if (typeInfo === currentTypeInfo) {
				return true;
			}
			currentTypeInfo = currentTypeInfo.baseTypeInfo;
		}
		return false;
	},
	CLASS_NAME : 'Jsonix.Model.TypeInfo'
});