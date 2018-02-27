'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      queryInterface.renameColumn('Users', 'first_name', 'username');
      queryInterface.removeColumn('Users', 'last_name', Sequelize.STRING);
      queryInterface.addColumn('Users', 'password', Sequelize.STRING);
      queryInterface.removeColumn('Users', 'bio', Sequelize.TEXT);
      queryInterface.addColumn('Users', 'img', Sequelize.STRING)

  },

  down: (queryInterface, Sequelize) => {
  queryInterface.renameColumn('Users', 'username', 'first_name');
  queryInterface.addColumn('Users', 'last_name', Sequelize.STRING);
  queryInterface.removeColumn('Users', 'password', Sequelize.STRING);
  queryInterface.addColumn('Users', 'bio', Sequelize.TEXT);
  queryInterface.removeColumn('Users', 'img', Sequelize.STRING)
  }
};
