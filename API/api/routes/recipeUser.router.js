const router = require('express').Router()
const{createRecipeUser,getAllRecipeUser,AllRecipeUser} = require('../controllers/recipeUser.controller.js')

router.post('/',createRecipeUser);
router.get('/:id',getAllRecipeUser);
router.get('/',AllRecipeUser);

module.exports = router