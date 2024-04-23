const { Sequelize } = require('sequelize');


const connection = new Sequelize( process.env.DB_NAME , process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST, // Dirección del servidor de la base de datos
  dialect: 'mysql', // Especificamos que usaremos MySQL como el sistema de gestión de base de datos
  port: process.env.DB_PORT,       // Puerto por el que se conecta al servidor MySQL, 3306 es el predeterminado para MySQL
  logging: false    // Desactivamos el logging para no mostrar los detalles de las consultas SQL en la consola
});

const checkDb = async () => {
  try {
    await connection.authenticate()
    console.log('Connection to DB succesfull')
  } catch (error) {
    console.log(error)
  }
}

const syncModels = async () => {
  try {
    await connection.sync()
    console.log('Models added')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  checkDb,
  connection,
  syncModels
}
