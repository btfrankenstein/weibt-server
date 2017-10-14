const router = require('koa-router')();
const loginController = require('../controllers/login');
const route = router.get('/register', loginController.register)
  .get('/', loginController.login);

module.exports = route;