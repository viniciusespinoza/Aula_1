var host = "localhost";
var port = 8080;
var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes.js');

app.use(express.static(__dirname+'/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port,host);
console.log("Aplicação iniciada. Escutando na porta "+ port);


// Database
var MongoClient = require('mongodb').MongoClient
var assert = require('assert');

//Connection URL
var url = 'mongodb://localhost:27017/test';

//Metodo de conexão
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log('Conectado com sucesso');
  db.close();
});
