'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up:(queryInterface, Sequelize) => queryInterface.changeColumn(
    'alunos',
    'email',
    {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    }
  ),

  down: () =>{}
};
