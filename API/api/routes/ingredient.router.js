const router = require('express').Router()
const { getAllIngredients,getOneIngredient,createIngredient,updateIngredient,deleteIngredient} = require('../controllers/ingredient.controller.js')
const { checkAuth, checkAdmin } = require('../middlewares/auth.js')


router.get('/', getAllIngredients)
router.get('/:id', getOneIngredient)
router.post('/', /* checkAuth, checkAdmin, */ createIngredient)
router.put('/:id', /* checkAuth, checkAdmin, */ updateIngredient)
router.delete('/:id', /* checkAuth, checkAdmin, */ deleteIngredient)

module.exports = router