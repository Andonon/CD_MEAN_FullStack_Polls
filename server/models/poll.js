const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pollSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    title: { type: String }, 	
    description: { type: String },
    responses: { type: Array }},
    { timestamps: true });

//custom methods, pre, post etc. here

const Poll = mongoose.model('Poll', pollSchema );      

