const Ingredient = require('../models/ingredient.model')

async function getAllIngredients(req, res) {
  try {
    const ingredients = await Ingredient.findAll({ paranoid: false })
    if (ingredients) {
      return res.status(200).json(ingredients)
    } else {
      return res.status(404).send('No ingredients found')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getOneIngredient(req, res) {
  try {
    const ingredient = await Ingredient.findByPk(req.params.id)
    if (ingredient) {
      return res.status(200).json(ingredient)
    } else {
      return res.status(404).send('Ingredient not found')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function createIngredient(req, res) {
  try {
    const ingredient = await Ingredient.create({
      name: req.body.name,
    })
    return res.status(200).json({ message: 'Ingredient created', ingredient: ingredient })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function updateIngredient(req, res) {
  try {
    const [ingredientExist, ingredient] = await Ingredient.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    })
    if (ingredientExist !== 0) {
      return res.status(200).json({ message: 'Ingredient updated', ingredient: ingredient })
    } else {
      return res.status(404).send('Ingredient not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteIngredient(req, res) {
  try {
    const ingredient = await Ingredient.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (ingredient) {
      return res.status(200).json('Ingredient deleted')
    } else {
      return res.status(404).send('Ingredient not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllIngredients,
  getOneIngredient,
  createIngredient,
  updateIngredient,
  deleteIngredient,
}