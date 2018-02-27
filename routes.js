var express = require('express');
var router = express.Router();
var article = require("./controllers/articles");
var user = require("./controllers/users");

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
}

module.exports = (passport) => {
  router.post('/register', passport.authenticate('register', { successRedirect: '/login',
                                     failureRedirect: '/register',
                                     failureFlash: true }));

router.post('/login',passport.authenticate('login', { successRedirect: '/',
                                     failureRedirect: '/login',
                                     failureFlash: true }));


router.get("/", isAuthenticated , user.select_for_us);

router.get("/create", isAuthenticated, (req,res) => {
  res.render("create");
})

router.post("/create", isAuthenticated, article.create);

router.get('/login', (req, res) => {
  res.render("login");
})

router.get('/register', (req, res) => {
  res.render("register");
})

  return router;
}
