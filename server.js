var http = require('http'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    routes = require('./routes'),
    uiHelpers = require('./views/helpers');

// parse submitted content
app.use(bodyParser.urlencoded({ extended: false }));

// set view engine to vash
app.set('view engine', 'vash');
uiHelpers.init();

// initialise routes
routes.init(app);

// allow serving static content from /public folder
app.use(express.static(__dirname + '/public'));

// start the server to listen on port 3000
var server = http.createServer(app);
server.listen(3000);

console.log('Serving content at http://localhost:3000/');
