const postServices = require('../services/postServices')
const response = require('../utils/response')

class PostControllers {
    async createUser(req, res){
        const createdUser = await postServices.createPost(req.body)
        res.status(201).send(response('Post Created', createdUser))
    }

    async updatePost(req, res){
        const updatedPost = await postServices.updatePost(req.params.postId, req.body)
        res.status(200).send(response('Post Updated', updatedPost))
    }

    async deletePost(req, res){
        const deletedpost = await postServices.deletePost(req.params.postId, req.body)
        res.status(200).send(response('post has been deleted', deletedpost))
    }

    async likePost(req, res){
        const likedPost = await postServices.likeAndUnlikePost(req.params.postId, req.body)
        res.status(200).send(response('post has been liked', likedPost))
    }
}

module.exports = new PostControllers()