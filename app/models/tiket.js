'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tiket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.seminar, {
        foreignKey: 'seminar_id',
      });
    }
  }
  tiket.init({
    nomor_seating: DataTypes.INTEGER,
    seminar_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tiket',
  });
  return tiket;
};