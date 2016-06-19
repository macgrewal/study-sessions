(function (helpers) {

  var vash = require('vash');

  helpers.init = function() {
    vash.helpers.search = function(label, id, value, placeholder, state) {
      this.buffer.push('<div class="input-group ' + state.getCss(id) + '">');
      this.buffer.push('<input type="text" class="form-control" id="' + id + '" name="' + id + '" value="' + (value || '') + '" placeholder="' + placeholder +'">');
      this.buffer.push('<span class="input-group-btn">');
      this.buffer.push('<button class="btn btn-primary" type="submit">Go!</button>');
      this.buffer.push('</span>');
      this.buffer.push('</div>');
    };
  };

})(module.exports);
