const router = require('express').Router()
const authControllers = require('../controllers/authControllers')

router.post('/users/signup', authControllers.signup)
    
module.exports = router