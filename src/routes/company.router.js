const Router = require('restify-router').Router;
const routerInstance = new Router();

const redis  = require('promise-redis')()
const redis_client = redis.createClient(6379);
const query = require('../knex/db_query/company/company')

// shell js to run script knex and anothers scripts
const shell = require('shelljs')
let server;
// instance router of server
function createRouter(server, redis_client) {
  this.redis_client = redis_client;
  this.server = server;
  // add all routes registered in the router to this server instance
  routerInstance.applyRoutes(server);
}

// Get all companies list
async function getAllCompanies(req, res, next) {
  const redis_result = await redis_client.get('allCompanies')
  if (!redis_result) {
    let select_companies = query.select_companies;
    let companies_list;
    await select_companies.then(data => {
      companies_list = data;
      cp = JSON.stringify(companies_list)
      redis_client.set('allCompanies', cp)
    }).catch(e => {
      //console.log(e.message)
    }).finally(() => {
      //knex.destroy()
    })
    console.log('response from mysql')
    res.json({ companies_list });
  } else {
    console.log('response from redis')
    result = JSON.parse(redis_result)
    res.json({ result });
  }

  return next();
}


//POST which receives a term to search a company
async function searchCompany(req, res, next) {


  var strRes = JSON.stringify(req.body)
  strRes = strRes.replace('{', '')
  strRes = strRes.replace('}', '')
  strRes = strRes.split(':')

  const redis_result = await redis_client.get('company.term.' + strRes)

  if (!redis_result) {
    let select_company_term = query.select_company_term(req.body);
    let company;
    await select_company_term.then(data => {
      company = data;
      cp = JSON.stringify(company)
      redis_client.set('company.term.' + strRes, cp)
    }).catch(e => {
      console.log(e.message)
    }).finally(() => {
      //knex.destroy()
    })
    console.log('response from mysql')
    res.json({ company });
  } else {
    console.log('response from redis')
    result = JSON.parse(redis_result)
    res.json({ result });
  }
  return next();
}

routerInstance.get('/getAllCompanies', getAllCompanies);
routerInstance.post('/searchCompanies', searchCompany);

module.exports = { createRouter };

