const User = require('../api/models/user.model.js')
const Recipe = require('../api/models/recipe.model.js')
const Ingredient = require('../api/models/ingredient.model.js')
const Menu = require('../api/models/menu.model.js')
const RecipeUser = require('../api/models/recipeUser.model.js')
const Recipe_ingridient = require('../api/models/recipe-ingridient.model.js')
 
const initializeRelations = () => {
  try {
    User.hasMany(RecipeUser)
    RecipeUser.belongsTo(User)

    User.belongsToMany(Recipe,{ through: Menu });
    Recipe.belongsToMany(User,{ through: Menu });

    Recipe.belongsToMany(Ingredient,{ through: Recipe_ingridient })
    Ingredient.belongsToMany(Recipe,{ through: Recipe_ingridient })

    //here the relations
console.log('Relations added to models')
  } catch (error) {
    console.log(error)
  }
}

module.exports = initializeRelations
