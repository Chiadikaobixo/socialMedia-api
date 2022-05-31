const Post = require('../models/Post')
const User = require('../models/User')
const CustomError = require('../utils/customError')

class PostServices {
    async createPost(data) {
        if (!data.desc) throw new CustomError('description is required')
        let usercode = await User.findOne({ _id: data.userId })
        if (!usercode) throw new CustomError('you are not authorized to do this')

        const newPost = new Post(data)

        const savedPost = await newPost.save()
        return savedPost
    }

    async updatePost(postId, data) {
        const updatePost = await Post.findById({ _id: postId })
        const dataId = await Post.findOne({userId: data.userId})
        if(!updatePost || !dataId) throw new CustomError('You can update only your post')
       
        if(updatePost.userId === data.userId){
            await updatePost.updateOne({ $set: data}, {new: true})
        }

        return updatePost
    }

    async deletePost(postId, data) {
        const post = await Post.findById({ _id: postId})
        const dataId = await Post.findOne({userId: data.userId})
        if(!post || !dataId) throw new CustomError('You can only delete your post')
       
        if(post.userId === data.userId){
             post.deleteOne()
        }

        return post
    }

    async likeAndUnlikePost(postId, data){
        const post = await Post.findById({_id: postId})

        if(!post.likes.includes(data.userId)){
            await post.updateOne({ $push: { likes: data.userId }})
        }else{
            await post.updateOne({ $pull: { likes: data.userId}})
        }

        return post
    }

    async getPost(postId){
        const post = await Post.findById({_id: postId})

        if(!post) throw new CustomError('Post not available')

        return post
    }

    async timelinePost(userId){
        const currentUser = await User.findById({_id: userId})
        const userPost = await Post.find({ userId: currentUser._id })
        const friendsPost = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId })
            })
        )
        const timelinePost = userPost.concat(...friendsPost)

        return timelinePost
    }

    // get users all post
    async getProfile(username){
        const user = await User.findOne({username: username})
        if(!user) throw new CustomError('User profile does not exist')
        
        const post = await Post.find({userId: user._id})

        return post
    }
}

module.exports = new PostServices()