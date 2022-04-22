const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, () => {
    console.log('connected to database')
})