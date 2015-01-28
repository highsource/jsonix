Jsonix.Context.MappingStyle.Standard = Jsonix.Class(Jsonix.Context.MappingStyle, {
	module : Jsonix.Model.Module,
	elementInfo : Jsonix.Model.ElementInfo,
	classInfo : Jsonix.Model.ClassInfo,
	enumLeafInfo : Jsonix.Model.EnumLeafInfo,
	anyAttributePropertyInfo : Jsonix.Model.AnyAttributePropertyInfo,
	anyElementPropertyInfo : Jsonix.Model.AnyElementPropertyInfo,
	attributePropertyInfo : Jsonix.Model.AttributePropertyInfo,
	elementMapPropertyInfo : Jsonix.Model.ElementMapPropertyInfo,
	elementPropertyInfo : Jsonix.Model.ElementPropertyInfo,
	elementsPropertyInfo : Jsonix.Model.ElementsPropertyInfo,
	elementRefPropertyInfo : Jsonix.Model.ElementRefPropertyInfo,
	elementRefsPropertyInfo : Jsonix.Model.ElementRefsPropertyInfo,
	valuePropertyInfo : Jsonix.Model.ValuePropertyInfo,
	initialize : function() {
		Jsonix.Context.MappingStyle.prototype.initialize.apply(this);
	},
	CLASS_NAME : 'Jsonix.Context.MappingStyle.Standard'
});
Jsonix.Context.MappingStyle.STYLES.standard = new Jsonix.Context.MappingStyle.Standard();
