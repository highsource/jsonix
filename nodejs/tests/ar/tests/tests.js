process.on('uncaughtException', function(err) {
  console.error(err.stack);
});
module.exports = 
{
	"ar-tests": require('./ar-tests')
};
