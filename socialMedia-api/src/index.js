const userRouter = require('./routers/users')
const authRouter = require('./routers/auth')
const postRouter = require('./routers/post')
const logoutRouter = require('./routers/logout')
require('./db/mongoose')
const app = require('./app')
const cors = require('cors')


app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})
app.use(cors())

app.use(userRouter)
app.use(authRouter)
app.use(postRouter)
app.use(logoutRouter)

app.listen(8080, () => {
    console.log('backend server is running')
})