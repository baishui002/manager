const express = require('express')
const User = require('../../models/user')
const router = express.Router()


// register
router.post('/register', async (req, res, next) => {
    console.log('body:', req.body)
    try {
        const user = await User.findOne({ email: req.body.email })
        console.log('user:', user)
        if (user) return res.json({code: 1, msg: 'email has already exitst'})
        const newUser = await new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            identity: req.body.identity
        }).save()

        if (newUser) res.json({code: 0, msg: 'success', user: newUser})
        
    } catch (error) {
        next()
    }
})

// login
router.post('/login', async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    // console.log(1, email, password)
    try {
        const user = await User.findOne({ email })
        // console.log('result:', result)
        if (!user) {
            res.json({
                code: 1,
                msg: 'The user not exitst!'
            })
            return
        } else {
            if (user.password === password) {
                res.json({
                    code: 0,
                    msg: 'success'
                })
            } else {
                res.json({
                    code: 1,
                    msg: 'password is wrong '
                })
            }
        }
    } catch (error) {
        next()
    }
})

module.exports = router