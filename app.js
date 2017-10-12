const Koa =require('koa');
const path = require('path');
const routers = require('./routes/index');
const cors = require('@koa/cors');
const app = new Koa();
app.use(cors());
app.use(routers.routes()).use(routers.allowedMethods());

app.listen(8888);
console.log('weibt start !');
