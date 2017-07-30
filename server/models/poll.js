const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pollSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    title: { type: String }, 	
    description: { type: String },
    option1votes: { type: Number } ,
    option2votes: { type: Number } ,
    option3votes: { type: Number } ,
    option4votes: { type: Number } ,
    option1: { type: String },
    option2: { type: String },
    option3: { type: String },
    option4: { type: String }},
    { timestamps: true });

//custom methods, pre, post etc. here

const Poll = mongoose.model('Poll', pollSchema );      

