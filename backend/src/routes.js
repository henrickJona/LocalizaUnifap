const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const UsuarioController = require('./app/controllers/UsuarioController');
const CategoriaController = require('./app/controllers/CategoriaController');
const EdificioController = require('./app/controllers/EdificioController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/usuarios', UsuarioController.store);
routes.post('/categorias', CategoriaController.store);
routes.post('/edificios', upload.single('imagem') ,EdificioController.store);


module.exports = routes;