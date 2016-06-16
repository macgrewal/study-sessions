var http = require('http'),
  express = require('express'),
  app = express(),
  session = require('express-session'),
  flash = require('connect-flash'),
  bodyParser = require('body-parser'),
  routes = require('./routes'),
  uiHelpers = require('./views/helpers');

// initialize session
var sessionConfig = {
  secret: 'no one is ever going to guess this, hee hee.',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false
  }
};
app.use(session(sessionConfig));
app.use(flash());

// parse submitted content
app.use(bodyParser.urlencoded({
  extended: false
}));

// set view engine to vash
app.set('view engine', 'vash');
uiHelpers.init();

// initialise routes
routes.init(app);

// allow serving static content from /public folder
//noinspection JSUnresolvedVariable
app.use(express.static(__dirname + '/public'));

// start the server to listen on port 3000
var server = http.createServer(app);
server.listen(3000);

console.log('Serving content at http://localhost:3000/');
