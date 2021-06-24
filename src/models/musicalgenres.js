"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Musicalgenres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Dj, {
        through: "DjMusicalgenres",
        foreignKey: "musicalgenre_id",
        as: "djs",
      });
    }
  }
  Musicalgenres.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue:DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Musicalgenres",
    }
  );
  return Musicalgenres;
};
