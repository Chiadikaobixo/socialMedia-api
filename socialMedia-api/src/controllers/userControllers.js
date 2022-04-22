const userServices = require('../services/userServices')
const response = require('../utils/response')

class UserControllers {
     async updatedUser(req, res){
        const updatedUser = await userServices.updateUser(req.params.userId, req.body)
        res.status(201).send(response('user updated', updatedUser))
     }
}

module.exports = new UserControllers()