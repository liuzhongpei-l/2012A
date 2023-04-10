const Mock = require('mockjs')

const mid = (mid, { app }) => {
    app.get('/api/list', (req, res) => {
        let data = Mock.mock({
            "list|10-15": [
                {
                    id: "@id",
                    title: "@ctitle",
                    desc: "@cword(10,20)",
                    "num|0-10": 0,
                    url: "@image(100x100,@color)"
                }
            ]
        })
        res.send({
            code: 200,
            message: "success",
            data: data.list
        })
    })
    return mid
}

module.exports = mid;