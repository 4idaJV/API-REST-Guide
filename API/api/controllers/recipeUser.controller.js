const RecipeUser = require('../models/recipeUser.model.js')
const User = require('../models/user.model.js')


async function createRecipeUser(req, res) {
    try {

      const recipe = await RecipeUser.create(
        {
        title: req.body.title,
        description: req.body.description,
        instructions: req.body.instructions,
        cookingTime: req.body.cookingTime,
        servingSize: req.body.servingSize,
        preparationTime: req.body.preparationTime,
        menuSetTime: req.body.menuSetTime,
        img_url: req.body.img_url,
        userId: req.body.userId
      })
      return res.status(200).json({ message: 'Recipe created', recipe: recipe })
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  async function getAllRecipeUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id, {
        include:[{
          model: RecipeUser,
        }]
      })

      if (user) {
        return res.status(200).json(user)
      } else {
        return res.status(404).send('No se encontraron recetas')
      }
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  module.exports = {createRecipeUser,getAllRecipeUser}