const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const UsuarioController = require('./app/controllers/UsuarioController');
const CategoriaController = require('./app/controllers/CategoriaController');
const EdificioController = require('./app/controllers/EdificioController');
const LocalController = require('./app/controllers/LocalController');


const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/usuarios', UsuarioController.store);

routes.post('/categorias', CategoriaController.store);

routes.get('/edificios', EdificioController.index);
routes.post('/edificios', upload.single('imagem') , EdificioController.store);

routes.post('/edificios/:edificio_id/locais', LocalController.store);

  

module.exports = routes;