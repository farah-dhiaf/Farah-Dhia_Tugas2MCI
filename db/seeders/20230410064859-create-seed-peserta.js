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
    await queryInterface.bulkInsert('peserta', [
      {
        nama: 'Lee Heeseung',
        jenis_kelamin: true,
        email: 'leeheeseung@gmail.com',
        notelp: '087870090000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Yoo Karina',
        jenis_kelamin: false,
        email: 'yookarina@gmail.com',
        notelp: '087870090001',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Park Jay',
        jenis_kelamin: true,
        email: 'parkjay@gmail.com',
        notelp: '087870090002',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Ning Yizhuo',
        jenis_kelamin: false,
        email: 'ningyizhuo@gmail.com',
        notelp: '087870090003',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Park Sunghoon',
        jenis_kelamin: true,
        email: 'parksunghoon@gmail.com',
        notelp: '087870090004',
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
