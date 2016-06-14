(function (helpers) {

  var vash = require('vash');

  helpers.init = function() {
    vash.helpers.input = function(label, id, value, placeholder, state) {
      this.buffer.push('<div class="form-group ' + state.getCss(id) + '">');
      this.buffer.push('<label for="' + id + '" class="control-label">' + label);
      if (state.hasErrors(id)) {
       this.buffer.push('<p class="error-message">' + state.message(id) + '</p>');
      }
      this.buffer.push('</label>');
      this.buffer.push('<input type="text" class="form-control" id="' + id + '" name="' + id + '" value="' + (value || '') + '" placeholder="' + placeholder +'" />');
      this.buffer.push('</div>');
    };
  };

})(module.exports);
