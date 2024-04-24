const router = require('express').Router()
const { getAllIngredients,getOneIngredient,createIngredient,updateIngredient,deleteIngredient} = require('../controllers/ingredient.controller.js')
const { checkAuth, checkAdmin } = require('../middlewares/auth.js')


router.get('/', getAllIngredients)
router.get('/:id', getOneIngredient)
router.post('/',createIngredient)
router.put('/:id',updateIngredient)
router.delete('/:id',deleteIngredient)

module.exports = router