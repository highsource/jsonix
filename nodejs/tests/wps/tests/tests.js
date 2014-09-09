process.on('uncaughtException', function(err) {
  console.error(err.stack);
});
module.exports = 
{
	"wps-tests": require('./wps-tests')
};
