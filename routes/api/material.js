(function(routes) {

  'use strict';

  var data = require('../../data');

  routes.init = function() {

    var express = require('express'),
      router = express.Router();

    router.get('/', function(req, res) {
      var tags = req.query.tags || '',
        type = req.query.type || '',
        options = {};

      if (tags) options.tags = tags.split(',');
      if (type) options.type = type;

      data.material(options, function(err, results) {
        if (err) {
          res.err(err);
        } else {
          res.send(results);
        }
      });
    });

    var bodyParser = require('body-parser');
    var jsonParser = bodyParser.json();

    router.post('/', jsonParser, function (req, res) {
      data.insert(req.body, function (err, results) {
        if (err) {
          res.err(err);
        } else {
          res.send(results);
        }
      });
    });

    return router;
  };

}(module.exports));
