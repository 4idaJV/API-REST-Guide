const router = require('express').Router()
const { getAllIngredients,createIngredient,updateIngredient,deleteIngredient} = require('../controllers/ingredient.controller.js')



router.get('/', getAllIngredients)
router.post('/',createIngredient)
router.put('/:id',updateIngredient)
router.delete('/:id',deleteIngredient)

module.exports = router