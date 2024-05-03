const router = require('express').Router()
const{createRecipeUser,getAllRecipeUser,AllRecipeUser,getOneRecipeUser} = require('../controllers/recipeUser.controller.js')

router.post('/',createRecipeUser);
router.get('/:id',getAllRecipeUser);
router.get('/',AllRecipeUser);
router.get('/a/:id',getOneRecipeUser)

module.exports = router