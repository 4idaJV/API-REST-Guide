const Menu = require('../models/menu.model')


async function createSavedRecipe(req, res) {
  
    const { userId, recipeId } = req.body;
    try {
      const menu = await Menu.create(
        { userId,recipeId}
    );
      return res.status(201).json(menu); // Devuelve la receta guardada
    } catch (error) {
      console.error('Error al guardar la receta:', error);
      return res.status(500).json({ message: 'Error al guardar la receta' });
    }
  };


 
 
module.exports = {createSavedRecipe}