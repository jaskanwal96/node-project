const services = require('../services');
const Boom = require('boom');


let loadData = async function(req) {
    try {
        let check = await services.stocksService.checkCustomer(data.customer_email, data.customer_password);
        
        return {statusCode: 200, message:"Loaded Successfully"};
    } catch (error) {
        console.log(error);
        return Boom.badRequest("Error Fetching Customer");
    }
}

module.exports = {
    loadData
}
