var Jsonix = require("../../jsonix").Jsonix;
var GH71 = require("./Mappings.js").GH71;

module.exports = {
	"EmptyElement" : function(test) {
		var context = new Jsonix.Context([GH71]);
		var unmarshaller = context.createUnmarshaller();
		var marshaller = context.createMarshaller();
		var xml = "<Configuration><Install><ConfigFile>config.xml</ConfigFile><InstallDir></InstallDir><DataDir></DataDir></Install><Date></Date></Configuration>";
		var unmarshalled = unmarshaller.unmarshalString(xml);
		var marshalled = marshaller.marshalString(unmarshalled);
		test.equal(xml, marshalled);
		test.done();
	}
};
