const Recipe_ingridient = require('../models/recipe-ingridient.model')


async function EnlazarIngredientes(req, res) {
    const { ingredientId, recipeId } = req.body;
    try {
      const ingridient = await Recipe_ingridient.create(
        { ingredientId,recipeId}
    );
      return res.status(201).json(ingridient); // Devuelve la receta guardada
    } catch (error) {
      console.error('Error al guardar el ingrediente:', error);
      return res.status(500).json({ message: 'Error al enlazar ingrediente a receta '});
    }
  };

 
 
module.exports = {EnlazarIngredientes}