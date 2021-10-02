getDesk = require('../desktop.json')

exports.seed = async function(knex) {
  // Inserts seed entries
  console.log('Running desktop seed')
  for(var i = 0; i < getDesk.length; i++) {
   await knex('desktop').insert(getDesk[i]);
  }
   console.log('Running desktop seed')
};
