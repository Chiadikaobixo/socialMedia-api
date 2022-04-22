const User = require('../models/User')

class AuthServices {
    async signup(data){
        const user = new User({
            username: data.username,
            email: data.email,
            password: data.password
        })

        if (!user) throw new Error('Error occured')

        const savedUser = await user.save()

        return savedUser
    }
}

module.exports = new AuthServices()