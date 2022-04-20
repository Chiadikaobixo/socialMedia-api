const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')

dotenv.config()

const port = 8080
app.listen(port, () => {
    console.log('app is running on port ' + port)
})