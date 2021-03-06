(function (routes) {

  'use strict';

  var extend = require('util')._extend,
    modelHelper = require('../utils/model-helper');

  routes.init = function () {

    var express = require('express'),
      router = express.Router();

    // GET: /plan
    router.get('/', function (req, res) {
      var model = modelHelper.init(req);
      model.title = 'Create a study plan';
      res.render('plan/details', model);
    });

    // POST: /plan
    router.post('/', function (req, res) {

      var errors = [],
        model = {
          name: req.body.name.trim() || '',
          goal: req.body.goal.trim() || '',
          tags: req.body.tags.trim() || ''
        };

      if (!model.name) {
        errors.push({
          key: 'name',
          message: 'Enter the name of the plan.'
        });
      }
      if (!model.goal) {
        errors.push({
          key: 'goal',
          message: 'Enter a goal for the plan.'
        });
      }
      if (!model.tags) {
        errors.push({
          key: 'tags',
          message: 'Enter at least one tag e.g. the subject.'
        });
      }

      model = modelHelper.init(req, model, errors);

      if (model.isValid()) {
        req.session.plan = {
          name: model.name,
          goal: model.goal,
          tags: model.tags.split('\n').join(',')
        };

        res.redirect('/plan/material');
      } else {
        res.status(400);
        model.title = 'Create a study plan';

        res.render('plan/details', model);
      }
    });

    // GET /plan/material
    router.get('/material', function (req, res) {
      var model = modelHelper.init(req, req.session.plan);
      model.title = 'Select matertial for your study plan';
      res.render('plan/material', model);
    });

    // POST /plan/material
    router.post('/material', function (req, res) {

      var errors = [],
        model = {
          material: req.body.material || []
        };

      if (model.material.length === 0) {
        errors.push({
          key: 'material',
          message: 'Select some material to include in the plan.'
        });
      }

      model = modelHelper.init(req, model, errors);

      if (model.isValid()) {
        req.flash('success', 'Your study plan has been created');
        res.redirect('/plan');
      } else {
        model = extend(model, req.session.plan);
        res.render('plan/material', model);
      }
    });

    return router;
  };

}(module.exports));
