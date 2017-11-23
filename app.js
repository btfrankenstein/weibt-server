const Koa =require('koa');
const cors = require('@koa/cors');
const path = require('path');
const routers = require('./routes/index');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');
const jwtKoa = require('koa-jwt');
const err = require('./middleware/error');
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
app.use(bodyParser());

app.use(err());
app.use(jwtKoa({
  secret: 'jwtdemo',
  // 自定义 token 的获取方式
  // 默认的是 header 中的 Authorization 字段
  getToken: function(ctx) {
    return ctx.request.header.token;
  },
}).unless({
  path: [/^\/login/] //数组中的路径不需要通过jwt验证
}));
app.use(routers.routes()).use(routers.allowedMethods());

app.listen(8888);
console.log('weibt start !');
