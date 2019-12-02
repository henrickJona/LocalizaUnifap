const { Model, DataTypes } = require('sequelize');

class Edificio extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            imagem: DataTypes.STRING,
            latitude: DataTypes.STRING,
            longitude: DataTypes.STRING,
            longitude: DataTypes.STRING,
            descricao: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Categoria, {foreignKey: 'categoria_id', as: 'categoria'});
       // this.hasMany(models.Local, {foreignKey: 'edificio_id', as: 'locais'});


    }

}

module.exports = Edificio;