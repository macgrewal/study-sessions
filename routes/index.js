(function (routes) {

  routes.init = function(app) {

    var express = require('express'),
        router = express.Router(),
        api = require('./api'),
        session = require('./session');

    router.get('/', function(req, res) {
      res.render('index', {title: "Welcome"});
    });

    app.use('/session', session.init());
    app.use('/api', api.init(app));
    app.use('/', router);
  };

})(module.exports);