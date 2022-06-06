const router = require('express').Router()
const response = require('../utils/response')


router.post('/users/logout',  async(req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
         const loggedOutUser = await req.user.save()
        res.status(200).send(response('LoggedOut User', loggedOutUser))
    } catch (error) {
        res.status(500).send(error)
    }
})

// Log Out from all sessions
router.post('/users/logoutall', async(req, res) => {
    try {
        req.user.tokens = []
        const logOutAll = await req.user.save()
        res.status(200).send(response('LoggedOut All User', logOutAll))
    } catch (error) {
        
    }
})

module.exports = router