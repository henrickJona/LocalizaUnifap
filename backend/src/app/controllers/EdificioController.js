const Edificio = require ('../models/Edificio');
const Categoria = require('../models/Categoria');

module.exports = {
    
    async store(req,res){
        const { imagem } = req.file;
        const { categoria_id } = req.headers;
        const { nome, latitude, longitude, descricao } = req.body;

        const categoria = await Categoria.findByPk(categoria_id);

        if(!categoria){
            return res.status(400).json( {error : 'Categoria não encontrada;'} );
        }

        const edificio = Edificio.create({
            nome,
            imagem,
            latitude,
            longitude,
            descricao,
        });

        return res.json(edificio);
    }
};