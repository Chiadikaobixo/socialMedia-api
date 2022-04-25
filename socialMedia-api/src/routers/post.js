const router = require('express').Router()
const postControllers = require('../controllers/postControllers')

router.post('/posts', postControllers.createUser)

router.put('/posts/:postId', postControllers.updatePost)

router.delete('/posts/:postId', postControllers.deletePost)

router.put('/post/:postId/like', postControllers.likePost)

module.exports = router