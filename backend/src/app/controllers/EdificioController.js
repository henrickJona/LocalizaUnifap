const Edificio = require ('../models/Edificio');
const Categoria = require('../models/Categoria');

module.exports = {

    async index(req,res){
      /*  const { categoria_id } = req.headers;

        const categoria = await Categoria.findByPk(categoria_id, {
            include: { association: 'edificios' }
        });*/

        const nome = req.body;

        const edificios = await Edificio.findAll(nome);

        return res.json(edificios);
    },
    
    async store(req,res){
        const { imagem } = req.file;
        const { categoria_id } = req.headers;
        const { nome, latitude, longitude, descricao } = req.body;


        const categoria = await Categoria.findByPk(categoria_id);

        if(!categoria){
            return res.status(400).json( {error : 'Categoria não encontrada;'} );
        }

        const edificio = await Edificio.create({
            nome,
            imagem,
            latitude,
            longitude,
            descricao,
            categoria_id,

        })

        return res.json(edificio)
    }
};