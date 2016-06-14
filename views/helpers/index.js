(function (helpers) {

  var input = require('./input'),
      textarea = require('./textarea');

  helpers.init = function() {
    input.init();
    textarea.init();
  };

})(module.exports);
