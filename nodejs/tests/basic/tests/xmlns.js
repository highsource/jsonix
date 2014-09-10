var Jsonix = require('jsonix').Jsonix;
var XMLNS = require('./XMLNS/Mappings').XMLNS;
module.exports =
{
	"Context" : function (test)
	{
		var context = new Jsonix.Context([ XMLNS ]);
		test.done();
	},
	"MarshalString" : function (test)
	{
		var context = new Jsonix.Context([ XMLNS ]);
		var data = {
			name : { ns : 'urn:test', lp : 'A' },
			value : {
				string : 'a',
				b : [ {
					string : 'b',
					a : [ { string : 'ab1'}, { string : 'ab2'}] 
				} ]
			}
		};
		var marshaller = context.createMarshaller();
		console.log(marshaller.marshalString(data));
		test.done();
	}
};
