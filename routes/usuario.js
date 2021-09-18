
// Fichero para manejar las rutas de la pagina principal

const {Router}  = require('express');
const { check } = require('express-validator');
const Role = require('../models/rol');


// Importacion de funciones para las rutas
const { validarCampos } = require('../middlewares/validar-campos');

const { getUsuario,
    putUsuario,
    postUsuario,
    deleteUsuario,} = require('../controllers/usuario');

// Inicializando la constante para fijar las rutas
const rutas = Router();

    // Obtener ruta para datos del usuario
    rutas.get('/', getUsuario);

    // Obtener ruta para actualizar datos del usuario 
    rutas.put('/:id', putUsuario);

    // Obtener ruta para enviar datos del usuario
    rutas.post('/', [
        // Validaciones de los campos por middlewares (express-validator)
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('apellidoPaterno', 'El apellido paterno es obligatorio').not().isEmpty(),
        check('apellidoMaterno', 'El apellido materno es obligatorio').not().isEmpty(),
        check('direccion', 'La direccion es obligatoria').not().isEmpty(),
        check('estado', 'El estado es obligatorio').not().isEmpty(),
        check('municipio', 'El municipio es obligatorio').not().isEmpty(),
        check('telefono', 'Ese telefono no es un numero valido').isNumeric().isLength({min:10, max:10}),
        check('correo', 'El correo no es valido').isEmail(),
        check('password', 'La contraseña debe tener mas de 6 caracteres').isLength({min:6}),
        //check('tipoUsuario', 'No es un usuario valido').isIn(['ADMIN_USUARIO','PROVEEDOR_USUARIO', 'CONSUMIDOR_USUARIO']),
        // check('rol').custom( ( role = '') =>{
           
        //     let existeRol =  Role.findOne({ role });
        //         if(!existeRol){
        //         return `El rol ${role} no esta registrado en la base de datos`;
        //         }
              
        // }),
        validarCampos
    ],postUsuario);

    // Obtener ruta para eliminar datos del usuario
    rutas.delete('/', deleteUsuario);




// Exportacion de Router
module.exports = rutas;