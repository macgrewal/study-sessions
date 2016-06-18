(function (helpers) {

  var vash = require('vash');

  helpers.init = function() {
    vash.helpers.dropdown = function(label, id, options, value, state) {
      this.buffer.push('<div class="form-group ' + state.getCss(id) + '">');
      this.buffer.push('<label for="' + id + '" class="control-label">' + label);
      if (state.hasErrors(id)) {
       this.buffer.push('<p class="error-message">' + state.message(id) + '</p>');
      }
      this.buffer.push('</label>');
      this.buffer.push('<select class="form-control" id="' + id + '" name="' + id + '">');
      this.buffer.push(
        options.forEach(function(option){
          '<p></p>'
        })
      );

      this.buffer.push('<option ' + (options[0] == value ? 'selected>' : '>') + options[0] + '</option>');
      this.buffer.push('<option ' + (options[1] == value ? 'selected>' : '>') + options[1] + '</option>');
      this.buffer.push('<option ' + (options[2] == value ? 'selected>' : '>') + options[2] + '</option>');
      this.buffer.push('</select>');
      this.buffer.push('</div>');
    };
  };

})(module.exports);
