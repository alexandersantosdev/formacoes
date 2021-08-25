const Formacao = require('../models/Formacao');

const getAll = async (req, res) => {

    const formacoes = await Formacao.find({});
    return res.status(200).json(formacoes);

}

const getOne = async (req, res) => {

    const id = req.params.id

    try {
        const formacao = await Formacao.findById(id);
        return res.status(200).json(formacao);
    } catch (err) {

        return res.status(400).json({ error: true, "message": "formação não encontrada" });
    }

}

const add = async (req, res) => {

    try {
        const formacao = await Formacao.create(req.body);
        return res.status(201).json(formacao);
    } catch (err) {
        return res.status(400).json({ error: true, "message": "não foi possível adicionar a formação" });

    }

}

const update = async (req, res) => {

    const id = req.params.id

    try {
        const formacao = await Formacao.findById(id);
        const {
            tema,
            responsavel,
            data,
            carga,
            situacao
        } = req.body

        formacao.tema = tema;
        formacao.responsavel = responsavel;
        formacao.data = data;
        formacao.carga = carga;
        formacao.situacao = situacao;

        await formacao.save()
        return res.status(201).json(formacao);
    } catch (err) {

        return res.status(400).json({ error: true, "message": "formação não encontrada" });
    }

}

const del = async (req, res) => {
    
    const id = req.params.id

    try {
        const formacao = await Formacao.findById(id);
        await formacao.delete();
        return res.status(204).json({});
    } catch (err) {

        return res.status(400).json({ error: true, "message": "formação não encontrada" });
    }
    
}

module.exports = {
    getAll,
    getOne,
    add,
    update,
    del
}