const models = require('../model');
const User = models.user;

class LoginController {

  async register(ctx) {
    const now = Date.now();
    try {
      const user = await User.create({
        email: ctx.query.email,
        password: ctx.query.password,
        createdAt: now,
        updatedAt: now,
      });
      ctx.body = {
        status: 200,
        msg: 'ok',
        data: {
          id: user.dataValues.id,
        },
      };
      console.log(id);
    } catch(e) {
      ctx.body = {
        status: 500,
        msg: e,
      };
    }
  }

  async login(ctx) {
    const user = await User.findAll({
      where: {
        email: ctx.query.email,
      }
    });

    if (user.length === 0) {
      ctx.body = {
        status: 400,
        msg: '用户不存在',
      };
    } else {
      if (user[0].password !== ctx.query.password) {
        ctx.body = {
          status: 400,
          msg: '密码错误',
        };
      } else {
        ctx.body = {
          status: 200,
          msg: 'ok',
          data: {
            token: user[0].id,
          },
        };
      }
    } 


  }

}
module.exports = new LoginController();