const Message = require('../models/Message')
const CustomError = require('../utils/customError')


class MessageServices {
    async createMessage(data) {
        const newMessage = await new Message(data)
        const savedMessage = await newMessage.save()

        return savedMessage
    }

    async getMessage(conversationId){
        const message = await Message.find({conversationId})
        if(!message) throw new CustomError('no conversation')

        return message
    }
}

module.exports = new MessageServices()