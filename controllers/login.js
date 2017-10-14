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
        id: user.dataValues.id,
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

    // ctx.session.user = user.dataValues;
    // const id = user.id;
    // const email = user.email;
    // const keep_user = 604800000; // 7天
    // ctx.cookies.set('userid', id, { maxAge: keep_user, httpOnly: false });
    // ctx.cookies.set('userEmail', email, { maxAge: keep_user, httpOnly: false });
    ctx.body = {
      status: 200,
      msg: 'ok',
      userId: user[0].id,
    };

  }

}
module.exports = new LoginController();