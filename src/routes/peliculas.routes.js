const express = require('express');
const router = express.Router();
const peliculasController = require('../controllers/peliculas.controller');

router.get('/', peliculasController.getAll)
router.get ('/:codigo', peliculasController.getById)
router.post('/', peliculasController.create)
router.put ('/:codigo', peliculasController.update)
router.delete('/:codigo', peliculasController.remove)


module.exports = router;
