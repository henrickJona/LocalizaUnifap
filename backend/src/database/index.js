const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../app/models/Usuario');
const Categoria = require('../app/models/Categoria');
const Edificio = require('../app/models/Edificio');
const Local = require('../app/models/Local');


const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Categoria.init(connection);
Edificio.init(connection);
Local.init(connection);

Categoria.associate(connection.models);
Edificio.associate(connection.models);
Local.associate(connection.models);


module.exports = connection;