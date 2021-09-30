const {response, request} = require('express');
const Categoria = require('../models/categoria');


// Obtener todas las categorias - paginado - total de categorias - populate
//Nota: el metodo de populate trae solo la informacion del usuario y su ID
const obtenerCategorias = async(req, res = response) => {

    // Obtener Categorias Activas
    const [mostrarCategoriasActivas, totalCategoriasActivos] = await Promise.all([
        //Obtener Categorias de la base de datos
        Categoria.find({estado: true}).populate('usuario', 'nombre'),
        // Obtener el total de Categorias en la base de datos
        Categoria.countDocuments({estado: true})
    ]);

    // Obtener Categorias Inactivos
    const [mostrarCategoriasInactivas, totalCategoriasInactivas] = await Promise.all([
        //Obtener los Categorias de la base de datos
        Categoria.find({estado: false}),
        // Obtener el total de Categorias en la base de datos
        Categoria.countDocuments({estado: false})
    ]);

    res.json({
        msg: 'Obteniendo Categorias',
        mostrarCategoriasActivas,
        totalCategoriasActivos,
        mostrarCategoriasInactivas,
        totalCategoriasInactivas
    });
}

// Obtener una sola categoria - pupulate {<regresa el objeto de la categoria>}
const obtenerUnaCategoria = async(req, res = response) => {

    const {id} = req.params;
    const unaCategoria = await Categoria.findById(id).populate('usuario', 'nombre' );

    res.json({
        unaCategoria
    })
}


// Crear una categoria
const crearCategoria = async(req = request, res = response) => {

    const nombre = req.body.nombre.toUpperCase();

    // Verificar si ya existe una categoria y clasificacion igual en DB
    const categoriaDB = await Categoria.findOne({nombre});
    //const clasificacionDB = await Categoria.findOne({clasificacion});

    if (categoriaDB){
        res.status(400).json({
            msg: `La categoria: -${nombre}- ya existe en la DB`,
        });
    }
       
    // Elegir datos especificos a guardar
    const datos = {
        nombre,
        usuario: req.usuario._id,
    }

    // Guardar los datos en la DB
    const nuevaCategoria = new Categoria(datos);
    
    //Metodo de moongoose para guardar
    await nuevaCategoria.save();

   res.status(201).json(nuevaCategoria);
}



// Actualizar categoria
const actualizarCategoria = async(req, res = response) => {

    const {id} = req.params;
    const {estado, usuario, ...resto} = req.body;

    resto.nombre = resto.nombre.toUpperCase(); // Recogemos el nombre para actualizarlo en mayuscula
    resto.usuario = req.usuario._id; // Recogemos el usuario para saber quiem hizo la ultima modificacion

    const categoria = await Categoria.findByIdAndUpdate(id, resto).populate('usuario', 'nombre');

    res.json({
        categoria
    });
}


// Eliminar categoria

const eliminarCategoria = async(req, res = response) => {

    const {id} = req.params;

    const desactivarCategoria = await Categoria.findByIdAndUpdate(id, {estado: false}).populate('usuario', 'nombre');

    res.json({
        desactivarCategoria
    })
}

module.exports = {
    crearCategoria,
    obtenerCategorias,
    obtenerUnaCategoria,
    actualizarCategoria,
    eliminarCategoria
}