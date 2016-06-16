(function (helpers) {

  var input = require('./input'),
      dropdown = require('./dropdown'),
      textarea = require('./textarea');

  helpers.init = function() {
    input.init();
    dropdown.init();
    textarea.init();
  };

})(module.exports);
