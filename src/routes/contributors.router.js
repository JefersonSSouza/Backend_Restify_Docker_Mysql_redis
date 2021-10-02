const Router = require('restify-router').Router;
const routerInstance = new Router();

const redis  = require('promise-redis')()
const redis_client = redis.createClient(6379);
const query = require('../knex/db_query/contributor/contributor')

// instance router of server
function createRouter(server, redis_client) {
  this.redis_client = redis_client;
  this.server = server;
  // add all routes registered in the router to this server instance
  routerInstance.applyRoutes(server);
}

// Get all desktops in all companies
async function getAllContributors(req, res, next) {
  const redis_result = await redis_client.get('allContributors')
  if (!redis_result) {
    let select_contributors = query.select_contributors;
    let contributors_list;
    await select_contributors.then(data => {
      contributors_list = data;
      cp = JSON.stringify(contributors_list)
      redis_client.set('allContributors', cp)
    }).catch(e => {
      console.log(e.message)
    }).finally(() => {
      //knex.destroy()
    })
    console.log('response from mysql')
    res.json({ contributors_list });
  } else {
    console.log('response from redis')
    result = JSON.parse(redis_result)
    res.json({ result });
  }

  return next();
}

//Get all contributors in a company
async function contributorsCompany(req, res, next) {
  const redis_result = await redis_client.get('allContributors.company.'+req.body.phone_number)

  if (!redis_result) {
  let contrib_comp = query.select_contributors_company(req.body.phone_number);
  let contrib
  await contrib_comp.then(data => {
    contrib = data;
    cp = JSON.stringify(contrib)
    redis_client.set('allContributors.company.'+req.body.phone_number,cp)
  }).catch(e => {
    console.log(e.message)
  }).finally(() => {
    //knex.destroy()
  })
  console.log('response from mysql')
  res.json({ contrib });
} else {
  console.log('response from redis')
  result = JSON.parse(redis_result)
  res.json({ result });
}

return next();
}



routerInstance.get('/getAllContributors', getAllContributors);
routerInstance.post('/contributorsCompany', contributorsCompany);

module.exports = { createRouter };