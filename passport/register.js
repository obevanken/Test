var db = require('../models');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
  passport.use('register', new LocalStrategy({
      passReqToCallback: true
    },
  async function(req, username, password, done) {
     console.log("Зашел");
          try{
            var result = await db.Users.findOne({
              where: {
                username: req.body.username
              }
            });
           if(result){
              console.log("User already exists");
               return done(null, false, { message: 'Incorrect username.' })
            }else{
              console.log("иначе");
              newUs = {
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
                last_name:req.body.last_name,
              }
              var okes = await db.Users.create(newUs);
               return done(null, okes, console.log(newUs));
            }
          }
        catch(err){
          console.error(err);
        }
      }))
    }
