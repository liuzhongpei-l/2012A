const Mock = require('mockjs')

let mockData = Mock.mock({
    "data|5": [
        {
            id: "@id",
            title: "@ctitle",
        }
    ]
})


const middle = function (mid, { app }) {
    app.get('/api/getCardList', (req, res) => {
        res.send({
            code: 200,
            message: "success",
            data: mockData.data
        })
    })
    return mid
}
module.exports = middle