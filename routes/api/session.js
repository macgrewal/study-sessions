(function (routes) {

  'use strict';

  var pattern = /^\d*$/;

  routes.init = function () {

    var express = require('express'),
      router = express.Router();

    router.get('/:id', function (req, res) {
      var sessionId = req.params.id;

      if (pattern.test(sessionId)) {
        res.send({sessionId: sessionId});
      } else {
        res.status(400);
        res.send({error: 'Invalid ID'});
      }
    });

    return router;
  };

}(module.exports));
