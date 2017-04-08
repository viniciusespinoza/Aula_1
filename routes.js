module.exports = (function(){
  'use strict';
  var express = require("express");
  var router = express.Router();
  var testeBL = require("./BL/teste.js");
  var xml = require("xml");
  var database = require("./connection.js")
  var url = 'mongodb://localhost:27017/db';

  router.delete('/usuarios', function(req, res, next) {
    database.criaConexao(url).then(function (db){
        db.collection('usuario').deleteMany(
             req.body,
             function(err, results) {
                res.json({"deletedTotal":results.result.n});
        }
      );
      db.close();
    })
  });

router.put('/usuarios', function(req, res, next) {
  database.criaConexao(url).then(function (db){
    db.collection('usuario').updateOne(
       req.body[0],
       req.body[1], function(err, results) {
       res.json({"updatedTotal":results.result.n});
    });
  });
});

router.get('/usuarios', function(req, res, next) {
   database.criaConexao(url).then(function (db){
    var cursor = db.collection('usuario').find();
    var usuarios = [];
    cursor.each(function(err, doc) {
      if (doc !== null) {
        usuarios.push(doc);
      } else {
        db.close();
        callback(usuarios);
      }
    });
    var callback = function(data){
      res.json([{"returnedTotal":data.length},data]);
    }
  });
});

router.post('/usuarios', function(req, res, next) {
   database.criaConexao(url).then(function (db){
    db.collection('usuario').insert(req.body , function(err, results) {
      res.json({"insertedTotal":results.result.n});
    });
  });
});
  return router;
})();
