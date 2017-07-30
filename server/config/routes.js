const mongoose = require('mongoose');
// const some_name =require('../controllers/controller_some_name.js') 
module.exports = function(app){ 




//     //Sample Routes
//    app.get('/', function(req, res) {
//        some_name.show(req,res);
//    });
//    app.get('/new', function(req, res){
//        res.render('add');
//    });
//    app.post("/add", function(req, res){
//        some_name.add(req, res);
//    });
//    app.get("/destroy/:id", function(req, res){
//        some_name.destroy(req, res);
//    });
//    app.post("/edit/:id", function (req, res){
//        some_name.edit (req, res);
//    });


// This route should be the last route in this file, to ensure non express routes go to Angular.
// reroutes all traffic routes not listed above to Angualr’s routes.
  app.get('*', (req, res) => {
       res.sendFile(path.resolve('./public/dist/index.html'));
   });
}

