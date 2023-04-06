const Mock = require('mockjs')
const bodyParser = require('body-parser')
const { signToken, verifyToken } = require('./devtools')
const query = require('./query')
const midFun = (mid, { app }) => {
    app.use(bodyParser.json())
    app.post('/api/user/login', async (req, res) => {
        const { username, password } = req.body
        let sql = `select * from user where username='${username}' and password='${password}'`
        let result = await query(sql)
        if (result.length > 0) {
            let token = await signToken(result[0])
            res.send({
                code: 200,
                message: "登陆成功！",
                data: "Bearer " + token
            })
        } else {
            res.send({
                code: 403,
                message: "账号或密码错误，请检查！",
                data: null
            })
        }
    })
    return mid
}
module.exports = midFun