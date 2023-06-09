'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('detail_transaksis', [
      {
        seminar_id: 1,
        transaksi_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        seminar_id: 2,
        transaksi_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        seminar_id: 1,
        transaksi_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        seminar_id: 2,
        transaksi_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
