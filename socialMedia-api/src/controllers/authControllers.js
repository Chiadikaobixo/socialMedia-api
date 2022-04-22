const authServices = require('../services/authServices')
const response = require('../utils/response')

class AuthControllers {
    async signUp(req, res){
        const savedUser = await authServices.signUp(req.body)
        res.status(201).send(response('user created', savedUser))
    }

    async loginUser(req, res){
        const loggedInUser = await authServices.loginUser(req.body)
        res.status(200).send(response('logged in User', loggedInUser))
    }
}

module.exports = new AuthControllers()