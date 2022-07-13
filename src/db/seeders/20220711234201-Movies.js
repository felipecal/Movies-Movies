'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies',
      [{
        name: 'Minions 2',
        year: 2022
      },
      {
        name: 'Miranha Back to home',
        year: 2022
      },
      {
        name: 'Eternos',
        year: 2021
      }], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Movies', null, {});

  }
};
