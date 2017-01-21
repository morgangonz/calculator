var path = require('path');
var PORT = 8080;

module.exports = function(app){


	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname,'../calc.html'));

	});

}