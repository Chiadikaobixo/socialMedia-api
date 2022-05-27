const messageServices = require('../services/messageServices')
const response = require('../utils/response')


class MessageControllers {
    async message(req, res){
        const newMessage = await messageServices.createMessage(req.body)
        res.status(201).send(response('created Message', newMessage))
    }

    async getmessage(req, res){
        const message= await messageServices.getMessage(req.params.conversationId)
        res.status(200).send(response('fetched Conversation', message))
    }
}

module.exports = new MessageControllers()