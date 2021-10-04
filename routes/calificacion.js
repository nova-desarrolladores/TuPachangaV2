
// Fichero para manejar las rutas de la pagina principal

const {Router}  = require('express');
const { check } = require('express-validator');


// Importacion de funciones para las validacion de los datos desde middleware
const { validarCampos } = require('../middlewares/validar-campos');
// Importacion de los metodos validaciones desde db-validator/ helpers
const { existeCalificacionPorId } = require('../helpers/db-validators');


// Importacion de metodos HTTP desde servicio controllers
const { 
    getCalificacion,
    putCalificacion,
    postCalificacion,
    deleteCalificacion,
} = require('../controllers/calificacion')

// Inicializando la constante para fijar las rutas
const rutasCalificacion = Router();

    // Obtener ruta para datos del Calificacion
    rutasCalificacion.get('/', getCalificacion);

    // Obtener ruta para actualizar datos del Calificacion 
    rutasCalificacion.put('/:id',[
        check('id','No es un id valido').isMongoId(),
        check('id').custom(existeCalificacionPorId),
        validarCampos
    ],putCalificacion);

    // Obtener ruta para enviar datos del Calificacion
    rutasCalificacion.post('/', postCalificacion);

    // Obtener ruta para eliminar datos del Calificacion
    rutasCalificacion.delete('/:id',[
        check('id','No es un id valido').isMongoId(),
        check('id').custom(existeCalificacionPorId),
        validarCampos
    ],deleteCalificacion);

// Exportacion de Router
module.exports = rutasCalificacion;