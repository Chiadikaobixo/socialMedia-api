const router = require('express').Router()
const postControllers = require('../controllers/postControllers')

router.post('/posts', postControllers.createUser)

router.put('/posts/:postId', postControllers.updatePost)

router.delete('/posts/:postId', postControllers.deletePost)

router.put('/posts/:postId/like', postControllers.likePost)

router.get('/posts/:postId', postControllers.getPost)

router.get('/posts/timeline/:userId', postControllers.timelinePost)

router.get('/profile/:username', postControllers.getProfile)

module.exports = router