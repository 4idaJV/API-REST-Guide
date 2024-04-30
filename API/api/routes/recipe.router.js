const router = require('express').Router()
const{ getAllRecipe,getOneRecipe,createRecipe,deleteRecipe,getAllRecetas} = require('../controllers/recipe.controller.js')

router.get('/',getAllRecipe);
router.post('/',createRecipe);
router.delete('/:id',deleteRecipe);

router.get('/:id',getAllRecetas)

module.exports = router