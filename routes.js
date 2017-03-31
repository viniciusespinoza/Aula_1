module.exports = (function(){
  'use strict';
  var express = require("express");
  var router = express.Router();
  var testeBL = require("./BL/teste.js");
  var xml = require("xml");

  router.get('/', function(req, res, next) {
    console.log("teste get");
    res.json({"get" : true});
  });

  router.delete('/', function(req, res, next) {
    console.log("teste delete");
    res.json({"delete" : true});
  });

  router.delete('/xml', function(req, res, next) {
    console.log("XML");
    console.log(req.headers['content-type'])
    var json = {"estrutura" : []};
    for (var i = 0; i < 10; i++) {
        json.estrutura.push(testeBL.devolveJSON("delete"));
    }
    res.set('content-type', 'text/xml');
    res.send(xml(json));
  });

  return router;
})();
