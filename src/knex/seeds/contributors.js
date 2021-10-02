getComtib = require('../contributors.json')

exports.seed = async function(knex) {
  // Inserts seed entries
  console.log('Running contributors seed')
  for(var i = 0; i < getComtib.length; i++) {
   await knex('contributors').insert(getComtib[i]);
  }
  console.log('Contributors seed done!')
};
