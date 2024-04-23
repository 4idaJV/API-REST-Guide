const { DataTypes } = require('sequelize');
const { connection } = require('../../database/index');


const Ingredient = connection.define('ingredient', {
 
  name: {
    type: DataTypes.STRING
  },
},
  {
    timestamps: false 
  });
module.exports = Ingredient;
