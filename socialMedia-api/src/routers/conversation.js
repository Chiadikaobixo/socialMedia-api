const router = require('express').Router()
const conversationControllers = require('../controllers/conversationControllers')


router.post('/conversations', conversationControllers.conversation)

router.get('/conversations/:userId', conversationControllers.getConveration)

router.get('/find/:firstUserId/:secondUserId', conversationControllers.getTwoUserIdConversation)

module.exports = router