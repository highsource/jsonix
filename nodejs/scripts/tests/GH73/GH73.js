process.env.TZ = 'UTC';

module.exports = {
	"Issues" : {

		"GH73Core" : require('./GH73Core'),
		"GH73Calendar" : require('./GH73Calendar'),
		"GH73GYear" : require('./GH73GYear'),
		"GH73GYearMonth" : require('./GH73GYearMonth'),
		"GH73GMonth" : require('./GH73GMonth'),
		"GH73GMonthDay" : require('./GH73GMonthDay'),
		"GH73GDay" : require('./GH73GDay'),
		"GH73Regex" : require('./GH73Regex')

	}
};
