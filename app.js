var express         = require('express'),
    path            = require('path'),  
    bodyParser      = require('body-parser'),  
    mongoose        = require('mongoose'),
    methodOverride  = require('method-override'),
    http            = require('http'),
    errorhandler    = require('errorhandler');

var app = express();
var dbConfig  = require('./config/db/dbconfig.js');
mongoose.connect(dbConfig.url, function(err){
    if(err)
        console.log('Connection Error:'+err);
    else
        console.log("Connected");
});

app.set('port', process.env.PORT || 9000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

/*routes come in here*/
var main_route = require('./routes/route.js')(app);
/**/

app.use(function(req, res, next){
    res.render('404');
});

/* Setup the App */
module.exports = app;


/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});