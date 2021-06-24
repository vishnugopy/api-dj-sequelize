'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DjMusicalgenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Dj, {foreignKey:"dj_id"});
      this.belongsTo(models.Musicalgenre, {foreignKey:"musicalgenre_id"});
    }
  };
  DjMusicalgenre.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
    },
    dj_id: {
      allowNull:false,
      type: DataTypes.UUID,
    },
    musicalgenre_id: {
      allowNull:false,
      type: DataTypes.UUID,
    },
  }, {
    sequelize,
    modelName: 'DjMusicalgenre',
  });
  return DjMusicalgenre;
};