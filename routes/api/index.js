(function (routes) {

  routes.init = function(app) {

    var express = require('express'),
        router = express.Router(),
        session = require('./session');

    router.use('/session', session.init());

    return router;
  };

})(module.exports);
