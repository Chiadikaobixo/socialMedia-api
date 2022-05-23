const express = require('express')
const app = express()
const helmet = require('helmet')
const morgan = require('morgan')
const path = require("path");


app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use("/assets", express.static(path.join(__dirname, "../public/assets")));


module.exports = app