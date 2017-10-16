const router = require('koa-router')();

const home = require('./home');
const login = require('./login');
const feed = require('./feed');

router.use('/home', home.routes(), home.allowedMethods());
router.use('/login', login.routes(), login.allowedMethods());
router.use('/feed', feed.routes(), feed.allowedMethods());

module.exports = router;