(function () {
  'use strict';

  $(document).ready(function () {
    $('table[data-src]').each(function () {
      var table = $(this);
      table.remove('tr');
      var source = $(this).data('src');

      $.getJSON(source, function (data) {
        var rows = [];

        for (var i = 0; i < data.length; i++) {
          var item = data[i];
          item.description = item.description || 'link to ' + item.title;

          var row = '<tr>' +
            '<td>' + item.title + '</td>' +
            '<td><a href="' + item.url + '" target="_blank" title="' + item.title + '(opens in a new window)">' + item.description + '</a></td>' +
            '<td>' + item.type + '</td>' +
            '<td><label for="' + item._id + '"><span>Use ' + item.title + ' in study plan</span> <input type="checkbox" id="' + item._id + '" name="material" value="' + item._id + '" /></label></td>' +
            '</tr>';
          table.append($(row));
        }
      });
    });
  });
}());
