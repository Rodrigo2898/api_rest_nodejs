'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async(queryInterface) =>  queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'João',
          email: 'jao@gmail.com',
          password_hash: await bcrypt.hash('123456', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Maria',
          email: 'maria@gmail.com',
          password_hash: await bcrypt.hash('123578', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Let',
          email: 'let@gmail.com',
          password_hash: await bcrypt.hash('456788', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: () =>{},
};
