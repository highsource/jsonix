Jsonix.Mapping.Style.Standard = Jsonix.Class(Jsonix.Mapping.Style, {
	marshaller : Jsonix.Binding.Marshaller,
	unmarshaller : Jsonix.Binding.Unmarshaller,
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
		Jsonix.Mapping.Style.prototype.initialize.apply(this);
	},
	CLASS_NAME : 'Jsonix.Mapping.Style.Standard'
});
Jsonix.Mapping.Style.STYLES.standard = new Jsonix.Mapping.Style.Standard();
