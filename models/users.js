'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    email : {
      type :  DataTypes.STRING ,
      validate : {
        isEmail :  true
      }
    },
    img: DataTypes.STRING,
    password: DataTypes.STRING
  });

  Users.associate = (models) => {
    Users.hasMany(models.Articles, {foreignKey: "user_id"});
  }
  return Users;
};
