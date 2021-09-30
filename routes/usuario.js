// Fichero para manejar las rutas de la pagina principal
const {Router}  = require('express');
const { check } = require('express-validator');


// Importacion de funciones para las validacion de los datos desde middleware
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT }    = require('../middlewares/validar-jwt');
const { esAdminRol } = require('../middlewares/validar-roles');

// Importacion de los metodos validaciones desde db-validator/ helpers
const { esUnRolValido, existeEmail, existeUsuarioPorId } = require('../helpers/db-validators');

// Importacion de metodos HTTP desde usaurio controllers
const { getUsuario,
        putUsuario,
        postUsuario,
        deleteUsuario,} = require('../controllers/usuario');

// Inicializando la constante para fijar las rutas
const rutas = Router();

    // Obtener ruta para datos del usuario
    rutas.get('/', getUsuario);

    // Obtener ruta para actualizar datos del usuario 
    rutas.put('/:id',[
        // Validaciones de los campos por middlewares (utilizando express-validator)
        check('id','No es un id valido').isMongoId(),
        check('id').custom(existeUsuarioPorId),
        // check('rol').custom(esUnRolValido),
        // Validaciones de campos del formulario tomando el fichero de la carpeta middleware
        validarCampos
     ], putUsuario);

    // Obtener ruta para registrar datos del usuario
    rutas.post('/', [
        // Validaciones de los campos por middlewares (utilizando express-validator)
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('apellidoPaterno', 'El apellido paterno es obligatorio').not().isEmpty(),
        check('apellidoMaterno', 'El apellido materno es obligatorio').not().isEmpty(),
        check('direccion', 'La direccion es obligatoria').not().isEmpty(),
        check('estado', 'El estado es obligatorio').not().isEmpty(),
        check('municipio', 'El municipio es obligatorio').not().isEmpty(),
        check('telefono', 'Ese telefono no es un numero valido').isNumeric().isLength({min:10, max:10}),
        check('rfc', 'El RFC esta incompleto').isString().isLength({min:13, max:13}),
        check('correo').custom(existeEmail),
        check('password', 'La contraseña debe tener mas de 6 caracteres').isLength({min:6}),
        //check('tipoUsuario', 'No es un usuario valido').isIn(['ADMIN_USUARIO','PROVEEDOR_USUARIO', 'CONSUMIDOR_USUARIO']),
        check('rol').custom(esUnRolValido),
        // Validaciones de campos del formulario tomando el fichero de la carpeta middleware
        validarCampos
      ],postUsuario)

    // Obtener ruta para eliminar datos del usuario
    rutas.delete('/:id',[
        validarJWT,
        esAdminRol,
        check('id','No es un id valido').isMongoId(),
        check('id').custom(existeUsuarioPorId),
        validarCampos
    ],  deleteUsuario);




// Exportacion de Router
module.exports = rutas;