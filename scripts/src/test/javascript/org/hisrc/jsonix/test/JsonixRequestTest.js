function testSync() {

	var request = Jsonix.Request.INSTANCE;

	var transport = request.issue('test0.xml', function(result) {
		logger.info('Response text:' + result.responseText);
	}, null, {
		async : false
	});
}

function testSyncDOM() {
	Jsonix.DOM.load('test0.xml', function(doc) {
		logger.info('Loaded document:' + doc);

	}, {
		async : false
	});

}