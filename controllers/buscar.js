const { response } = require("express");
const { ObjectId } = require('mongoose').Types;

const Usuario = require('../models/usuario');
const Categoria = require('../models/categoria');
const Servicio = require('../models/servicio');

// Colecciones permitidas a buscar
const coleccionesPermitidas = [
    'usuarios',
    'categorias',
    'servicios',
    'roles',
    //'calificaciones'
];

// Buscar Usuarios
const buscarUsuarios = async(termino = '', res = response ) => {
    
    // Buscar usuarios por ID
    const esMongoID = ObjectId.isValid(termino);
    if(esMongoID){
        const usuario = await Usuario.findById(termino)
        return res.json({
            // Indicamos que si el usuario existe nos regrese el arreglo, de lo contrario un arreglo vacio
            results: (usuario) ? [usuario] : [], 
        })
    }

    // Exprecion para busquedas insensibles
    const expReg = new RegExp(termino, 'i' );

    // Buscar usuario por nombre y por correo  (Activos - Roles) 
    const usuariosDB = await Usuario.find({
        $or: [{nombre: expReg }, {correo: expReg}],
        $and: [{estadoUsuario: true, rol: ['PROVEEDOR','CONSUMIDOR']}]
    })
    .populate('role', ['PROVEEDOR','CONSUMIDOR']);

    // Buscar usuarios por roles  Proveedores / Conmsumidores / Administradores
    const rolesDB = await Usuario.find({rol: expReg, estadoUsuario: true})

    res.json({
        results: [usuariosDB, rolesDB],
        
    })


}




// Buscar Categorias
const buscarCategoria = async(termino = '', res = response ) => {
    
    // Buscar categorias por ID
    const esMongoID = ObjectId.isValid(termino);
    if(esMongoID){
        const categoria = await Categoria.findById(termino).populate('categoria', 'nombre');
        return res.json({
            // Indicamos que si el usuario existe nos regrese el arreglo, de lo contrario un arreglo vacio
            results: (categoria) ? [categoria] : [], 
        })
    }

    // Exprecion para busquedas insensibles
    const expReg = new RegExp(termino, 'i' );

    // Buscar categorias por nombre 
    const categoriaDB = await Categoria.find({nombre: expReg, estado: true}).populate('categoria', 'nombre');
    return res.json({
        results: categoriaDB, 
    })


}


// Buscar Servicios
const buscarServicios = async(termino = '', res = response ) => {
    
    // Buscar servicio por ID
    const esMongoID = ObjectId.isValid(termino);
    if(esMongoID){
        const servicio = await Servicio.findById(termino)
                            .populate('usuario', ['nombre','rol'] )
                            .populate('categoria', 'nombre');
        return res.json({
            // Indicamos que si el usuario existe nos regrese el arreglo, de lo contrario un arreglo vacio
            results: (servicio) ? [servicio] : [], 
        })
    }

    // Exprecion para busquedas insensibles
    const expReg = new RegExp(termino, 'i' );

    // Buscar servicio por nombre 
    const servicioDB = await Servicio.find({nombre: expReg, estado: true })
                            .populate('usuario', ['nombre','rol'] )
                            .populate('categoria', 'nombre');
    return res.json({
        results: servicioDB, 
    })


}


// Metodo buscar colecciones 
const buscar = (req, res = response) => {

    const {coleccion, termino} = req.params;

    if( !coleccionesPermitidas.includes(coleccion) ) {
        return res.status(400).json({
            msg: `La busqueda ${coleccion} no se encontro`
        })
    }

    switch (coleccion) {
        case 'usuarios':
           buscarUsuarios(termino, res);
            
            break;
        case 'categorias':
            buscarCategoria(termino, res);
            break;
        case 'servicios':
            buscarServicios(termino, res);
            break;
    
        default:
            res.status(500).json({
                msg: 'Faltan colecciones por agregar'
            })
            break;
    }


}


module.exports = {
    buscar,
}