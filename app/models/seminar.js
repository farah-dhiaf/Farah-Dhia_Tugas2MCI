'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seminar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.transaksi, {
        through: models.detail_transaksi,
        foreignKey: 'transaksi_id'
      });

      this.hasMany(models.tiket, {
        foreignKey: 'seminar_id',
      });
    }
  }
  seminar.init({
    nama: DataTypes.STRING,
    pemateri: DataTypes.STRING,
    kapasitas: DataTypes.INTEGER,
    tgl: DataTypes.DATE,
    tempat: DataTypes.STRING,
    waktu: DataTypes.DATE,
    harga: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'seminar',
  });
  return seminar;
};