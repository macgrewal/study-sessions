(function (routes) {

  'use strict';

  var data = require('../../data');

  routes.init = function () {

    var express = require('express'),
      router = express.Router();

    router.get('/', function (req, res) {
      data.material(function (err, results) {
        if (err) {
          res.err(err);
        } else {
          res.send(results);
        }
      });
    });

    router.post('/', function (req, res) {
      var material = req.body;
      // get tags and replace any trailing newlines
      var tags = material.tags.replace(new RegExp('%0D%0A$'), '');
      // split tags into array
      tags = material.tags.split("%0D%0A");
      // put tags array back into object
      material.tags = tags;

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
