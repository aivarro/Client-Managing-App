var mongoose = require('mongoose');

// Client Schema
var clientSchema = mongoose.Schema({
  email:{
    type: String,
    required: true
  },
  phone:{
    type: String,
    required: true
  },
  form3name:{
    type:String
  },
  form3value:{
    type: String
  },
  form4name:{
    type: String
  },
  form4value:{
    type: String
  },
  form5name:{
    type: String
  },
  form5value:{
    type: String
  },
  form6name:{
    type: String
  },
  form6value:{
    type: String
  },
  form7name:{
    type: String
  },
  form7value:{
    type: String
  },
  form8name:{
    type: String
  },
  form8value:{
    type: String
  },
  form9name:{
    type: String
  },
  form9value:{
    type: String
  },
  form10name:{
    type: String
  },
  form10value:{
    type: String
  }
});

var Client = module.exports = mongoose.model('Client', clientSchema);

// Get Clients
module.exports.getClients = function(callback, limit){
  Client.find(callback).limit(limit);
}

// Get a Client
module.exports.getClientById = function(id, callback){
  Client.findById(id, callback);
}

// Add Client
module.exports.addClient = function(client, callback){
  Client.create(client, callback);
}

// Edit Client
module.exports.editClient = function(id, client, options, callback){
  var query = {_id: id};
  var update = {
    email: client.email,
    phone: client.phone,
    form3name: client.form3name,
    form3value: client.form3value,
    form4name: client.form4name,
    form4value: client.form4value,
    form5name: client.form5name,
    form5value: client.form5value,
    form6name: client.form6name,
    form6value: client.form6value,
    form7name: client.form7name,
    form7value: client.form7value,
    form8name: client.form8name,
    form8value: client.form8value,
    form9name: client.form9name,
    form9value: client.form9value,
    form10name: client.form10name,
    form10value: client.form10value
  }
  Client.findOneAndUpdate(query, update, options, callback);
}

// Edit Client without phone
module.exports.editClientWithoutPhone = function(id, client, options, callback){
  var query = {_id: id};
  var update = {
    email: client.email,
    form3name: client.form3name,
    form3value: client.form3value,
    form4name: client.form4name,
    form4value: client.form4value,
    form5name: client.form5name,
    form5value: client.form5value,
    form6name: client.form6name,
    form6value: client.form6value,
    form7name: client.form7name,
    form7value: client.form7value,
    form8name: client.form8name,
    form8value: client.form8value,
    form9name: client.form9name,
    form9value: client.form9value,
    form10name: client.form10name,
    form10value: client.form10value
  }
  Client.findOneAndUpdate(query, update, options, callback);
}


// Delete Client
module.exports.deleteClient = function(id, callback){
  var query = {_id: id};
  Client.remove(query, callback);
}
