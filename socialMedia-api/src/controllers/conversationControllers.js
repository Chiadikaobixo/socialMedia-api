const conversationServices = require('../services/conversationServices')
const response = require('../utils/response')

class ConversationControllers {
    async conversation(req, res){
        const newConversation = await conversationServices.newConversation(req.body)
        res.status(201).send(response('conversation Created', newConversation))
    }

    async getConveration(req, res){
        const conversation = await conversationServices.getConversation(req.params.userId)
        res.status(200).send(response('fetched Conversation', conversation))
    }

    async getTwoUserIdConversation(req, res){
        const twoUserConversation = await 
        conversationServices.getTwoUserIdConversation(req.params.firstUserId, req.params.secondUserId)
        res.status(200).send(response('fetched', twoUserConversation))
    }
}

module.exports = new ConversationControllers()