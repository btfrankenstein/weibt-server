const Koa =require('koa');
const cors = require('@koa/cors');
const path = require('path');
const routers = require('./routes/index');
const session = require('koa-session');
const app = new Koa();

// cookies
app.keys = ['sinn:secret'];
const CONFIG = {
  key: 'sinn',
  maxAge: 604800000,  // 7天
  overwrite: true,
  signed: true,
};
app.use(session(CONFIG, app));

app.use(cors());
app.use(routers.routes()).use(routers.allowedMethods());

app.listen(8888);
console.log('weibt start !');
