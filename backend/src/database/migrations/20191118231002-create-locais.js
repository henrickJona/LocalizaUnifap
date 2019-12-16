'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('locais', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      edificio_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'edificios', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      sigla:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao:{
        type: Sequelize.STRING,
      },
      horario:{
        type: Sequelize.STRING,
      },
      telefone:{
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('locais');
  }
};