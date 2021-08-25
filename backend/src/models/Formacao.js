const mongoose = require('mongoose');


const FormacaoSchema = new mongoose.Schema({

    tema: {
        type: String,
        required: true
    },
    carga: {
        type: Number,
        required: true,
        default: 4
    },
    data: {
        type: Date,
        required: true
    },
    responsavel: {
        type: [String],
        required: true
    },
    situacao: {
        type: String,
        enum: ['Ativa', 'Realizada', 'Cancelada'],
        required: true,
        default: 'Ativa'   
    }
}, {timestamps: true, collection: 'Formacoes'});

module.exports = mongoose.model('Formacao', FormacaoSchema);