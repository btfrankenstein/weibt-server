const models = require('../model');
const Pet = models.pet;
class HomeController {

  // 用户注册
  async getPetsByName(ctx) {
    var pets = await Pet.findAll({
      where: {
        name: ctx.query.name,
      }
    });
    console.log(`find ${pets.length} pets:`);
    ctx.body = pets
  }
  async getPetsByGender(ctx) {
    var pets = await Pet.findAll({
      where: {
        gender: ctx.query.gender,
      }
    });
    console.log(`find ${pets.length} pets:`);
    ctx.body = pets
  }
  async addpet(ctx) {
    const now = Date.now();
    await Pet.create({
      ownerId: 'd-' + now,
      name: ctx.query.name,
      gender: false,
      birth: ctx.query.birth,
      createdAt: now,
      updatedAt: now,
      version: 0
    });
  }

}
module.exports = new HomeController();