const restify = require('restify');
const server = restify.createServer();
const Router = require('./src/routes')

Router.createRouter(server)
//const knex = require('./knex');

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.fullResponse());
server.use(restify.plugins.bodyParser());

server.listen(5000, function () {
  console.log('ready on %s', server.url);
 
});



