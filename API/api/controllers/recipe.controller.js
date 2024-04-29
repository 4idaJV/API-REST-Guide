const Recipe = require('../models/recipe.model.js')
const Ingredient = require('../models/ingredient.model.js')

async function getAllRecipe(req, res) {
    try {
      const recipe = await Recipe.findAll({ 
        paranoid: false,
        include:[{
          model: Ingredient,
        }]
       })
      if (recipe) {
        return res.status(200).json(recipe)
      } else {
        return res.status(404).send('No recipe found')
      }
    } catch (error) {
      res.status(500).send(error.message)
    }
}
  
  async function getOneRecipe(req, res) {
    try {
      const recipe = await Recipe.findByPk(req.params.id)
      if (recipe) {
        return res.status(200).json(recipe)
      } else {
        return res.status(404).send('Recipe not found')
      }
    } catch (error) {
      res.status(500).send(error.message)
    }
  }
  
  async function createRecipe(req, res) {
    try {

      const recipe = await Recipe.create(
        {
        title: req.body.title,
        description: req.body.description,
        instructions: req.body.instructions,
        cookingTime: req.body.cookingTime,
        servingSize: req.body.servingSize,
        preparationTime: req.body.preparationTime,
        menuSetTime: req.body.menuSetTime,
        img_url: req.body.img_url,
        alergenos: req.body.alergenos,
        regimen: req.body.regimen
      })
      return res.status(200).json({ message: 'Recipe created', recipe: recipe })
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  
  /*
  async function updateRecipe(req, res) {
    try {
      const [userExist, user] = await Recipe.update(req.body, {
        returning: true,
        where: {
          id: req.params.id,
        },
      })
      if (userExist !== 0) {
        return res.status(200).json({ message: 'User updated', user: user })
      } else {
        return res.status(404).send('User not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }
  */
  async function deleteRecipe(req, res) {
    try {
      const recipe = await Recipe.destroy({
        where: {
          id: req.params.id,
        },
      })
      if (user) {
        return res.status(200).json('User deleted')
      } else {
        return res.status(404).send('User not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  module.exports = {
    getAllRecipe,
    getOneRecipe,
    createRecipe,
    deleteRecipe,
  }