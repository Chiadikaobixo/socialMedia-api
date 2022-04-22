const router = require('express').Router()
const authControllers = require('../controllers/authControllers')

router.post('/users/signup', authControllers.signUp)

router.get('/users/login', authControllers.loginUser)
    
module.exports = router