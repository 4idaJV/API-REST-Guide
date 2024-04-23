const router = require('express').Router()
const{ getAllRecipe,getOneRecipe,createRecipe,deleteRecipe} = require('../controllers/recipe.controller.js')

router.get('/',getAllRecipe);
router.get('/:id',getOneRecipe);
router.post('/',createRecipe);
router.delete('/',deleteRecipe);

module.exports = router