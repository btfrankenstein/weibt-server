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
    } catch(e) {
      ctx.body = {
        status: 500,
        msg: e,
      };
    }
    
  }

}
module.exports = new LoginController();