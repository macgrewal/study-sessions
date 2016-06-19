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
                state: modelHelper.init(req)
            });
        });

        router.post('/', function(req, res) {
            var criteria = req.body.keywords.trim().split(' ') || '';

            require('request')({
              url: req.protocol + '://' + req.get('host') + '/api/material?tags=' + criteria,
              method: 'GET'
            }, function(err, resp, body) {
                  if (err) {
                      res.err(err);
                  }
                  else {
                    res.render('search/results', {
                        title: 'Search',
                        data: criteria,
                        results: JSON.parse(body),
                        state: modelHelper.init(req)
                    });
                  }
            });
        });

        return router;
    };

})(module.exports);
