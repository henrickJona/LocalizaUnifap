const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../app/models/Usuario');
const Categoria = require('../app/models/Categoria');
const Edificio = require('../app/models/Edificio');


const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Categoria.init(connection);
Edificio.init(connection);

Edificio.associate(connection.models);

module.exports = connection;