var Jsonix = require("../../jsonix").Jsonix;
var GH203 = require("./Mappings").GH203;

module.exports = {
    "Default values" : function(test) {
        var context = new Jsonix.Context([GH203]);
        var unmarshaller = context.createUnmarshaller();

        var baseType = context.getTypeInfoByName('GH203.IssueGHC32Type');

        test.ok('defaultValue' in baseType.structure.attributes.dateTime);
        test.ok('defaultValue' in baseType.structure.attributes.date);
        test.ok('defaultValue' in baseType.structure.attributes.time);
        test.ok('defaultValue' in baseType.structure.attributes.double);
        test.ok('defaultValue' in baseType.structure.attributes.integer);
        test.ok('defaultValue' in baseType.structure.attributes.boolean);
        test.ok('defaultValue' in baseType.structure.attributes.string);

        var attrsWithCustomValues = `<el
            dateTime="2018-12-31T13:33:37"
            date="2018-12-31"
            time="13:33:37"
            double="3.14156"
            integer="42"
            boolean="true"
            string="customString"
        />`;
        var unmarshalledWithCustom = unmarshaller.unmarshalString(attrsWithCustomValues);

        test.equal(2018, unmarshalledWithCustom.value.dateTime.year);
        test.equal(31, unmarshalledWithCustom.value.dateTime.day);
        test.equal(13, unmarshalledWithCustom.value.dateTime.hour);
        test.equal(37, unmarshalledWithCustom.value.dateTime.second);
        test.equal(2018, unmarshalledWithCustom.value.date.year);
        test.equal(31, unmarshalledWithCustom.value.date.day);
        test.equal(13, unmarshalledWithCustom.value.time.hour);
        test.equal(37, unmarshalledWithCustom.value.time.second);
        test.equal(3.14156, unmarshalledWithCustom.value._double);
        test.equal(42, unmarshalledWithCustom.value.integer);
        test.equal(true, unmarshalledWithCustom.value._boolean);
        test.equal('customString', unmarshalledWithCustom.value.string);

        var attrsWithDefaultValues = `<el />`;
        var unmarshalledWithDefault = unmarshaller.unmarshalString(attrsWithDefaultValues);

        test.equal(2018, unmarshalledWithDefault.value.dateTime.year);
        test.equal(14, unmarshalledWithDefault.value.dateTime.day);
        test.equal(5, unmarshalledWithDefault.value.dateTime.hour);
        test.equal(38, unmarshalledWithDefault.value.dateTime.second);
        test.equal(2018, unmarshalledWithDefault.value.date.year);
        test.equal(14, unmarshalledWithDefault.value.date.day);
        test.equal(5, unmarshalledWithDefault.value.time.hour);
        test.equal(38, unmarshalledWithDefault.value.time.second);
        test.equal(0.123, unmarshalledWithDefault.value._double);
        test.equal(123, unmarshalledWithDefault.value.integer);
        test.equal(false, unmarshalledWithDefault.value._boolean);
        test.equal('test', unmarshalledWithDefault.value.string);

        test.done();
    }
};
