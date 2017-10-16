const models = require('../model');
const User = models.feed;

class FeedController {

  async postFeed(ctx) {
    const now = Date.now();
    console.log(ctx.request.body);
    try {
      const user = await User.create({
        userId: ctx.request.body.userId,
        content: ctx.request.body.content,
        feedId: `${ctx.request.body.userId}${now}`,
        createdAt: now,
        updatedAt: now,
      });
      ctx.body = {
        status: 200,
        msg: 'ok',
      };
    } catch(e) {
      ctx.body = {
        status: 500,
        msg: e,
      };
    }
  }

}
module.exports = new FeedController();