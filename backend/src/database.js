const mongoose = require('mongoose');

const URL = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.hkwnu.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`

const conn = mongoose.connect(URL)
    .then(console.log('Conectado ao banco de dados'))
    .catch(err => console.log(err));

module.exports = conn