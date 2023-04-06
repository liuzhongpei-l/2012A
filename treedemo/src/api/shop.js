const request = require('../utils/request.js')
function getShopList(params) {
    return new Promise((resolve, reject) => {
        request.get('/api/getList').then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
module.exports = {
    getShopList
}