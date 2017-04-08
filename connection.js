module.exports = (function(){
  var Promise = require('promise');
  var MongoClient = require('mongodb').MongoClient;
  var factory = {};

  factory.criaConexao = function(url){
    return new Promise(function (fulfill, reject){
      MongoClient.connect(url, function(err, db) {
        if (err) reject(err);
        else fulfill(db);
      });
    });
  }

  return factory;

})();
