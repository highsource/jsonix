var XMLNS = {
	n: 'XMLNS',
	dens: 'urn:test',
	tis : [{
		ln : 'A',
	        ps: [{
			n : 'string'
		}, {
			n : 'b',
			ti : '.B',
			col : true
		}]
	}, {
		ln : 'B',
	        ps: [{
			n : 'string'
		}, {
			n : 'a',
			ti : '.A',
			col : true
		}]
	}],
	eis : [ { en: 'A', ti: '.A' }, { en: 'B', ti: '.B'}]};
module.exports.XMLNS = XMLNS;
