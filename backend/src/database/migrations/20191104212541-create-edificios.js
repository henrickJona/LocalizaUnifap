'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('edificios', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        categoria_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'categorias', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        imagem: {
          type: Sequelize.STRING,
        },
        latitude: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        longitude: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        descricao: {
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
      return queryInterface.dropTable('edificios');
  }

};
