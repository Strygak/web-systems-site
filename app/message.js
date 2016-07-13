var mongoose = require('mongoose');
var	Schema = mongoose.Schema({
	"first_name": String,
	"last_name": String,
	"email": String,
	"select": String,
	"comments": String
	});

module.exports = mongoose.model('message', Schema);