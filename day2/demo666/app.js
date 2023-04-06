const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const mount = require('koa-mount');
const static = require('koa-static');
const cors = require('koa-cors');
const path = require('path')
const router = require('./app/router')
const publicPath = path.join(__dirname, 'app', 'public')
const app = new Koa();

app.use(bodyparser());
app.use(cors({ origin: "*" }));
app.use(mount('/myWeb', static(publicPath)));
app.use(router);

app.listen(3002, () => console.log('http://localhost:3002'));