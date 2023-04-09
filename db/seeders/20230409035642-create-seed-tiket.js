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
    await queryInterface.bulkInsert('tikets', [
      {
        nomor_seating: 1,
        seminar_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomor_seating: 2,
        seminar_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomor_seating: 3,
        seminar_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomor_seating: 4,
        seminar_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomor_seating: 5,
        seminar_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomor_seating: 1,
        seminar_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomor_seating: 2,
        seminar_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomor_seating: 3,
        seminar_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomor_seating: 4,
        seminar_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomor_seating: 5,
        seminar_id: 2,
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
