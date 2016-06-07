var http = require('http'),
    express = require('express'),
    app = express(),
    routes = require('./routes');

app.set('view engine', 'vash');
routes.init(app);

app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);
server.listen(3000);
console.log('Listening on port 3000...');
