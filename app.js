var validator = require('validator');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Regex = require("regex");

app.use(express.static('client'));﻿
app.use(bodyParser.json());

Client = require('./models/client')
// Connect to Mongoose
mongoose.connect('mongodb://localhost/myapp');
var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Please use /api/clients');
});

app.get('/api/clients', function(req, res){
  Client.getClients(function(err, clients){
    if(err){
      throw err;
    }
    res.json(clients);
  });
});

app.get('/api/clients/:_id', function(req, res){
  Client.getClientById(req.params._id, function(err, client){
    if(err){
      throw err;
    }
    res.json(client);
  });
});

var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password);
  text = text.substring(0,(text.length-4));
  var crypted = cipher.update(text,'utf8','hex');
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(buffer){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = Buffer.concat([decipher.update(buffer) , decipher.final()]);
  return dec;
}

var mainregex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@{1,64}(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
var lengthregex = /[a-z0-9@.!#$%&'*+/=?^_`{|}~-]{6,254}/g

app.post('/api/clients', function(req, res){
  var client = req.body;
  var phone = req.body.phone;
  var email = req.body.email;
  if(validator.isMobilePhone(phone, 'en-GB') && (mainregex.test(email) && lengthregex.test(email))) {
  Client.addClient(client, function(err, client, phone){
    if(err){
      throw err;
    }
    var phone = req.body.phone;
    var phoneend = phone.substring((phone.length-4),(phone.length));
    var phone = encrypt(phone) + phoneend;
    //TODO ADD THE ENCRYPTED PHONE NUMBER TO CLIENT(req.body)
    console.log(phone);
    res.json(client);
  });} else {
  console.log('Did not validate phone or email.'); }
});

app.put('/api/clients/:_id', function(req, res){
  var id = req.params._id;
  var client = req.body;
  var phone = req.body.phone;
  var email = req.body.email;
  if(validator.isMobilePhone(phone, 'en-GB') && (mainregex.test(email) && lengthregex.test(email))){
  Client.editClient(id, client, {}, function(err, client){
    if(err){
      throw err;
    }
    var phone = req.body.phone;
    var phoneend = phone.substring((phone.length-4),(phone.length));
    var phone = encrypt(phone) + phoneend;
    //TODO ADD THE ENCRYPTED PHONE NUMBER TO CLIENT(req.body)
    console.log(phone);
    res.json(client);
  });} else {
  console.log('Did not validate phone or email.'); }
});

app.delete('/api/clients/:_id', function(req, res){
  var id = req.params._id;
  Client.deleteClient(id, function(err, client){
    if(err){
      throw err;
    }
    res.json(client);
  });
});

app.listen(3000);
console.log('Running on port 3000...');
