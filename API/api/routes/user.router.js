const router = require('express').Router()
const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller.js')
const { checkAuth, checkAdmin } = require('../middlewares/auth.js')

// Añadimos nuestro middleware antes de que se ejecute nuestro controlador, si todo va bien podremos acceder a nuestro recurso, em caso contrario no nos dejará
router.get('/',getAllUsers)
router.get('/:id', getOneUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router
