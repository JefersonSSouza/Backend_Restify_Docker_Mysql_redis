
getCompanyes = require('../companies.json')

exports.seed = async function(knex) {
      // Inserts seed entries
      console.log('Running company seed')
      for(var i = 0; i < getCompanyes.length; i++) {
            await knex('company').insert(getCompanyes[i]);
      }
      console.log('Company seed do0ne!' )
};
