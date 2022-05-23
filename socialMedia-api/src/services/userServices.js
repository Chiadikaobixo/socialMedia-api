const User = require('../models/User')
const Post = require('../models/Post')
const CustomError = require('../utils/customError')
const CryptoJS = require('crypto-js')

class UserServices {
    async updateUser(userId, data) {
        if (data.password) {
            data.password = CryptoJS.AES.encrypt(data.password, process.env.SECRET_KEY).toString()
        }

        const updatedUser = await User.findByIdAndUpdate({ _id: userId },
            { $set: data },
            { new: true }
        )

        if (!updatedUser) throw new CustomError('User does not exist!', 404)

        return updatedUser
    }

    async deleteUser(userId) {
        const deletedUser = await User.findByIdAndDelete({ _id: userId })
        const deleteUserPost = await Post.deleteMany({ userId })
        if (!deletedUser) throw new CustomError('User does not exist', 404)

        return {deletedUser, deleteUserPost}
    }

    // fetch by query ?userId= or ?username=
    async getUser(userId, username) {
        const user = userId
            ? await User.findById(userId)
            : await User.findOne({ username })
        if (!user) throw new CustomError('User not found!', 404)

        return user
    }

    async getFriends(userId){
        const user = await User.findById(userId)
        const friends = await Promise.all(
            user.followings.map((friendId) => {
                return User.findById(friendId)
            })
        )
        let friendsList = []
        friends.map((friend) => {
            const {_id, username, profilePicture} = friend
            friendsList.push({_id, username, profilePicture})
        })
        
        return friendsList
    }

    async followUser(userId, data) {
        const user = await User.findById({ _id: userId })
        const currentUser = await User.findById(data.userId)

        if (userId === data.userId)
            throw new CustomError('You cannot follow yourself', 403)

        if (!user.followers.includes(data.userId)) {
            await user.updateOne({ $push: { followers: data.userId } })
            await currentUser.updateOne({ $push: { followings: userId } })
        } else {
            throw new CustomError('You are already following this user', 403)
        }

        return user
    }

    async unFollowUser(userId, data) {
        const user = await User.findById({ _id: userId })
        const currentUser = await User.findById(data.userId)

        if (userId === data.userId)
            throw new CustomError('You cannot unfollow yourself', 403)

        if (user.followers.includes(data.userId)) {
            await user.updateOne({ $pull: { followers: data.userId } })
            await currentUser.updateOne({ $pull: { followings: userId } })
        } else {
            throw new CustomError('You are already unfollowed this user', 403)
        }

        return user
    }

}

module.exports = new UserServices()