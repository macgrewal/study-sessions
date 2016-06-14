(function (helpers) {

  var vash = require('vash');

  helpers.init = function() {
    vash.helpers.textarea = function(label, id, value, hint, state) {
      this.buffer.push('<div class="form-group ' + state.getCss(id) + '">');
      this.buffer.push('<label for="' + id + '" class="control-label">' + label);
      if (state.hasErrors(id)) {
       this.buffer.push('<p class="error-message">' + state.message(id) + '</p>');
      }
      this.buffer.push('</label>');
      this.buffer.push('<textarea class="form-control" rows="3" id="' + id + '" name="' + id + '">' + (value || '') + '</textarea>');
      this.buffer.push('<span class="help-block">' + hint + '</span>');
      this.buffer.push('</div>');
    };
  };

})(module.exports);
