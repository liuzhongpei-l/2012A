const Mock = require('mockjs');

let list = Mock.mock({
    "data|10": [
        {
            id: "@id",
            shopName: "@ctitle(3,5)",
            "price|10-1000": 0,
            shopImg: "@image(100x100,@color)",
            num: 1,
            mis: "@cword(10,20)"
        }
    ]
})


module.exports = function (middlewares, { app }) {
    app.get('/api/getList', function (req, res) {
        res.send({
            code: 200,
            message: "success",
            data: list
        })
    })
    return middlewares
}