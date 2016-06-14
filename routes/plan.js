(function(routes) {

    var errorsHelper = require('../utils/ui-error-helper');

    routes.init = function() {

        var express = require('express'),
            router = express.Router();

        router.get('/', function(req, res) {
            res.render('plan/create-details', {
                title: 'Create a study plan',
                data: {},
                state: errorsHelper.init()
            });
        });

        router.post('/', function(req, res) {
            var plan = {
                name: req.body.name.trim() || '',
                goal: req.body.goal.trim() || '',
                tags: req.body.tags.trim() || ''
            };

            var errors = [];

            if (!plan.name) errors.push({ key: 'name', message: 'Enter the name of the plan.' });
            if (!plan.goal) errors.push({ key: 'goal', message: 'Enter a goal for the plan.'});
            if (!plan.tags) errors.push({ key: 'tags', message: 'Enter at least one tag e.g. the subject.'});

            var state = errorsHelper.init(plan, errors);

            if (!state.hasErrors()) {
                res.redirect('/plan');
            }
            else {
              res.status(400);
                res.render('plan/create-details', {
                    title: 'Create a study plan',
                    data: plan,
                    state: state
                });
            }
        });

        return router;
    };

})(module.exports);
