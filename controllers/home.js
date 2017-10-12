const models = require('../model');
const Pet = models.pet;

class HomeController {

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
    var pets = await Pet.findAll({
      where: {
        name: ctx.query.name,
      }
    });
    console.log(pets.length);
    if (pets.length > 0) {
      ctx.body = {
        status: 403,
        msg: '账户已存在',
      }
    } else {
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
}
module.exports = new HomeController();