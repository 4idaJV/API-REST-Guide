const User = require('../api/models/user.model.js')
const Recipe = require('../api/models/recipe.model.js')



const initializeRelations = () => {
  try {

    console.log('Relations added to models')
  } catch (error) {
    console.log(error)
  }
}

module.exports = initializeRelations
