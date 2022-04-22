const userRouter = require('./routers/users')
const authRouter = require('./routers/auth')
require('./db/mongoose')
const app = require('./app')


app.use(userRouter)
app.use(authRouter)

app.listen(8080, () => {
    console.log('backend server is running')
})