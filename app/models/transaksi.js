'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.seminar, {
        through: models.detail_transaksi,
        foreignKey: 'transaksi_id'
      });

      this.belongsTo(models.peserta, {
        foreignKey: 'peserta_id',
      });
    }
  }
  transaksi.init({
    tgl: DataTypes.DATE,
    metode_bayar: DataTypes.ENUM('Transfer', 'Cash'),
    status_pembayaran: DataTypes.ENUM('Belum Bayar', 'Sudah Bayar'),
    peserta_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transaksi',
  });
  return transaksi;
};