const Menu = require('../models/menu.model')


async function createSavedRecipe(req, res) {
  
    try {
      console.log('req')
      const menu = await Menu.create(
        {
          userId:req.body.userId,
          recipeId:req.body.userId
      }
    );
      return res.status(201).json(menu); // Devuelve la receta guardada
    } catch (error) {
      console.error('Error al guardar la receta:', error);
      return res.status(500).json({ message: 'Error al guardar la receta' });
    }
  };


 
 
module.exports = {createSavedRecipe}