var express = require('express');
var app = express();
var bodyparser = require('body-parser')
var port = 5000
var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/forum';
var messageRouter = require('./routes/message.router.js')
var bodyParser = require ('body-parser')

app.use(bodyParser.json());


mongoose.connection.on('connected', function(){
    console.log('mongoose functioning');
});

mongoose.connect(databaseUrl);


app.use(express.static('server/public'));

app.use('/messages', messageRouter)


app.listen(port, function(){
    console.log('listening on port', port);  
});