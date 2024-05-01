const router = require('express').Router()
const {EnlazarIngredientes} = require('../controllers/Recipe_Ingredient.controllers.js')


router.post('/',EnlazarIngredientes)

module.exports = router