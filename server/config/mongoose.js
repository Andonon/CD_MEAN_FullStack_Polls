var mongoose = require('mongoose');
var fs = require('fs'); // require the fs module for loading model files
var path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/surveys_troycenter', {useMongoClient: true});       

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    require(path.join(models_path, file))
  }
});
