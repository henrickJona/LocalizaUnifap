const { Model, DataTypes } = require('sequelize');

class Local extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            sigla: DataTypes.STRING,
            descricao: DataTypes.STRING,
            horario: DataTypes.STRING,
            telefone: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'locais',
        })
    }

    static associate(models){
        this.belongsTo(models.Edificio, {foreignKey: 'edificio_id', as: 'edificio'});

    }

}

module.exports = Local;