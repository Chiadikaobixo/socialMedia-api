const router = require('express').Router()
const userControllers = require('../controllers/userControllers')

router.patch('/users/:userId',  userControllers.updatedUser)

router.delete('/users/:userId', userControllers.deleteUser)

router.get('/', userControllers.getUser)

router.get('/allusers',  userControllers.getAllUser)

router.get('/friends/:userId',  userControllers.getFriends)

router.get('/followers/:userId',  userControllers.getFollowers)

router.put('/users/:userId/follow',  userControllers.followUser)

router.put('/users/:userId/unfollow',  userControllers.unFollowUser)

module.exports = router