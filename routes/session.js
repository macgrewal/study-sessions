(function (routes) {

  var pattern = /^\d*$/;

  routes.init = function() {

    var express = require('express'),
        router = express.Router();

    router.get('/:id', function(req, res) {

      var sessionId = req.params.id;

      if (pattern.test(sessionId) && parseInt(sessionId) < 12 ) {
        res.render('session/index', {title: 'Your Session', id: sessionId});
      }
      else {
        res.status(400);
        res.render('errors/404', {title: 'Session Not Found', message: "The session your where looking for cannot be found."});
      }
    });

    return router;
  };

})(module.exports);
