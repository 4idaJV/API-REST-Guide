const {DataTypes} = require('sequelize');
const { connection } = require('../../database/index');



const Recipe_ingridient = connection.define('RecipeIngredient', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }
    },
      {
        timestamps: false, 
}    
)

module.exports = Recipe_ingridient;