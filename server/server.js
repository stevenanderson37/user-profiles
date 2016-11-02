var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');
var port = 3750;

var corsOptions = {
    origin: 'http://localhost:' + port
};

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({secret: config.sessionSecret}));

app.get('/api/profiles', profileCtrl.sessionFriends);

app.post('/api/login', userCtrl.login);






app.listen(port, function(){
  console.log("Listening on port " + port);
});
