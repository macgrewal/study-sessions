(function(routes) {

    var errorsHelper = require('../utils/ui-error-helper');

    routes.init = function() {

        var express = require('express'),
            router = express.Router();

        router.get('/', function(req, res) {
            res.render('material/add-material', {
                title: 'Add material',
                data: {},
                state: errorsHelper.init()
            });
        });

        router.post('/', function(req, res) {
            var material = {
                title: req.body.title.trim() || '',
                description: req.body.description.trim() || '',
                type: req.body.type.trim() || '',
                url: req.body.url.trim() || '',
                tags: req.body.tags.trim() || ''
            };

            var errors = [];

            if (!material.title) errors.push({ key: 'title', message: 'Enter the name of the material.' });
            if (!material.description) errors.push({ key: 'description', message: 'Enter a description of the material.' });
            if (!material.type) errors.push({ key: 'type', message: 'Enter the type/format of the material.' });
            if (!material.url) errors.push({ key: 'url', message: 'Enter the url of the material.' });
            if (!material.tags) errors.push({ key: 'tags', message: 'Enter at least one tag e.g. the subject.'});

            var state = errorsHelper.init(material, errors);

            if (!state.hasErrors()) {
                res.redirect('/material');
            }
            else {
              res.status(400);
                res.render('material/add-material', {
                    title: 'Add material',
                    data: material,
                    state: state
                });
            }
        });

        return router;
    };

})(module.exports);
