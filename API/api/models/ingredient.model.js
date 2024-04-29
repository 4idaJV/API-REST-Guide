const { DataTypes } = require('sequelize');
const { connection } = require('../../database/index');


const Ingredient = connection.define('ingredient', {
 
  name: {
    type: DataTypes.STRING,
    allowNull:false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull:false
  },
},
  {
    timestamps: false 
  });
module.exports = Ingredient;
