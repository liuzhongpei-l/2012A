const Mock = require('mockjs')


let listData = Mock.mock({
    "data|10": [
        {
            id: "@id",
            title: "@cname",
            desc: "@cword(10,20)",
            "num|1-20": 0,
            "price|10-200": 0,
            thumb: "@image(100x100,@color)"
        }
    ]
})


const dataService = function (middlewares, { app }) {
    app.get('/api/getList', (req, res) => {
        res.send({
            code: 200,
            message: "success",
            data: listData.data
        })
    })

    return middlewares
}

module.exports = dataService