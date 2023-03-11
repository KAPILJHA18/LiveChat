const express = require('express')
const router = express.Router()
const CreateUser = require('../models/user.modal')

router.get('/user/login', (req, res) => {
    res.send('hi')
})

router.post('/user/login', async (req, res) => {
    const createUser = new CreateUser({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const newUser = await createUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router