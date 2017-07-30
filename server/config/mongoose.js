var mongoose = require('mongoose');
var fs = require('fs'); // require the fs module for loading model files
var path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/belt6', {useMongoClient: true});      
//change to your db name

// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');

// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(path.join(models_path, file))
  }
});
