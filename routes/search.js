(function (routes) {

    var data = require('../data');

    routes.init = function () {

        var express = require('express'),
            router = express.Router();

        router.get('/', function (req, res) {
            data.material(function (err, results) {
                if (err) {
                    res.err(err);
                }
                else {
                  res.render('search/results', {
                      title: 'Search results',
                      data: results
                  });
                }
            });
        });

        return router;
    };

})(module.exports);
