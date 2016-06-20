(function (routes) {

  'use strict';

  var data = require('../../data');

  routes.init = function () {

    var express = require('express'),
      router = express.Router();

    router.get('/', function (req, res) {
      var tags = req.query.tags || '',
        type = req.query.type || '',
        id = req.query.id || '',
        options = {};

      if (tags) {
        options.tags = tags.split(',');
      }
      if (type) {
        options.type = type;
      }
      if (id) {
        options.id = id;
      }

      data.material(options, function (err, results) {
        if (err) {
          res.err(err);
        } else {
          res.send(results);
        }
      });
    });

    router.post('/', function (req, res) {
      data.insertMaterial(req.body, function (err, results) {
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
