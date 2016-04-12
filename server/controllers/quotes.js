var mongoose = require('mongoose');

var Quote = mongoose.model('Quote') // retrieve this Schema from our Models named "User"

module.exports = {

	show: function(req,res) {
		Quote.find({}, function(err, quotes){
			res.render("quotes", {quotes: quotes})
		})
	},
	create: function(req, res){
		var quote = new Quote({name: req.body.name, quote: req.body.quote, date: Date()});
		quote.save(function(err){
		if(err){
			console.log("Something went wrong!!!")
		}
		else{
			console.log("Successfully added a quote")
			res.redirect("/allQuotes")
			}
		})
	}

}