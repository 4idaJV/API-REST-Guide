const router = require('express').Router()
const{createRecipeUser,getAllRecipeUser} = require('../controllers/recipeUser.controller.js')

router.post('/',createRecipeUser);
router.get('/:id',getAllRecipeUser);

module.exports = router