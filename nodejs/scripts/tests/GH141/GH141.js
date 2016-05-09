var Jsonix = require("../../jsonix").Jsonix;

module.exports = {
  "DurationP" : function(test) {
    var t = Jsonix.Schema.XSD.Duration.INSTANCE;

    var P0Y0M0DT0H0M0S = t.parse('P0Y0M0DT0H0M0S');
    test.deepEqual(P0Y0M0DT0H0M0S, { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
    var P0Y0M0DT0H0M0SAsString = t.print(P0Y0M0DT0H0M0S);
    test.equal(P0Y0M0DT0H0M0SAsString, 'P0Y0M0DT0H0M0S');

    var P0M0DT0H0M0S = t.parse('P0M0DT0H0M0S');
    test.deepEqual(P0M0DT0H0M0S, { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
    var P0M0DT0H0M0SAsString = t.print(P0M0DT0H0M0S);
    test.equal(P0M0DT0H0M0SAsString, 'P0M0DT0H0M0S');

    var P0Y0DT0H0M0S = t.parse('P0Y0DT0H0M0S');
    test.deepEqual(P0Y0DT0H0M0S, { years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
    var P0Y0DT0H0M0SAsString = t.print(P0Y0DT0H0M0S);
    test.equal(P0Y0DT0H0M0SAsString, 'P0Y0DT0H0M0S');

    var P0Y0MT0H0M0S = t.parse('P0Y0MT0H0M0S');
    test.deepEqual(P0Y0MT0H0M0S, { years: 0, months: 0, hours: 0, minutes: 0, seconds: 0 });
    var P0Y0MT0H0M0SAsString = t.print(P0Y0MT0H0M0S);
    test.equal(P0Y0MT0H0M0SAsString, 'P0Y0MT0H0M0S');

    var P0Y0M0DT0M0S = t.parse('P0Y0M0DT0M0S');
    test.deepEqual(P0Y0M0DT0M0S, { years: 0, months: 0, days: 0, minutes: 0, seconds: 0 });
    var P0Y0M0DT0M0SAsString = t.print(P0Y0M0DT0M0S);
    test.equal(P0Y0M0DT0M0SAsString, 'P0Y0M0DT0M0S');

    var P0Y0M0DT0H0S = t.parse('P0Y0M0DT0H0S');
    test.deepEqual(P0Y0M0DT0H0S, { years: 0, months: 0, days: 0, hours: 0, seconds: 0 });
    var P0Y0M0DT0H0SAsString = t.print(P0Y0M0DT0H0S);
    test.equal(P0Y0M0DT0H0SAsString, 'P0Y0M0DT0H0S');

    var P0Y0M0DT0H0M = t.parse('P0Y0M0DT0H0M');
    test.deepEqual(P0Y0M0DT0H0M, { years: 0, months: 0, days: 0, hours: 0, minutes: 0 });
    var P0Y0M0DT0H0MAsString = t.print(P0Y0M0DT0H0M);
    test.equal(P0Y0M0DT0H0MAsString, 'P0Y0M0DT0H0M');

    var P0Y0M0D = t.parse('P0Y0M0D');
    test.deepEqual(P0Y0M0D, { years: 0, months: 0, days: 0 });
    var P0Y0M0DAsString = t.print(P0Y0M0D);
    test.equal(P0Y0M0DAsString, 'P0Y0M0D');

    var P0Y = t.parse('P0Y');
    test.deepEqual(P0Y, { years: 0 });
    var P0YAsString = t.print(P0Y);
    test.equal(P0YAsString, 'P0Y');

    var PT0S = t.parse('PT0S');
    test.deepEqual(PT0S, { seconds: 0 });
    var PT0SAsString = t.print(PT0S);
    test.equal(PT0SAsString, 'PT0S');

    test.done();
  }
};
