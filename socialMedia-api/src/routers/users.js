const router = require('express').Router()
const userControllers = require('../controllers/userControllers')
const {verifyTokenAndAuthorization} = require('../middleware/verifyToken')


router.patch('/users/:userId', verifyTokenAndAuthorization, userControllers.updatedUser)

module.exports = router