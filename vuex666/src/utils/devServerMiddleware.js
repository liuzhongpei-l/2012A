const Mock = require('mockjs')
const bodyParser = require('body-parser')
const query = require('./query')
const mid = (mid, { app }) => {
    app.use(bodyParser.json())
    app.get('/api/shop/list', async (req, res) => {
        const { pageSize, pageNum } = req.query
        // select * from shopList limit 0,10
        let sql = `select * from shopList limit ${(pageNum - 1) * pageSize},${pageSize}`
        console.log(sql, 'sql');
        let result = await query(sql)
        res.send({
            code: 200,
            message: "success",
            data: result
        })
    })
    app.get('/api/detile/getData', async (req, res) => {
        const id = req.query.id
        let sql = `select * from shopList where id=${id}`
        let result = await query(sql)
        if (result.length > 0) {
            res.send({
                code: 200,
                message: "success",
                data: result[0]
            })
        } else {
            res.send({
                code: 500,
                message: "error",
                data: null
            })
        }
    })
    return mid
}
module.exports = mid