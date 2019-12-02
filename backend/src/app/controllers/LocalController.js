const Local = require ('../models/Local');
const Edificio = require ('../models/Edificio');

module.exports = {
    
    async store(req,res){
        const { edificio_id } = req.params;
        const { nome, sigla, descricao, horario, telefone } = req.body;


        const edificio = await Edificio.findByPk(edificio_id);

        if(!edificio){
            return res.status(400).json( {error : 'Edificio não encontrado;'} );
        }

        const local = await Local.create({
            nome,
            sigla,
            descricao,
            horario,
            telefone,
            edificio_id,
        });

        return res.json(local);
    }
};