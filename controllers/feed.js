const models = require('../model');
const Feed = models.feed;

class FeedController {

  async postFeed(ctx) {
    const now = Date.now();
    console.log(ctx.request.body);
    try {
      const feed = await Feed.create({
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

  async getFeed(ctx) {
    const feed = await Feed.findAll({
      where: {
        userId: ctx.request.query.userId,
      }
    });

    ctx.body = {
      status: 200,
      msg: 'ok',
      data: feed,
    };
  }

}
module.exports = new FeedController();