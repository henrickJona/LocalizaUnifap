const Usuario = require('../models/Usuario');


module.exports = {

    async store (req, res){
        const { nome, email, senha} = req.body;

        const usuario = await Usuario.create({ nome, email, senha});


        return res.json(usuario);

    }
};