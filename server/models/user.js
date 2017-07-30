const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1}, 	
    email: { type: String, required: true, minlength: 1},
    polls: [{type: Schema.Types.ObjectId, ref: 'Poll'}]},
    { timestamps: true });

//custom methods, pre, post etc. here

const User = mongoose.model('User', userSchema );      

