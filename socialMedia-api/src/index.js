const userRouter = require('./routers/users')
const authRouter = require('./routers/auth')
const postRouter = require('./routers/post')
const logoutRouter = require('./routers/logout')
require('./db/mongoose')
const app = require('./app')


app.use(userRouter)
app.use(authRouter)
app.use(postRouter)
app.use(logoutRouter)

app.listen(8080, () => {
    console.log('backend server is running')
})