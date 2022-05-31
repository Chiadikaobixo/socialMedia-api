const Conversation = require('../models/Conversation')
const CustomError = require('../utils/customError')


class ConversationServices {
    async newConversation(data) {
        const newConversation = await new Conversation({
            members: [data.senderId, data.receiverId]
        })

        if (!newConversation) throw new CustomError('please add a conversation')

        const savedConversation = await newConversation.save()

        return savedConversation
    }

    async getConversation(userId){
        const conversation = await Conversation.find({
            members: {$in: userId}
        })
        
        if (!conversation) throw new CustomError('no conversation for this user')

        return conversation
    }

    async getTwoUserIdConversation(firstUserId, secondUserId){
        const conversation = await Conversation.findOne({
            members: {$all: [firstUserId, secondUserId]}
        })

        return conversation
    }
}

module.exports = new ConversationServices()