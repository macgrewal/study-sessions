(function(helper) {

    helper.init = function(model, errors) {
        model = model || {};
        errors = errors || [];

        var hasErrors = function(key) {
            if (key) {
                return errors.filter(function(error) {
                    return error.key === key;
                }).length > 0;
            } else {
                return errors.length > 0;
            }
        };

        var getError = function(key) {
            var error = errors.find(function(error) {
                return error.key === key;
            });

            return error.message || '';
        };

        var getCss = function(key) {
            if (model[key] === undefined) return '';

            if (hasErrors(key)) return 'has-error';
            else return 'has-success';
        };

        return {
            hasErrors: hasErrors,
            message: getError,
            getCss: getCss
        };
    };

})(module.exports);
