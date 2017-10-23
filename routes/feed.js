const router = require('koa-router')();
const feedController = require('../controllers/feed');
const route = router.post('/post', feedController.postFeed)
                    .get('/get', feedController.getFeed);

module.exports = route;