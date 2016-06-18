(function (routes) {

  'use strict';

  var extend = require('util')._extend,
    modelHelper = require('../utils/model-helper');

  routes.init = function () {

        var express = require('express'),
            router = express.Router();

        // GET: /material
        router.get('/', function (req, res) {
          var model = modelHelper.init(req);
          model.title = 'Add material';
          res.render('material/add-material', model);
        });

        // POST: /material
        router.post('/', function (req, res) {

          var errors = [],
            model = {
              name: req.body.name.trim() || '',
              description: req.body.description.trim() || '',
              type: req.body.type.trim() || '',
              url: req.body.url.trim() || '',
              tags: req.body.tags.trim() || ''
            };

          if (!model.name) {
            errors.push({
              key: 'name',
              message: 'Enter a name for the material.'
            });
          }
          if (!model.description) {
            errors.push({
              key: 'description',
              message: 'Enter a description for the material.'
            });
          }
          if (!model.type) {
            errors.push({
              key: 'type',
              message: 'Enter a type for the material.'
            });
          }
          if (!model.url) {
            errors.push({
              key: 'url',
              message: 'Enter a url for the material.'
            });
          }
          if (!model.tags) {
            errors.push({
              key: 'tags',
              message: 'Enter at least one tag e.g. Java.'
            });
          }

          model = modelHelper.init(req, model, errors);

          if (model.isValid()) {
            req.material = {
              name: model.name,
              description: model.description,
              type: model.type, 
              url: model.url,
              tags: model.tags.split('\n').join(',')
            };

            res.redirect('material/add-material');
          } else {
            res.status(400);
            model.title = 'Add material';
            res.render('material/add-material', model);
          }
        });

        return router;
    };

})(module.exports);
