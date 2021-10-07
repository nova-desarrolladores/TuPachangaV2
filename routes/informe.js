const {Router} = require('express');

const { obtenerTotalCategorias, 
        obtenerTotalServicios,
        obtenerTotalProveedores, 
        obtenerTotalConsumidores} = require('../controllers/informe');

// Importacion de los middlewares
const { esAdminRol } = require('../middlewares/validar-roles');
const {validarJWT} = require('../middlewares/validar-jwt');

const rutas = Router();


// Obtener cantidad total de categorias - Administrador
rutas.get('/cantidad/categorias',[
    validarJWT,
    esAdminRol,
],obtenerTotalCategorias);

// Obtener catidad total de servicios - Administrador
rutas.get('/cantidad/servicios',[
    validarJWT,
    esAdminRol,
],obtenerTotalServicios );

// Obtener cantidad total de proveedores - Administrador
rutas.get('/cantidad/proveedores', obtenerTotalProveedores);

//Obtener cantidad total de consumidores - Administrador
rutas.get('/cantidad/consumidores', obtenerTotalConsumidores);

// Obtener cantidad total de reservas - Administrador
rutas.get('/cantidad/reservas', (req, res) => {
    res.json({msg: 'Obteniendo total de reservas'});
});

// Obtener todas las calificaciones - Administrador
rutas.get('/cantidad/calificaciones', (req, res) => {
    res.json({msg: 'Obteniendo total de calificaciones'});
});

module.exports = rutas;