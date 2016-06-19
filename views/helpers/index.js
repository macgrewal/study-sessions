(function (helpers) {

  var input = require('./input'),
      search = require('./search'),
      textarea = require('./textarea');

  helpers.init = function() {
    input.init();
    search.init();
    textarea.init();
  };

})(module.exports);
