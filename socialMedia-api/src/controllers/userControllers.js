const userServices = require('../services/userServices')
const response = require('../utils/response')

class UserControllers {
     async updatedUser(req, res){
        const updatedUser = await userServices.updateUser(req.params.userId, req.body)
        res.status(201).send(response('user updated', updatedUser))
     }

     async deleteUser(req, res){
        const deletedUser = await userServices.deleteUser(req.params.userId)
        res.status(200).send(response('user deleted', deletedUser))
    }

    async getUser(req, res){
        const user = await userServices.getUser(req.params.userId)
        res.status(200).send(response('fetched user', user))
    }
}

module.exports = new UserControllers()