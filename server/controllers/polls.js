const mongoose = require('mongoose');
const User = mongoose.model('User');
const Poll = mongoose.model('Poll');

module.exports = {
    create_poll: function(req, res){
        if(req.session.user_id){
            User.findById(req.session.user_id)
                .then(user => {
                    console.log(req.body)
                    let poll = new Poll;
                        poll.question = req.body.question 
                        poll.option1 = req.body.option1
                        poll.option2 = req.body.option2
                        poll.option3 = req.body.option3
                        poll.option4 = req.body.option4
                        poll.option1votes = 0
                        poll.option2votes = 0
                        poll.option3votes = 0
                        poll.option4votes = 0
                    poll.save()
                        .then(savedpoll => res.status(200).json(savedpoll))
                        .catch(savedpollerr => res.status(590).json(savedpollerr))
                })
                .catch(err => res.status(500).json(err));
        } else {
        res.json(false);
        }
    },
};


