var db = require("../models");

module.exports.create = async (req, res) => {
  try{
    article = {
      Title: req.body.title,
      Text: req.body.text,
      user_id: req.user.id
    }
    var result = await db.Articles.create(article);
    res.redirect("/");
    await console.log(result)
    console.log(req.files.img);
  } catch (err){
    console.error(err);
  }
}
