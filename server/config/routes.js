const mongoose = require('mongoose');
const path = require('path');
const users = require('../controllers/users.js');
const polls = require('../controllers/polls.js')

module.exports = function(app){ 

    app.post('/registerorlogin', function(req, res){
        users.registerorlogin(req, res);
    });
    app.get('/get_logged_in_user', function(req, res){
        users.get_logged_in_user(req, res);
    });
    app.get('/logoff', function(req, res){
        users.logoff(req, res);
    });

// This route should be the last route in this file, to ensure non express routes go to Angular.
// reroutes all traffic routes not listed above to Angualr’s routes.
  app.get('*', (req, res) => {
       res.sendFile(path.resolve('./client/dist/index.html'));
   });
}

