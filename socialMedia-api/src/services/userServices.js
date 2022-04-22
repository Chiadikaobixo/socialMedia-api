const User = require('../models/User')
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
}

module.exports = new UserServices()