(function (helper) {

  'use strict';

  helper.init = function (req, model, errors) {
    model = model || {};
    errors = errors || [];

    function isValid(key) {
      return !hasErrors();
    }

    function hasErrors(key) {
      if (key) {
        return errors.filter(function (error) {
          return error.key === key;
        }).length > 0;
      }

      return errors.length > 0;
    }

    function getError(key) {
      var error = errors.find(function (error) {
        return error.key === key;
      });

      return error.message || '';
    }

    var getCss = function (key) {
      if (model[key] === undefined) {
        return '';
      }

      return hasErrors(key) ? 'has-error' : 'has-success';
    };

    model.isValid = isValid;
    model.hasErrors = hasErrors;
    model.message = getError;
    model.getCss = getCss;

    var successMessages = req.flash('success');
    model.alert = successMessages.length === 0 ? undefined : successMessages[0];

    return model;
  };

}(module.exports));
