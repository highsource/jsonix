var fs = require('fs');
var forEachResourceInDirectory = function(testFunction, args, directory, suffix) {
	args = args || [];
	var testFunctionFactory = function(resource) {
		return function(test) {
			console.log('Testing [' + resource + '].');
			args.splice(0, 0, test);
			args.push(resource);
			testFunction.apply(null, args);
		};
	};
	var files = fs.readdirSync(directory);
	var result = {};
	for (var index = 0; index < files.length; index++) {
		var file = files[index];
		if (file.indexOf(suffix, file.length - suffix.length) !== -1) {
			var resource = directory + '/' + file.substring(0, file.length - suffix.length);
			console.log('Adding roundtrip test [' + resource + ']');
			result[file] = testFunctionFactory(resource);
		}
	}
	return result;
};
module.exports = forEachResourceInDirectory;
