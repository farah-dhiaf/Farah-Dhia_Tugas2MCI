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
    await queryInterface.bulkInsert('seminars', [
      {
        nama: 'Bincang Teknologi : Part 1',
        pemateri: 'Alamsyah Hanza',
        kapasitas: 100,
        tgl: new Date('2022-10-22'),
        waktu: new Date('2022-10-22 10:00:00'),
        tempat: 'Gedung Riset Center ITS',
        harga: 100000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Bincang Teknologi : Part 2',
        pemateri: 'Nabil Badjri',
        kapasitas: 100,
        tgl: new Date('2022-10-22'),
        waktu: new Date('2022-10-22 12:00:00'),
        tempat: 'Gedung Riset Center ITS',
        harga: 100000.00,
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