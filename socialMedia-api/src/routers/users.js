const router = require('express').Router()
const userControllers = require('../controllers/userControllers')
const { verifyTokenAndAuthorization } = require('../middleware/verifyToken')


router.patch('/users/:userId', verifyTokenAndAuthorization, userControllers.updatedUser)

router.delete('/users/:userId', verifyTokenAndAuthorization, userControllers.deleteUser)

router.get('/', verifyTokenAndAuthorization, userControllers.getUser)

router.get('/friends/:userId', verifyTokenAndAuthorization, userControllers.getFriends)

router.put('/users/:userId/follow', verifyTokenAndAuthorization, userControllers.followUser)

router.put('/users/:userId/unfollow', verifyTokenAndAuthorization, userControllers.unFollowUser)

module.exports = router