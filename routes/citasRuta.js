const express = require('express');
const router = express.Router();
const citaController = require('../controller/citaController');

// Creamos nuestra ruta para el crud

// creamos nuestras rutas para  el crud

router.post('/', citaController.agregarCitas);
router.get('/', citaController.mostrarCitas);
router.get('/:id', citaController.buscarCitas);
router.put('/:id', citaController.actualizarCitas);
router.patch('/:id', citaController.modificarCitas);
router.delete('/:id', citaController.eliminarCitas);




module.exports=router;