'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('seminars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      pemateri: {
        type: Sequelize.STRING
      },
      kapasitas: {
        type: Sequelize.INTEGER
      },
      tgl: {
        type: Sequelize.DATE
      },
      tempat: {
        type: Sequelize.STRING
      },
      waktu: {
        type: Sequelize.DATE
      },
      harga: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('seminars');
  }
};