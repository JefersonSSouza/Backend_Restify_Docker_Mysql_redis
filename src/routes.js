const Router = require('restify-router').Router;
const companyRouter = require('./routes/company.router')
const desktopRouter = require('./routes/desktop.router')
const contributorsRouter = require('./routes/contributors.router')
const routerInstance = new  Router();


// shell js to run script knex and anothers scripts
const shell = require('shelljs')


// router router by server
function createRouter(server){
    //apply main router to server
    routerInstance.applyRoutes(server);
    //add another routes to main router
    companyRouter.createRouter(server)
    desktopRouter.createRouter(server)
    contributorsRouter.createRouter(server)
}
// home
function root(req, res,next){
    res.json('hello world');
    next();
}

//migration success
function migrate_success(req, res,next){
    res.json({
        message:'All migrations is successfully done !!'
    })
   return next()
}

//seed success
function seed_success(req, res,next){
    res.json({
        message:'All seeds is successfully done !!'
    })
   return next()
}

// knex migrate: latest to create database
async function migrate(req, res,next){
    if(req.params.user == 'ADMIN-migrate'){ 
        // download json dataset from github
            shell.exec('python ./src/knex/getData.py' ) 
         // run knex migrate
            shell.exec('knex --knexfile=./src/knex/knexfile.js migrate:latest ' );
        //redirect after migrate and download data to seed file
        await res.redirect('/seedRun',next)     
        }
}

async function  seedRun(req, res,next){
        // run knex seeds
            shell.exec('knex --knexfile=./src/knex/knexfile.js seed:run ' );
        //redirect after migrate and download data to seed file
            await res.redirect('/migrate-success',next)      
}

//intance of routes
routerInstance.get('/', root);
routerInstance.get('/migrate-success', migrate_success);
routerInstance.get('/migrate/:user', migrate);
routerInstance.get('/seed-success', seed_success);
routerInstance.get('/seedRun', seedRun);
module.exports = {createRouter};

 
