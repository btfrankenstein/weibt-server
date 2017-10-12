const Koa =require('koa');
const path = require('path');
const routers = require('./routes/index');
const app = new Koa();


app.use(routers.routes()).use(routers.allowedMethods())

app.listen(8888);
console.log('weibt start !');
