var express = require('express');
var path = require('path');

var app = express();

//let Express know that we are using these files
app.use('/app', express.static(path.join(__dirname, '/app')))
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')))
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')))


app.get('/', function(req, res){
	res.sendFile(__dirname +'/index.html')
})

app.listen('3000', function(){
	console.log('Listening for local host 3000')
})
