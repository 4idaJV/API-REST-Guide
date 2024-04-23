const {DataTypes} = require('sequelize');
const { connection } = require('../../database/index');


const Menu = connection.define('menu', {

    menu_name: {
        type : DataTypes.STRING
    }

})

module.exports = Menu;