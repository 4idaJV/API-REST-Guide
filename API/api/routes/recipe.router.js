const router = require('express').Router()
const{ getAllRecipe,getOneRecipe,createRecipe,deleteRecipe,getAllRecetas} = require('../controllers/recipe.controller.js')

router.get('/',getAllRecipe);
router.get('/a/:id',getOneRecipe);
router.get('/:id',getAllRecetas);


router.post('/',createRecipe);
router.delete('/:id',deleteRecipe);

module.exports = router