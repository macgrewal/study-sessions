(function (routes) {

  routes.init = function() {

    var express = require('express'),
        router = express.Router();

    router.get('/', function(req, res) {
      res.send('you hit session /');
    });

    return router;
  };

})(module.exports);
