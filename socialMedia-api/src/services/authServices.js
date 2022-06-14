const User = require('../models/User')
const CustomError = require('../utils/customError')
const CryptoJS = require('crypto-js')


class AuthServices {
    async signUp(data) {
            let user = await User.findOne({ username: data.username })
            let userEmail = await User.findOne({ email: data.email })
            if (user) throw new CustomError('username or email already exist!')
            if (userEmail) throw new CustomError('username or email already exist!')
            
            const newUser = new User(data)

            //Generate token
            const token = await newUser.generateAuthToken()

            const savedUser = await newUser.save()

            return { savedUser, token }
    }

    async loginUser(data) {
        if (!data.email) throw new CustomError("email is required!");
        if (!data.password) throw new CustomError("Password is required!");

        // check if user exist
        const login = await User.findOne({ email: data.email })
        if (!login) throw new CustomError('Incorrect username or password!')

        // Check if password is correct
        const hashedPassword = CryptoJS.AES.decrypt(login.password, process.env.SECRET_KEY)
        const initialPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
        if (initialPassword !== data.password) throw new CustomError('Incorrect username or password!')

        // Generate token
        const token = await login.generateAuthToken()

        return { login, token }
    }
}

module.exports = new AuthServices()