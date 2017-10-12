const model = require('./model');
// model.sync();

// console.log('init db ok.');
// process.exit(0);

model.sync().then(() => {
  console.log('sync done');
  process.exit(0);
}).catch((e) => {
  console.log('failed with: ' + e);
  process.exit(0);
});