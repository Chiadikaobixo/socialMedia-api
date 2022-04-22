const jwt = require('jsonwebtoken')
const User = require('../models/User')

const verifyToken = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error
        }

        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please Authenticate correctly' })
    }
}

const verifyTokenAndAuthorization = (req, res, next ) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.userId || req.user.isAdmin) {
            next()
        }else{
            res.status(403).send({error: 'You are not authorized'})
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin){
            next()
        }else{
            res.status(403).send({error: 'You are not authorized'})
        }
    })
}

module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
}