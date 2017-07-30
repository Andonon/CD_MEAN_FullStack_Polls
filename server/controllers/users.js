const mongoose = require('mongoose');
const User = mongoose.model('User');
const Poll = mongoose.model('Poll');

module.exports = {
    
    registerorlogin: function(req, res){  

        let inbounduser = new User();
        inbounduser.name = req.body.name;
        inbounduser.email = req.body.email.toLowerCase();
        
        // check for the user by email, if they already exist, append to existing user (note: lowercase emails)... 
        User.findOne({ email: inbounduser.email.toLowerCase() })
            .then(data => { 
                if(data === null){  // if the user does not exist, create it. 
                    inbounduser.save();
                    req.session.user_id = inbounduser._id;
                    res.status(200).json(inbounduser);
                } else {
                    data.name = inbounduser.name;
                    data.save();
                    req.session.user_id = data._id;
                    res.status(200).json(data);
                }
            })
            .catch(err => {
                res.status(599).json(err);
            });
    },
    get_logged_in_user: function(req, res){
        if(req.session.user_id){
            User.findById(req.session.user_id)
                .then(user => res.json(user))
                .catch(err => res.status(500).json(err));
        } else {
        res.json(false);
        }
    },

    logoff: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    },

};


