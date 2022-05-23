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
        const user = await userServices.getUser(req.query.userId, req.query.username)
        res.status(200).send(response('fetched user', user))
    }

    async getFriends(req, res){
        const friends = await userServices.getFriends(req.params.userId)
        res.status(200).send(response('friendList', friends))
    }

    async followUser(req, res){
        const follower = await userServices.followUser(req.params.userId, req.body)
        res.status(200).send(response('followed User', follower))
    }

    async unFollowUser(req, res){
        const unFollower = await userServices.unFollowUser(req.params.userId, req.body)
        res.status(200).send(response('unfollowed User', unFollower))
    }
}

module.exports = new UserControllers()