const Categoria = require('../models/Categoria');


module.exports = {

    async store (req, res){
        const { nome } = req.body;

        const categoria = await Categoria.create({ nome });


        return res.json(categoria);

    }
};

