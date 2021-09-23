
// Fichero para manejar las rutas de la pagina principal

const {Router}  = require('express');
//const { check } = require('express-validator');


// Importacion de funciones para las validacion de los datos desde middleware
//const { validarCampos } = require('../middlewares/validar-campos');
// Importacion de los metodos validaciones desde db-validator/ helpers
//const { esUnRolValido, existeEmail, existeUsuarioPorId } = require('../helpers/db-validators');


// Importacion de metodos HTTP desde servicio controllers
const { 
    getServicio,
    putServicio,
    postServicio,
    deleteServicio,
} = require('../controllers/servicio')

// Inicializando la constante para fijar las rutas
const rutasServicio = Router();

    // Obtener ruta para datos del servicio
    rutasServicio.get('/', getServicio);

    // Obtener ruta para actualizar datos del servicio 
    rutasServicio.put('/',putServicio);

    // Obtener ruta para enviar datos del servicio
    rutasServicio.post('/', postServicio);

    // Obtener ruta para eliminar datos del servicio
    rutasServicio.delete('/',deleteServicio);

// Exportacion de Router
module.exports = rutasServicio;