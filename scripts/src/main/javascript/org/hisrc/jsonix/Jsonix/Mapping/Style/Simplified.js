Jsonix.Mapping.Style.Simplified = Jsonix.Class(Jsonix.Mapping.Style, {
	marshaller : Jsonix.Binding.Marshaller.Simplified,
	unmarshaller : Jsonix.Binding.Unmarshaller.Simplified,
	module : Jsonix.Model.Module,
	elementInfo : Jsonix.Model.ElementInfo,
	classInfo : Jsonix.Model.ClassInfo,
	enumLeafInfo : Jsonix.Model.EnumLeafInfo,
	anyAttributePropertyInfo : Jsonix.Model.AnyAttributePropertyInfo.Simplified,
	anyElementPropertyInfo : Jsonix.Model.AnyElementPropertyInfo.Simplified,
	attributePropertyInfo : Jsonix.Model.AttributePropertyInfo,
	elementMapPropertyInfo : Jsonix.Model.ElementMapPropertyInfo,
	elementPropertyInfo : Jsonix.Model.ElementPropertyInfo,
	elementsPropertyInfo : Jsonix.Model.ElementsPropertyInfo,
	elementRefPropertyInfo : Jsonix.Model.ElementRefPropertyInfo.Simplified,
	elementRefsPropertyInfo : Jsonix.Model.ElementRefsPropertyInfo.Simplified,
	valuePropertyInfo : Jsonix.Model.ValuePropertyInfo,
	initialize : function() {
		Jsonix.Mapping.Style.prototype.initialize.apply(this);
	},
	CLASS_NAME : 'Jsonix.Mapping.Style.Simplified'
});
Jsonix.Mapping.Style.STYLES.simplified = new Jsonix.Mapping.Style.Simplified();
