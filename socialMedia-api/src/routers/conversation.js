const router = require('express').Router()
const conversationControllers = require('../controllers/conversationControllers')


router.post('/conversations', conversationControllers.conversation)

router.get('/conversations/:userId', conversationControllers.getConveration)

module.exports = router