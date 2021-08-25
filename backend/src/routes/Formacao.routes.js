const express = require('express');
const formacaoController = require('../controllers/Formacao.controller');

const router = express.Router();

router.get('/', formacaoController.getAll);
router.get('/:id', formacaoController.getOne);
router.post('/', formacaoController.add);
router.put('/:id', formacaoController.update);
router.delete('/:id', formacaoController.del);

module.exports = router;