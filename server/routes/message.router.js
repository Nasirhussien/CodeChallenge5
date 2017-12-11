var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({ name: String, message: String});


var Message = mongoose.model('forum', MessageSchema, 'forum');

router.get('/', function(req,res){
    Message.find({}, function(errorMakingDatabaseQuery, data){
        if(errorMakingDatabaseQuery){
            console.log('error with forum message find: ', errorMakingDatabaseQuery);
        } else {
            res.send(data);
        }
    });
});

router.post('/', function(req, res){
    console.log(req.body);
    var messageToAdd = new Message(req.body);
    messageToAdd.save(function(err, data){
        if(err) {
            res.sendStatus(500)
            console.log('BIG ERROR');
        } else {
            res.send(201);
        }

    });
});


module.exports = router