const query = require('../db/query')

const test = async (params) => {

}
const list = async (params) => {
    // pageNum=(pageNum-1)*pageSize
    const { pageNum, pageSize, nickname } = params
    let sql = `select * from user where nickname like '%${nickname}%' LIMIT ${(pageNum - 1) * pageSize},${pageSize}`
    let res = await query(sql)
    let countsql = 'SELECT count(*) total FROM user'
    let count = await query(countsql)

    if (res.length > 0) {
        return {
            status: true,
            code: 200,
            message: "查询成功",
            data: { total: count[0].total, data: res }
        }
    } else {
        return {
            status: false,
            code: 200,
            message: "暂无数据",
            data: null
        }
    }
}
const searchList = async (params) => {
    const { nickname, pageNum, pageSize } = params
    let sql = `select * from user where nickname like '%${nickname}%' LIMIT ${(pageNum - 1) * pageSize},${pageSize}`
    let result = await query(sql)
    return result
}

const userInfo = async (params) => {
    const { id } = params
    let sql = `select * from user where id=${id}`
    let result = await query(sql)
    return result
}
const deleteUser = async (params) => {
    const { id } = params
    let sql = `delete from user where id=${id}`
    let result = await query(sql)
    if (result.affectedRows == 1) {
        return true
    } else {
        return false
    }
}

module.exports = {
    test,
    list,
    searchList,
    userInfo,
    deleteUser
}