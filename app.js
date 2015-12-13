var express         = require('express'),
    path            = require('path'),  
    cookieParser    = require('cookie-parser')
    bodyParser      = require('body-parser'),  
    mongoose        = require('mongoose'),
    methodOverride  = require('method-override'),
    http            = require('http'),
    passport        = require('passport'),
    session         = require('express-session'),
    flash            = require('connect-flash'),
    errorhandler    = require('errorhandler');

var app = express();
var dbConfig  = require('./config/db/dbconfig.js');
mongoose.connect(dbConfig.url, function(err){
    if(err)
        console.log('Connection Error:'+err);
    else
        console.log("Connected");
});
require('./config/passport')(passport);

app.set('port', process.env.PORT || 9000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'vuegramjs' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(isLoggedIn);
/*routes come in here*/
var main_route = require('./routes/route.js')(app,passport);
/**/

app.use(function(req, res, next){
    res.render('404');
});

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if they aren't redirect them to the home page
    if(req.path == "/login" || req.path == "/signup")
        next();
    else if(!req.isAuthenticated())
    res.redirect('/login');
    else
        next();
}

/* Setup the App */
module.exports = app;


/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});