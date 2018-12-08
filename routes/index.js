const stocksApi = require('./stocks.js');
 let routes = (server)=>
 {
    stocksApi(server);
 }
 module.exports = routes;
