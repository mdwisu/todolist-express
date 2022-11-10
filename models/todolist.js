'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todolist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User);
      this.belongsTo(models.Category);
    }
  }
  Todolist.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM('To Do', 'Doing', 'Done'),
        validate: {
          isIn: {
            args: [['To Do', 'Doing', 'Done']],
            msg: 'status harus (To DO / Doing / Done)',
          },
        },
      },
      userId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Todolist',
    }
  );
  return Todolist;
};
