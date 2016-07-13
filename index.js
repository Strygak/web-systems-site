var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	app = express(),
    morgan = require('morgan'),
    db = require('./db'),
	message = require('./app/message.js');

mongoose.connect(db.url);
app.use(morgan('dev'));

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.use('/handler', bodyParser.urlencoded({
    extended: true
}));

app.post('/handler', function(req, res, next) {
    var newMessage = new message({
    	"first_name": req.body.first_name,
    	"last_name": req.body.last_name,
    	"email": req.body.email,
    	"select": req.body.select,
    	"comments": req.body.comments
	});
    newMessage.save(function (err) {
    	if (err) console.log(err);
    });
    res.end();
});

app.listen(app.get('port'), function() {
  console.log('port ', app.get('port'));
});