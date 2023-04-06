const userService = require('../service/user')

const test = async (ctx, next) => {
    ctx.body = {
        code: 200
    }
}
const list = async (ctx, next) => {
    let res = await userService.list(ctx.request.query)
    if (res.status) {
        ctx.body = {
            code: res.code,
            message: res.message,
            data: res.data
        }
    } else {
        ctx.body = {
            code: res.code,
            message: res.message,
            data: res.data
        }
    }
}

const searchList = async (ctx, next) => {
    let res = await userService.searchList(ctx.request.query)
    ctx.body = {
        code: 200,
        message: "success",
        data: res
    }
}
const userInfo = async (ctx, next) => {
    let res = await userService.userInfo(ctx.request.params)
    ctx.body = {
        code: 200,
        message: "success",
        data: res
    }
}
const deleteUser = async (ctx, next) => {
    let res = await userService.deleteUser(ctx.request.query)
    if (res) {
        ctx.body = {
            code: 200,
            message: "success",
            data: null
        }
    } else {
        ctx.body = {
            code: 500,
            message: "error",
            data: null
        }
    }
}


module.exports = {
    test,
    list,
    searchList,
    userInfo,
    deleteUser
}