const { Router } = require('express');
const {check}    = require('express-validator');

// Importacion de los helpers
const { existeServicioPorId, 
        existeCategoriaPorId, 
        existeUsuarioPorId, } = require('../helpers/db-validators');

// Importacion de los middlewares
const { validarJWT }      = require('../middlewares/validar-jwt');
const { validarCampos }   = require('../middlewares/validar-campos');
const { esProveedorRol, esAdminRol }      = require('../middlewares/validar-roles');

// Importacion de los controladores
const { getServicios,
        getUnServicio, 
        putServicio,
        postServicio,
        deleteServicio} = require('../controllers/servicio');


const rutas = Router()

// Obtener todas las categorias - Publico
rutas.get('/', getServicios );

// Obtener una categoria en particular por "id" - Publico
rutas.get('/:id',[
    validarJWT,
    check('id', 'No es un id valido').isMongoId(),
    validarCampos,
    check('id').custom(existeServicioPorId),
    validarCampos,
], getUnServicio);


// Crear una categoria - Administrador con token valido
rutas.post('/:id', [
    validarJWT,
    esProveedorRol,
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('nombre', 'El nombre del servicio es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('precio'),
    check('categoria','No es un id valido').isMongoId(),
    check('categoria').custom(existeCategoriaPorId),
    validarCampos,
], postServicio);

// Actualizar una categoria por "id" - Administrador con token id
rutas.put('/:id',[
validarJWT,
esProveedorRol,
check('id','No es un id valido').isMongoId(),
check('id').custom(existeServicioPorId),
check('nombre', 'El nombre es obligatorio').not().isEmpty(),
check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
check('precio'),
validarCampos
],putServicio);

// Borrar una categoria - Administrador
rutas.delete('/:id',[
    validarJWT,
    esAdminRol,
    check('id', 'Ese id no es valido').isMongoId(),
    validarCampos,
    check('id').custom(existeServicioPorId),
    validarCampos
], deleteServicio);

module.exports = rutas;