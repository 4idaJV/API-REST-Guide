const { DataTypes } = require('sequelize');

// Importamos el objeto connection desde una ruta relativa, que maneja la conexión con nuestra base de datos
const { connection } = require('../../database/index');

// Definimos un modelo 'User' usando el objeto connection que se refiere a la tabla 'user' en la base de datos
const RecipeUser = connection.define('recipeUser', {
  // Definimos una columna 'name' para almacenar el nombre del usuario
  title: {
    type: DataTypes.STRING, // Establece el tipo de dato como cadena de texto
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING // Establece el tipo de dato como cadena de texto
  },
  instructions: {
    type: DataTypes.TEXT // Establece el tipo de dato como cadena de texto
  },
  cookingTime: {
    type : DataTypes.INTEGER
  },
  servingSize: {
    type : DataTypes.INTEGER
  },
  preparationTime: {
    type : DataTypes.INTEGER
  },
  menuSetTime: {
    type : DataTypes.STRING,
    allowNull: false,
  },
  img_url: {
    type : DataTypes.STRING
  },
  alergenos: {
    type: DataTypes.STRING,
    validate: {
      isIn: [['lacteos', 'gluten', 'huevo','frutoSecos']]
    }  
  },
  regimen: {
    type: DataTypes.STRING,
    validate: {
      isIn: [['vegetariano', 'vegano', 'Omnivoro']]
    } 
  }, 
},
  {
    // Configuración adicional para el modelo
    timestamps: false // Desactiva la creación automática de las columnas 'createdAt' y 'updatedAt'
  });

// Exportamos el modelo 'User' para poder usarlo en otras partes de la aplicación
module.exports = RecipeUser;