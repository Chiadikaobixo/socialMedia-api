const authServices = require('../services/authServices')
const response = require('../utils/response')

class AuthControllers {
    async signup(req, res){
        const savedUser = await authServices.signup(req.body)
        res.status(201).send(response('user created', savedUser))
    }
}

module.exports = new AuthControllers()