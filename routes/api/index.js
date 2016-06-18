(function (routes) {

  'use strict';

  routes.init = function () {

    var express = require('express'),
      router = express.Router(),
      session = require('./session'),
      material = require('./material');

    router.use('/session', session.init());
    router.use('/material', material.init());

    return router;
  };

}(module.exports));
