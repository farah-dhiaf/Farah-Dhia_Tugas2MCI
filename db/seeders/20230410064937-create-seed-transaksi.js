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
    await queryInterface.bulkInsert('transaksis', [
      {
        tgl: new Date('2022-10-10'),
        metode_bayar: 'Transfer',
        status_pembayaran: 'Sudah bayar',
        peserta_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tgl: new Date('2022-10-11'),
        metode_bayar: 'Cash',
        status_pembayaran: 'Sudah bayar',
        peserta_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tgl: new Date('2022-10-12'),
        metode_bayar: 'Transfer',
        status_pembayaran: 'Sudah bayar',
        peserta_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tgl: new Date('2022-10-13'),
        metode_bayar: 'Transfer',
        status_pembayaran: 'Sudah bayar',
        peserta_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tgl: new Date('2022-10-14'),
        metode_bayar: 'Cash',
        status_pembayaran: 'Sudah bayar',
        peserta_id: 5,
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
