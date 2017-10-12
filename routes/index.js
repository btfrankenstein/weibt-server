const router = require('koa-router')();

const home = require('./home');
const login = require('./login');

router.use('/home', home.routes(), home.allowedMethods());
router.use('/login', login.routes(), login.allowedMethods());

module.exports = router;