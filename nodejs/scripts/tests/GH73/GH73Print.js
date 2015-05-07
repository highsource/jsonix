var Jsonix = require("../../jsonix").Jsonix;
var GH73 = require("./Mappings.js").GH73;

var GH73Helper = {

	getGDateType : function() {
		return {
			"name" : {
				"namespaceURI" : "",
				"localPart" : "GDateTypes",
				"prefix" : "",
				"key" : "GDateTypes",
				"string" : "GDateTypes"
			}
		};
	}
};

module.exports = {

	"MarschallGYear" : function(test) {

		var context = new Jsonix.Context([ GH73 ]);
		var marshaller = context.createMarshaller();

		var gDateType = GH73Helper.getGDateType();

		gDateType.value = {
			"year" : {
				"year" : 101
			}
		};

		test.equal('<GDateTypes year="0101"/>', marshaller.marshalString(gDateType));

		gDateType.value = {
			"year" : {
				"year" : -1
			}
		};

		test.equal('<GDateTypes year="-0001"/>', marshaller.marshalString(gDateType));

		gDateType.value = {
			"year" : {
				"year" : 0
			}
		};

		// TODO: why is the zero allowed by Calender.printYear()?
		// overwritten in GYear:reprint -> move to calendar?
		test.throws(function() {
			marshaller.marshalString(gDateType);
		}, "Error");

		gDateType.value = {
			"year" : {
				"year" : 101,
				timezone : 300
			}
		};

		test.equal('<GDateTypes year="0101+05:00"/>', marshaller.marshalString(gDateType));

		gDateType.value = {
			"year" : {
				"year" : 101,
				timezone : 0
			}
		};

		test.equal('<GDateTypes year="0101Z"/>', marshaller.marshalString(gDateType));

		test.done();

	},

	"MarschallGMonth" : function(test) {

		var context = new Jsonix.Context([ GH73 ]);
		var marshaller = context.createMarshaller();

		var gDateType = GH73Helper.getGDateType();

		gDateType.value = {
			"month" : {
				"month" : 0
			}
		};

		// TODO: why is the 0 allowed?
		test.equal('<GDateTypes month="--00"/>', marshaller.marshalString(gDateType));

		gDateType.value.month = new Date(0);
		gDateType.value.month.setMonth(1);

		console.log(marshaller.marshalString(gDateType));

		test.done();
	}

};