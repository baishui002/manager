const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../../models/user')
const router = express.Router()

const key = 'jack'

// test 
router.get('/test', (req, res) => {
    console.log(123)
    res.json({msg: 'ok'})
})


// register
router.post('/register', async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) return res.json({code: 1, msg: 'email has already exitst'})

        const newUser =  new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            identity: req.body.identity
        })

        // 加密
        const saltRounds = 10
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(newUser.password, salt, async (err, hash) => {
                if (err) {
                    next(err)
                }
                newUser.password = hash
                const user = await newUser.save()
                if (user) res.json({code: 0, msg: 'success', user: newUser})
            })
        })
   
    } catch (error) {
        next(error)
    }
})

// login
router.post('/login', async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.json({
                code: 1,
                msg: 'The user not exitst!'
            })
            
        } else {
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    const playload = {
                        id: user.id,
                        name: user.name,
                        avatar: user.avatar,
                        identity: user.identity
                    }
                    const token = jwt.sign(playload, key, {expiresIn: 60*60 })
                    console.log('token:', token)
                    res.json({
                        code: 0,
                        msg: 'success',
                        token: 'auth ' + token
                    })
                    
                } else {
                    res.json({
                        code: 1,
                        msg: 'password is wrong '
                    })
                }
            })
            
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router