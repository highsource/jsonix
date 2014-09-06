Jsonix.Model.Adapter = Jsonix.Class({
	initialize : function() {
	},
	unmarshal: function(typeInfo, context, input, scope)
	{
		return typeInfo.unmarshal(context, input, scope);
	},
	marshal: function(typeInfo, value, context, output, scope)
	{
		typeInfo.marshal(value, context, output, scope);
	},	
	CLASS_NAME : "Jsonix.Model.Adapter"
});
Jsonix.Model.Adapter.INSTANCE = new Jsonix.Model.Adapter();
// TODO is this correct?
Jsonix.Model.Adapter.getAdapter = function (elementInfo)
{
	Jsonix.Util.Ensure.ensureObject(elementInfo);
	return Jsonix.Util.Type.exists(elementInfo.adapter) ? elementInfo.adapter : Jsonix.Model.Adapter.INSTANCE;
};