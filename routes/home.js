const router = require('koa-router')();
const homeController = require('../controllers/home');
const route = router.get('/', homeController.getPetsByName)
  .get('/gender', homeController.getPetsByGender)
  .get('/add', homeController.addpet);

module.exports = route;