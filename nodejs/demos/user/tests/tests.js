process.on('uncaughtException', function(err) {
	console.error(err.stack);
});
module.exports = {
	"user-tests" : require('./user-tests')
};
