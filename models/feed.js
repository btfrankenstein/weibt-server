const db = require('../db');

module.exports = db.defineModel('feed', {
  userId: {
    type: db.STRING(100),
  },
  feedId: {
    type: db.STRING(100),
    unique: true,
  },
  content: db.STRING(250),
});