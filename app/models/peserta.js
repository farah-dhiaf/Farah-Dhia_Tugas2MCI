'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peserta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.transaksi, {
        foreignKey: 'peserta_id',
      });
    }
  }
  peserta.init({
    nama: DataTypes.STRING,
    jenis_kelamin: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    notelp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'peserta',
  });
  return peserta;
};