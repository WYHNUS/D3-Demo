var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

var port = 8088;
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/scripts', express.static(__dirname + '/node_modules/angular'));
app.use('/scripts', express.static(__dirname + '/node_modules/angular-route'));
app.use('/scripts', express.static(__dirname + '/node_modules/d3'));

// entry page
app.get('/', function(req, res) {
	res.render('home');
});

function resError(res, err) {
    return res.status(500).json({
        message: err.message
    });
}

http.createServer(app)
	.listen(port, function(server) {
		console.log('Listening on port %d', port);
	});