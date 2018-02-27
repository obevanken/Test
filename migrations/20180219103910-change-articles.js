'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Articles', 'user_id', {
      allowNull: true,
      foreignKey: true,
      type: Sequelize.INTEGER
    });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Articles', 'user_id');
  }
};
