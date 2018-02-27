var db = require("../models");


module.exports.select_for_us = async (req, res) => {
  try{
  var result = await db.Users.findAll({
    include: [{
      model: db.Articles,
      where: {
        user_id: req.user.id
      }
    }]
  });
  await res.send(result);
} catch(err){
  console.error(err);
}
}
