const {DataTypes} = require('sequelize');
const { connection } = require('../../database/index');


const Menu = connection.define('menu', {

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

module.exports = Menu;