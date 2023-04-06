const Router = require('koa2-router');
const userController = require('./controller/user')

const router = new Router();
router.get('/', userController.test)
router.get('/user/list', userController.list)
router.get('/user/searchList', userController.searchList)
router.get('/user/userInfo/:id', userController.userInfo)
router.delete('/user/delUser', userController.deleteUser)
module.exports = router;