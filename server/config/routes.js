
var mongoose = require('mongoose');

var Quote = mongoose.model('Quote') // retrieve this Schema from our Models named "User"



// routes
// root request
var quotes = require('../controllers/quotes.js')
module.exports = function(app){
	app.get("/", function(req, res) {
		res.render("index");
	})

	app.post('/quotes', function(req, res) {
		quotes.create(req, res)
	})

	app.get('/allQuotes', function(req, res) {
		quotes.show(req, res)
	})
}