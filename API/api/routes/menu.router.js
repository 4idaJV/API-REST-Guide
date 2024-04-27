const router = require('express').Router()
const {createSavedRecipe} = require('../controllers/menu.controllers');

router.post('/',createSavedRecipe);

  
  module.exports = router;



