(function (routes) {

  'use strict';

  var extend = require('util')._extend,
    modelHelper = require('../utils/model-helper'),
    data = require('../data');

  routes.init = function () {

        var express = require('express'),
            router = express.Router();

        router.get('/', function(req, res) {
            res.render('search/results', {
                title: 'Search',
                data: {},
                results: null,
                state: modelHelper.init()
            });
        });

        router.post('/', function(req, res) {
            var criteria = {
                collection: req.body.collection.trim() || '',
                keywords: req.body.keywords.trim() || ''
            };

            var errors = [];

            if (!criteria.collection) errors.push({ key: 'collection', message: 'Select an option.' });

            var state = modelHelper.init(req, criteria, errors);

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
                        state: modelHelper.init(req)
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
