const express = require('express')
const bodyParser = require('body-parser')
const expressJwt = require('express-jwt')

const userRouter = require('./routers/api/users')
const fundRouter = require('./routers/api/funds')
const config = require('./config/config')

const app = express()

/* 
验证token的3种方式：
1）
passport //token解析主插件
passport-jwt // 密钥解析规则插件， 有密钥解析
===每个接口上验证
2）
express-jwt
===可定义中间件，统一处理，但需再定义一个中间件处理UnauthorizedError检验失败返回401
3）
jwt-simple
使用简单，但需自己加上时间戳和校验时间
*/

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 验证接口请求的token的中间件
app.use(expressJwt({
    secret: config.secret
}).unless({
    path: ['/api/user/login', 'api/user/register']
}))


app.use('/api/user', userRouter);
app.use('/api/fund', fundRouter);

// 配置一个处理 404 的中间件
app.use((req, res) => {
    res.status(404).json({
        code: 404,
        msg: 'Not Found'
    })
})

// 配置一个全局错误处理中间件
app.use((err, req, res, next) => {
    // 处理token检验失败
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({
            msg: 'token校验错误'
        })
    }
    console.log('err:', err)
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(500).json({
        code: 500,
        msg: 'server err'
    })
})

app.listen(8000, () => {
    console.log('server start.....')
})