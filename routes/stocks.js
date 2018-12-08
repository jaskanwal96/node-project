const controller = require('../controller');
const joi = require('joi');  
let stocksAPI = (server)=>{
    server.route({
        method: 'POST',
        path: '/stocks/load',
        handler: function (req, reply) {
            return controller.stockController.loadData(req);
        },
        config:{
            description:'Load Data from xslx File',
            tags:['api'],
            validate : {
                payload:
                    {
                        load_data : joi.any(), 
                    }
            }
        }
    });

    server.route(
        {
            method: 'POST',
            path: '/stocks/view',
            handler: function (req,res)
            { 
                return controller.customer_controller.registerCustomer(req.payload);
            },
            config:
            {
                description:'get all customers',
                tags:['api'],
                validate:
                {
                    payload:
                    {
                        customer_name : joi.string(), 
                        customer_phone : joi.string(), 
                        customer_email : joi.string(), 
                        customer_password : joi.string()
                    }
                }
            }
        });
    }

module.exports  = stocksApi;