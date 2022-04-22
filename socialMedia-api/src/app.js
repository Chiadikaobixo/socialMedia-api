const express = require('express')
const app = express()
const helmet = require('helmet')
const morgan = require('morgan')

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

module.exports = app