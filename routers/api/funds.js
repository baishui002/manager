const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Fund = require('../../models/fund')
const router = express.Router()

const key = 'jack'

// test 
router.get('/test', (req, res) => {
    console.log(123)
    res.json({ msg: 'ok' })
})

// 查詢
router.get('/all', async (req, res, next) => {
    let page = parseInt(req.query.page ) || 1
    let size = parseInt(req.query.size) || 5
    try {
        let allFund
        Fund.find().count((err, count) => {
            if (err) {
                return next(err)
            }
            allFund = count
        })
        
        const result = await Fund.find().limit(size).skip((page - 1) * size).sort()
        res.json({
            code: 0,
            msg: 'ok',
            data: {
                count: allFund, 
                data: result
            }
        })
    } catch (error) {
        next(error)
    }
})

// 添加
router.post('/add', async (req, res, next) => {
    let body = req.body
    try {
        const newFund = await new Fund({
            type: req.body.type,
            describe: req.body.describe,
            incode: req.body.incode,
            expend: req.body.expend,
            cash: req.body.cash,
            remark: req.body.remark,
        }).save()

        if (newFund) {
            res.json({
                code: 0,
                msg: 'ok'
            })
        } else {
            res.json({
                code: 1,
                msg: 'err'
            })
        }
    } catch (error) {
        next(error)
    }
})

// 修改
router.post('/edit/:id', async (req, res, next) => {
    let { id } = req.params
    let obj = {
        type: req.body.type,
        describe: req.body.describe,
        incode: req.body.incode,
        expend: req.body.expend,
        cash: req.body.cash,
        remark: req.body.remark,
    }
    try {
        const fund = await Fund.findOneAndUpdate({ _id: id }, { $set: obj }, { new: true })
        if (fund) {
            res.json({
                code: 0,
                msg: 'ok'
            })
        } else {
            res.json({
                code: 1,
                msg: 'err'
            })
        }
    } catch (error) {
        next(error)
    }
})

// 删除
router.get('/del/:id', async (req, res, next) => {
    let { id } = req.params
    try {
        // const fund = await Fund.findOneAndRemove({_id:id})
        // const fund = await Fund.findByIdAndDelete(id)
        const fund = await Fund.findByIdAndDelete(id)

        if (fund) {
            res.json({
                code: 0,
                msg: 'ok'
            })
        } else {
            res.json({
                code: 1,
                msg: 'err'
            })
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router