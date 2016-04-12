// requier mongoose
var mongoose = require('mongoose');

// require fs module for loading module files
var fs = require('fs');

// require path for getting the models path
var path = require('path');

// connect to mongoose!
mongoose.connect('mongodb://localhost/quote_dojo');

// create a variable that points to the path where all the models live
var models_path = path.join(__dirname, "./../models");

// read all the files in models_path and require (run) each of js files
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') >=0 ) {
		// require the file(this runs the modle file which registers the schema)
		require(models_path + '/' + file)
	}
});
