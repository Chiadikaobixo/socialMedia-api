const router = require('express').Router()
const messageControllers = require('../controllers/messageControllers')


router.post('/messages', messageControllers.message)

router.get('/:conversationId', messageControllers.getmessage)

module.exports = router