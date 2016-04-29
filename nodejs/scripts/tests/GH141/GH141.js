var Jsonix = require("../../jsonix").Jsonix;
var GH141 = require("./Mappings.js").GH141;

module.exports = {
  "DurationP" : function(test) {
    var context = new Jsonix.Context([GH141]);
    var unmarshaller = context.createUnmarshaller();
    var marshaller = context.createMarshaller();

    var P0Y0M0DT0H0M0S = unmarshaller.unmarshalString('<durationTest xmlns="gh:141"><d xmlns="">P0Y0M0DT0H0M0S</d></durationTest>');
    test.deepEqual(P0Y0M0DT0H0M0S.value.d, { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
    var P0Y0M0DT0H0M0Sxml = marshaller.marshalString(P0Y0M0DT0H0M0S);
    test.equal(P0Y0M0DT0H0M0Sxml, '<p0:durationTest xmlns:p0="gh:141"><d>P0Y0M0DT0H0M0S</d></p0:durationTest>');

    var P0M0DT0H0M0S = unmarshaller.unmarshalString('<durationTest xmlns="gh:141"><d xmlns="">P0M0DT0H0M0S</d></durationTest>');
    test.deepEqual(P0M0DT0H0M0S.value.d, { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
    var P0M0DT0H0M0Sxml = marshaller.marshalString(P0M0DT0H0M0S);
    test.equal(P0M0DT0H0M0Sxml, '<p0:durationTest xmlns:p0="gh:141"><d>P0M0DT0H0M0S</d></p0:durationTest>');

    var P0Y0DT0H0M0S = unmarshaller.unmarshalString('<durationTest xmlns="gh:141"><d xmlns="">P0Y0DT0H0M0S</d></durationTest>');
    test.deepEqual(P0Y0DT0H0M0S.value.d, { years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
    var P0Y0DT0H0M0Sxml = marshaller.marshalString(P0Y0DT0H0M0S);
    test.equal(P0Y0DT0H0M0Sxml, '<p0:durationTest xmlns:p0="gh:141"><d>P0Y0DT0H0M0S</d></p0:durationTest>');

    var P0Y0MT0H0M0S = unmarshaller.unmarshalString('<durationTest xmlns="gh:141"><d xmlns="">P0Y0MT0H0M0S</d></durationTest>');
    test.deepEqual(P0Y0MT0H0M0S.value.d, { years: 0, months: 0, hours: 0, minutes: 0, seconds: 0 });
    var P0Y0MT0H0M0Sxml = marshaller.marshalString(P0Y0MT0H0M0S);
    test.equal(P0Y0MT0H0M0Sxml, '<p0:durationTest xmlns:p0="gh:141"><d>P0Y0MT0H0M0S</d></p0:durationTest>');

    var P0Y0M0DT0M0S = unmarshaller.unmarshalString('<durationTest xmlns="gh:141"><d xmlns="">P0Y0M0DT0M0S</d></durationTest>');
    test.deepEqual(P0Y0M0DT0M0S.value.d, { years: 0, months: 0, days: 0, minutes: 0, seconds: 0 });
    var P0Y0M0DT0M0Sxml = marshaller.marshalString(P0Y0M0DT0M0S);
    test.equal(P0Y0M0DT0M0Sxml, '<p0:durationTest xmlns:p0="gh:141"><d>P0Y0M0DT0M0S</d></p0:durationTest>');

    var P0Y0M0DT0H0S = unmarshaller.unmarshalString('<durationTest xmlns="gh:141"><d xmlns="">P0Y0M0DT0H0S</d></durationTest>');
    test.deepEqual(P0Y0M0DT0H0S.value.d, { years: 0, months: 0, days: 0, hours: 0, seconds: 0 });
    var P0Y0M0DT0H0Sxml = marshaller.marshalString(P0Y0M0DT0H0S);
    test.equal(P0Y0M0DT0H0Sxml, '<p0:durationTest xmlns:p0="gh:141"><d>P0Y0M0DT0H0S</d></p0:durationTest>');

    var P0Y0M0DT0H0M = unmarshaller.unmarshalString('<durationTest xmlns="gh:141"><d xmlns="">P0Y0M0DT0H0M</d></durationTest>');
    test.deepEqual(P0Y0M0DT0H0M.value.d, { years: 0, months: 0, days: 0, hours: 0, minutes: 0 });
    var P0Y0M0DT0H0Mxml = marshaller.marshalString(P0Y0M0DT0H0M);
    test.equal(P0Y0M0DT0H0Mxml, '<p0:durationTest xmlns:p0="gh:141"><d>P0Y0M0DT0H0M</d></p0:durationTest>');

    var P0Y0M0D = unmarshaller.unmarshalString('<durationTest xmlns="gh:141"><d xmlns="">P0Y0M0D</d></durationTest>');
    test.deepEqual(P0Y0M0D.value.d, { years: 0, months: 0, days: 0 });
    var P0Y0M0Dxml = marshaller.marshalString(P0Y0M0D);
    test.equal(P0Y0M0Dxml, '<p0:durationTest xmlns:p0="gh:141"><d>P0Y0M0D</d></p0:durationTest>');

    var P0Y = unmarshaller.unmarshalString('<durationTest xmlns="gh:141"><d xmlns="">P0Y</d></durationTest>');
    test.deepEqual(P0Y.value.d, { years: 0 });
    var P0Yxml = marshaller.marshalString(P0Y);
    test.equal(P0Yxml, '<p0:durationTest xmlns:p0="gh:141"><d>P0Y</d></p0:durationTest>');

    var PT0S = unmarshaller.unmarshalString('<durationTest xmlns="gh:141"><d xmlns="">PT0S</d></durationTest>');
    test.deepEqual(PT0S.value.d, { seconds: 0 });
    var PT0Sxml = marshaller.marshalString(PT0S);
    test.equal(PT0Sxml, '<p0:durationTest xmlns:p0="gh:141"><d>PT0S</d></p0:durationTest>');

    test.done();
  }
};
