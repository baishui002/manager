const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./routers/api/users')
const fundRouter = require('./routers/api/funds')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



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
    console.log('err:', err)
    res.status(500).json({
        code: 500,
        msg: 'server err'
    })
})

app.listen(8000, () => {
    console.log('server start.....')
})