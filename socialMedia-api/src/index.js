require('./db/mongoose')
const app = require('./app')
const userRouter = require('./routers/users')
const authRouter = require('./routers/auth')
const postRouter = require('./routers/post')
const logoutRouter = require('./routers/logout')
const avatarRouter = require('./avatar/avatar')
const messageRouter = require('./routers/messages')
const conversationRouter = require('./routers/conversation')




app.use(userRouter)
app.use(authRouter)
app.use(postRouter)
app.use(avatarRouter)
app.use(logoutRouter)
app.use(messageRouter)
app.use(conversationRouter)

app.listen(8080, () => {
    console.log('backend server is running')
})