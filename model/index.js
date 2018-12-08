const stocks = require('./stocks.js');
const boom = require('boom');
 
let modelIndex = async () =>
{
    try {
        await customer.sql_cust();
    } catch (error) {
        boom.badRequest('error in creating table');
    }
}
 module.exports = model_index;













