var Jsonix = require("../../jsonix").Jsonix;
var GH73 = require("./Mappings.js").GH73;

module.exports = {
    "ValidateYear": function (test)
    {

        var gYear = Jsonix.Schema.XSD.GYear.INSTANCE;

        test.doesNotThrow(function () { gYear._validateYear("1984");});
        test.doesNotThrow(function () { gYear._validateYear("-1984");});
        test.doesNotThrow(function () { gYear._validateYear("101984");});
        test.doesNotThrow(function () { gYear._validateYear("-101984");});
        test.doesNotThrow(function () { gYear._validateYear("0815");});
        test.doesNotThrow(function () { gYear._validateYear("-0815");});

        test.throws(function () { gYear._validateYear("foo"); }, "Error");
        test.throws(function () { gYear._validateYear("+0001"); }, "Error");
        test.throws(function () {gYear._validateYear("42"); }, "Error");
        //http://www.w3.org/TR/xmlschema-2/#year-zero
        test.throws(function () { gYear._validateYear("0000"); }, "Error");
        test.throws(function () { gYear._validateYear("1984AD"); }, "Error");


        test.done();

    },

    "ValidateTimeZone": function(test)
    {
        var gYear = Jsonix.Schema.XSD.GYear.INSTANCE;
        test.doesNotThrow(function () { gYear._validateTimeZone("Z");});
        test.doesNotThrow(function () { gYear._validateTimeZone("+02:00");});
        test.doesNotThrow(function () { gYear._validateTimeZone("-02:00");});

        test.throws(function () { gYear._validateTimeZone("z"); }, "Error");
        test.throws(function () { gYear._validateTimeZone("00:00"); }, "Error");
        test.throws(function () { gYear._validateTimeZone("00"); }, "Error");
        test.throws(function () { gYear._validateTimeZone("+00:69"); }, "Error");

        test.done();
    },

    "ValidateGYear": function (test)
    {

        var gYear = Jsonix.Schema.XSD.GYear.INSTANCE;

        test.doesNotThrow(function () { gYear._validateGYear("1984+00:00");});
        test.doesNotThrow(function () { gYear._validateGYear("-1984+00:00");});
        test.doesNotThrow(function () { gYear._validateGYear("1984");});
        test.doesNotThrow(function () { gYear._validateGYear("1984Z");});

        test.throws(function () { gYear._validateGYear("1984+00"); }, "Error");
        test.throws(function () { gYear._validateGYear("1984+"); }, "Error");
        test.throws(function () { gYear._validateGYear("+00:00"); }, "Error");


        test.done();

    },

    "SplitGYear": function (test)
    {
        var gYear = Jsonix.Schema.XSD.GYear.INSTANCE;

        test.equals("1984", gYear.splitGYear("1984+00:00").year);

        test.equals('+00:00', gYear.splitGYear("1984+00:00")._timezone);

        test.equals("1984", gYear.splitGYear("1984").year);
        test.equals(0, gYear.splitGYear("1984").timezone);
        test.equals(0, gYear.splitGYear("1984Z").timezone);

        test.throws(function () { gYear.splitGYear("+00:00"); }, "Error");
        test.throws(function () { gYear.splitGYear("1984+00"); }, "Error");
        test.throws(function () { gYear.splitGYear("1984+"); }, "Error");
        test.throws(function () { gYear.splitGYear("+00:00"); }, "Error");

        test.done();
    },

    "Calendar": function (test)
    {
        var calendar = Jsonix.Schema.XSD.Calendar.INSTANCE;

        var result = calendar.parseTimeZoneString("+05:00");
        console.log("calendar.parseTimeZoneString(\"+05:00\"): " + result);

        result = calendar.parseTimeZoneString("-05:00");
        console.log("calendar.parseTimeZoneString(\"-05:00\"): " + result);

        test.done();
    },

    "ParseTimeZoneString": function (test)
    {
        var gYear = Jsonix.Schema.XSD.GYear.INSTANCE;

        test.equal(-300, gYear.parseTimeZoneString("+05:00"));
        test.equal(300, gYear.parseTimeZoneString("-05:00"));
        test.equal(0, gYear.parseTimeZoneString("Z"));

        test.done();
    },
	"EmptyElement" : function(test) {
		var context = new Jsonix.Context([GH73]);
		var unmarshaller = context.createUnmarshaller();
		var marshaller = context.createMarshaller();

		test.equal(101, unmarshaller.unmarshalString('<GDateTypes year="0101"/>').value.year.year);
		test.equal(-1234567, unmarshaller.unmarshalString('<GDateTypes year="-1234567"/>').value.year.year);
		test.equal(2013, unmarshaller.unmarshalString('<GDateTypes year="2013-05:00"/>').value.year.year);
		test.equal(300, unmarshaller.unmarshalString('<GDateTypes year="2013-05:00"/>').value.year.timezone);
/*
		test.equal(0, unmarshaller.unmarshalString('<GDateTypes month="--01"/>').value.month.month);
		test.equal(11, unmarshaller.unmarshalString('<GDateTypes month="--12-05:00"/>').value.month.month);
		test.equal(300, unmarshaller.unmarshalString('<GDateTypes month="--12-05:00"/>').value.month.timezone);

		test.equal(1, unmarshaller.unmarshalString('<GDateTypes day="---01"/>').value.day.day);
		test.equal(31, unmarshaller.unmarshalString('<GDateTypes day="--12-05:00"/>').value.day.day);
		test.equal(300, unmarshaller.unmarshalString('<GDateTypes day="---31-05:00"/>').value.day.timezone);

		test.equal(2013, unmarshaller.unmarshalString('<GDateTypes yearMonth="2013-01"/>').value.yearMonth.year);
		test.equal(0, unmarshaller.unmarshalString('<GDateTypes yearMonth="2013-01"/>').value.yearMonth.month);
		test.equal(300, unmarshaller.unmarshalString('<GDateTypes yearMonth="2013-01-05:00"/>').value.yearMonth.timezone);

		test.equal(0, unmarshaller.unmarshalString('<GDateTypes monthDay="-01-01"/>').value.monthDay.month);
		test.equal(1, unmarshaller.unmarshalString('<GDateTypes monthDay="-01-01"/>').value.monthDay.day);
		test.equal(1, unmarshaller.unmarshalString('<GDateTypes monthDay="-01-01-05:00"/>').value.monthDay.timezone);*/
		test.done();
	}
};
