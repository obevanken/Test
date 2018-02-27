var db = require('../models');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport){
     passport.use('login', new LocalStrategy({
    passReqToCallback : true
  },
   async function(req, username, password, done) {
     try{
     var result = await db.Users.findOne({
      where:{
        username: req.body.username,
        password: password
      }
    })
    if(!result){
      console.log("Incorrect username");
         return done(null, false, { message: 'Incorrect username.' });
    }
    if (!password) {
         return done(null, false, { message: 'Incorrect password.' });
       }

       return done(null, result, console.log(result.username));

     }
     catch(err){
       console.error(err);
     }
    }
  ));
}
