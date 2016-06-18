(function (routes) {

    var errorsHelper = require('../utils/ui-error-helper');
    var data = require('../data');

    routes.init = function () {

        var express = require('express'),
            router = express.Router();

        router.get('/', function(req, res) {
            res.render('search/results', {
                title: 'Search',
                data: {},
                results: null,
                state: errorsHelper.init()
            });
        });

        router.post('/', function(req, res) {
            var criteria = {
                collection: req.body.collection.trim() || '',
                keywords: req.body.keywords.trim() || ''
            };

            var errors = [];

            if (!criteria.collection) errors.push({ key: 'collection', message: 'Select an option.' });

            var state = errorsHelper.init(criteria, errors);

            if (!state.hasErrors()) {
              data.material(function (err, results) {
                  if (err) {
                      res.err(err);
                  }
                  else {
                    res.render('search/results', {
                        title: 'Search',
                        data: criteria,
                        results: results,
                        state: errorsHelper.init()
                    });
                  }
              });
            }
            else {
              res.status(400);
                res.render('search/results', {
                    title: 'Search',
                    data: criteria,
                    results: null,
                    state: state
                });
            }
        });

        return router;
    };

})(module.exports);
