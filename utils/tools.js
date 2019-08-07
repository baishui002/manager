const bcrypt = require('bcrypt')

// 加密
exports.encryption = password => {
    const saltRounds = 10
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            console.log('hash:', hash)
            return hash
        })
    })
}

//解密
exports.decrypt = password => {
    bcrypt.compare(password, user.password, (err, res) => {
        console.log(res)
        return true
    })
}

