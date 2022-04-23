const router = require('express').Router()
const userControllers = require('../controllers/userControllers')
const {verifyTokenAndAuthorization} = require('../middleware/verifyToken')


router.patch('/users/:userId', verifyTokenAndAuthorization, userControllers.updatedUser)

router.delete('/users/:userId', verifyTokenAndAuthorization, userControllers.deleteUser)

router.get('/:userId', verifyTokenAndAuthorization, userControllers.getUser)

module.exports = router