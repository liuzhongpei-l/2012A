const Mock = require('mockjs');
const bodyParser = require('body-parser');
const query = require('./query')
const { signToken, verifyToken } = require('./devTools')
const mid = function (mid, { app }) {
    app.use(bodyParser.json())
    app.post('/api/user/login', async (req, res) => {
        let sql = `select * from user where username='${req.body.username}' and password='${req.body.password}'`
        console.log(sql, 'sql111111');
        let result = await query(sql)
        console.log(result, 'res8888888');
        if (result.length > 0) {
            let token = await signToken(result[0])
            res.send({
                code: 200,
                message: "登陆成功",
                data: "Bearer " + token
            })
        } else {
            res.send({
                code: 403,
                message: "账号或密码错误",
                data: null
            })
        }
    })
    return mid
}
module.exports = mid