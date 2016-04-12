// require mongoose
var mongoose = require('mongoose');

// create schema

var UserSchema = new mongoose.Schema({
	name: String,
	quote: String,
	date: Date
})

mongoose.model('Quote', UserSchema); //setting this Schema in our Models as "User"
