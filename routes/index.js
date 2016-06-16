(function (routes) {

  'use strict';

  routes.init = function (app) {

    var express = require('express'),
      router = express.Router(),
      api = require('./api'),
      plan = require('./plan'),
      session = require('./session');

    router.get('/', function (req, res) {
      res.render('index', {
        title: "Welcome"
      });
    });

    app.use('/plan', plan.init());
    app.use('/session', session.init());
    app.use('/api', api.init(app));
    app.use('/', router);
  };

}(module.exports));
