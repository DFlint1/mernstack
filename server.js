//Mean Stack App
//Author: Dana Flint
//NodeJS Server

//Initialize our Express Web Framework.
var express = require('express');
var app = express();

//native NodeJS module for resolving paths
var path = require('path');

//set up our port for later with environmental variable & dev port 3000
var port = process.env.PORT || 3000;

//Set our view engine to EJS, and set the directory our views will be stored in
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.use(express.static(path.resolve(__dirname, 'client')));

//set our first route
app.get('/', function(req,res){
	res.render('index.ejs');
});

//make our app listen for incoming requests on port assigned above
app.listen(port, function(){
	console.log('SERVER RUNNING...PORT: ' + port);
})