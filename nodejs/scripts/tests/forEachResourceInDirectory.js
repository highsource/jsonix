var fs = require('fs');
var forEachResourceInDirectory = function(directory, suffix, testFunction, args) {
	args = args || [];
	var testFunctionFactory = function(resource) {
		return function(test) {
			console.log('Testing [' + resource + '].');
			var testFunctionArgs = [test];
			testFunctionArgs.push(resource);
			// TODO there is a better way
			for (var i = 0; i < args.length; i++)
			{
				testFunctionArgs.push(args[i]);
			}
			testFunction.apply(null, testFunctionArgs);
		};
	};
	var files = fs.readdirSync(directory);
	var result = {};
	for (var index = 0; index < files.length; index++) {
		var file = files[index];
		if (file.indexOf(suffix, file.length - suffix.length) !== -1) {
			var resource = directory + '/' + file.substring(0, file.length - suffix.length);
//			console.log('Adding roundtrip test [' + resource + ']');
			result[file] = testFunctionFactory(resource);
		}
	}
	return result;
};
module.exports = forEachResourceInDirectory;
