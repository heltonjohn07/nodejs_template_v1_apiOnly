const express = require('express');
const meuController = require('./controllers/meuController')

const routes = express.Router(); 

routes.get('/', meuController.index);
routes.post('/', meuController.create);
routes.put('/:id', meuController.update);
routes.delete('/:id', meuController.delete);

module.exports =  routes;