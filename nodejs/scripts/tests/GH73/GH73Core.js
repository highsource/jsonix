var Jsonix = require("../../jsonix").Jsonix;
var GH73 = require("./Mappings.js").GH73;

// REVIEW AV: I'd actually get rid of the XML-based tests
// Only as smoke tests. Otherwise string-based tests (like in xsd.js) are sufficient.
module.exports = {

	"EmptyElement" : function(test) {
		var context = new Jsonix.Context([ GH73 ]);
		var unmarshaller = context.createUnmarshaller();

		// var marshaller = context.createMarshaller();

		test.equal(101, unmarshaller.unmarshalString('<GDateTypes year="0101"/>').value.year.year);
        test.equal(-1234567, unmarshaller.unmarshalString('<GDateTypes year="-1234567"/>').value.year.year);
        test.equal(1234567, unmarshaller.unmarshalString('<GDateTypes year="1234567"/>').value.year.year);
        test.equal(2013, unmarshaller.unmarshalString('<GDateTypes year="2013-05:00"/>').value.year.year);
        test.equal(-300, unmarshaller.unmarshalString('<GDateTypes year="2013-05:00"/>').value.year.timezone);
        test.equal(-2013, unmarshaller.unmarshalString('<GDateTypes year="-2013+05:00"/>').value.year.year);
        test.equal(300, unmarshaller.unmarshalString('<GDateTypes year="-2013+05:00"/>').value.year.timezone);
        test.equal(-60*60000, unmarshaller.unmarshalString('<GDateTypes year="1970+01:00"/>').value.year.date.getTime());

        test.throws(function() {
            unmarshaller.unmarshalString('<GDateTypes year="0000"/>');
        }, "Error");


        test.equal(1, unmarshaller.unmarshalString('<GDateTypes month="--01"/>').value.month.month);
        test.equal(12, unmarshaller.unmarshalString('<GDateTypes month="--12-05:00"/>').value.month.month);
        test.equal(-300, unmarshaller.unmarshalString('<GDateTypes month="--12-05:00"/>').value.month.timezone);

        test.equal(1, unmarshaller.unmarshalString('<GDateTypes day="---01"/>').value.day.day);
        test.equal(31, unmarshaller.unmarshalString('<GDateTypes day="---31-05:00"/>').value.day.day);
        test.equal(-300, unmarshaller.unmarshalString('<GDateTypes day="---31-05:00"/>').value.day.timezone);

        test.equal(2013, unmarshaller.unmarshalString('<GDateTypes yearMonth="2013-01"/>').value.yearMonth.year);
        test.equal(1, unmarshaller.unmarshalString('<GDateTypes yearMonth="2013-01"/>').value.yearMonth.month);
        test.equal(-300, unmarshaller.unmarshalString('<GDateTypes yearMonth="2013-01-05:00"/>').value.yearMonth.timezone);
        test.equal(0, unmarshaller.unmarshalString('<GDateTypes yearMonth="2013-01Z"/>').value.yearMonth.timezone);

        test.equal(3, unmarshaller.unmarshalString('<GDateTypes monthDay="--03-01"/>').value.monthDay.month);
        test.equal(1, unmarshaller.unmarshalString('<GDateTypes monthDay="--03-01"/>').value.monthDay.day);
        test.equal(-300, unmarshaller.unmarshalString('<GDateTypes monthDay="--02-01-05:00"/>').value.monthDay.timezone);
        test.equal(3, unmarshaller.unmarshalString('<GDateTypes monthDay="--03-01Z"/>').value.monthDay.month);

        test.done();
	}

};