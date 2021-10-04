
// Fichero para manejar las rutas de la pagina principal

const {Router}  = require('express');
const { check } = require('express-validator');


// Importacion de funciones para las validacion de los datos desde middleware
const { validarCampos } = require('../middlewares/validar-campos');
// Importacion de los metodos validaciones desde db-validator/ helpers
const { existeServicioPorId } = require('../helpers/db-validators');


// Importacion de metodos HTTP desde servicio controllers
const { 
    getReserva,
    putReserva,
    postReserva,
    deleteReserva,
} = require('../controllers/servicio')

// Inicializando la constante para fijar las rutas
const rutasReserva = Router();

    // Obtener ruta para datos del Reserva
    rutasReserva.get('/', getReserva);

    // Obtener ruta para actualizar datos del Reserva 
    rutasReserva.put('/:id',[
        check('id','No es un id valido').isMongoId(),
        check('id').custom(existeReservaPorId),
        validarCampos
    ],putReserva);

    // Obtener ruta para enviar datos del Reserva
    rutasReserva.post('/', postReserva);

    // Obtener ruta para eliminar datos del Reserva
    rutasReserva.delete('/:id',[
        check('id','No es un id valido').isMongoId(),
        check('id').custom(existeReservaPorId),
        validarCampos
    ],deleteReserva);

// Exportacion de Router
module.exports = rutasReserva;