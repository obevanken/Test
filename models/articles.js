'use strict';
module.exports = (sequelize, DataTypes) => {
  var Articles = sequelize.define('Articles', {
    Title: DataTypes.STRING,
    Text: DataTypes.TEXT,
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true
    }
  });

  Articles.associate = (models) => {
    Articles.belongsTo(models.Users, {foreignKey: "user_id"});
  }
  return Articles;
};
