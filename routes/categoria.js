const { Router } = require('express');
const {check}    = require('express-validator');

// Importacion de los helpers
const { existeCategoriaPorId} = require('../helpers/db-validators');

// Importacion de los middlewares
const { validarJWT }      = require('../middlewares/validar-jwt');
const { validarCampos }   = require('../middlewares/validar-campos');
const { esAdminRol }      = require('../middlewares/validar-roles');

// Importacion de los controladores
const { crearCategoria,
        obtenerCategorias, 
        obtenerUnaCategoria,
        actualizarCategoria,
        eliminarCategoria} = require('../controllers/categoria');


const rutas = Router()

// Obtener todas las categorias - Publico
rutas.get('/', obtenerCategorias );

// Obtener una categoria en particular por "id" - Publico
rutas.get('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    validarCampos,
    check('id').custom(existeCategoriaPorId),
    validarCampos,
], obtenerUnaCategoria);


// Crear una categoria - Administrador con token valido
rutas.post('/:id', [
    validarJWT,
    esAdminRol,
    check('id','No es un id valido').isMongoId(),
    check('nombre', 'El nombre de la categoria es obligatorio').not().isEmpty(),
    validarCampos,
], crearCategoria);

// Actualizar una categoria por "id" - Administrador con token id
rutas.put('/:id',[
validarJWT,
esAdminRol,
check('nombre', 'El nombre es obligatorio').not().isEmpty(),
validarCampos,
check('id').custom(existeCategoriaPorId),
validarCampos
],actualizarCategoria);

// Borrar una categoria - Administrador
rutas.delete('/:id',[
    validarJWT,
    esAdminRol,
    check('id', 'Ese ID no es valido').isMongoId(),
    validarCampos,
    check('id').custom(existeCategoriaPorId),
    validarCampos
], eliminarCategoria);

module.exports = rutas;