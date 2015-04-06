var Jsonix = require("../../jsonix").Jsonix;
var GH71 = require("./Mappings.js").GH71;

module.exports = {
	"EmptyElement" : function(test) {
		var context = new Jsonix.Context([GH71]);
		var unmarshaller = context.createUnmarshaller();
		var marshaller = context.createMarshaller();
		var alpha = "<Configuration><Install><ConfigFile>config.xml</ConfigFile><InstallDir></InstallDir><DataDir></DataDir></Install><Date></Date></Configuration>";
		var omega = "<Configuration><Install><ConfigFile>config.xml</ConfigFile><InstallDir></InstallDir><DataDir></DataDir></Install></Configuration>";
		var unmarshalled = unmarshaller.unmarshalString(alpha);
		var marshalled = marshaller.marshalString(unmarshalled);
		test.equal(omega, marshalled);
		test.done();
	}
};
