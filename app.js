var express = require("express");
var app = express();
var body_parser = require("body-parser");
var db = require("./models");
var flash = require("flash");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var routes = require('./routes')(passport);
var login = require("./passport/login")(passport);
var register = require("./passport/register")(passport);



app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(expressSession({secret: 'mySecretKey',
    resave :  true ,
    saveUninitialized :  true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', routes);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
  try{
  var result = await db.Users.findOne({
    where: {
      id: id
    }
  })
  done(null, result);
}
catch(err){
  console.error(err);
}
});


var start = async () => {
  try{
    await console.log(process.env.PASS);
    await db.sequelize.authenticate();
    await app.listen(3000);
    await console.log("Сервак запущен");
    await db.sequelize.sync();

  } catch(err) {
    console.error(err);
  }
}


start();
