const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./src/database');

app.use(express.json());
app.use(cors());

app.use('/formacoes', require('./src/routes/Formacao.routes'));

app.listen(8080, console.log('Running on 8080'));