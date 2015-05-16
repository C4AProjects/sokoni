/**
 * Created by macbookproretina on 07/05/15.
 */
var API = {}
var express = require('express');
var favicon = require('serve-favicon');


var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');
var compress = require('compression');
var app = express();


APP.connctedCustomers=[]
APP.connctedDriver=[]

APP.APIPATH=APP.CONFIG.API.PATH+"/"+APP.CONFIG.version;
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(compress());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res){

    res.send({message:"welcome to KNCCI Api",version:APP.CONFIG.version})
});


//loading Driver Route
require('./routes/MemberRoute')(app)

app.listen(APP.CONFIG.API.PORT, function(){
    INFO('listening on *:'+APP.CONFIG.API.PORT);
});

module.exports = API;