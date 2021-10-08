const {response, request} = require('express');

// Importar modelo del esquema usuario (DB)
const Servicio = require('../models/servicio');


// Obtener todos los servicios - paginado - total de servicios - populate
//Nota: el metodo de populate trae solo la informacion del usuario y su ID
const getServicios = async (req, res = response) => {    

    // Obtener Servicios Activos
    const [mostrarServiciosActivos, totalServiciosActivos] = await Promise.all([
        //Obtener Categorias de la base de datos
        Servicio.find({estado: true }).sort('-_id')
                                    .populate('usuario', ['nombre','rol'])
                                    .populate('categoria', 'nombre'),
                                                           
        // Obtener el total de Categorias en la base de datos
        Servicio.countDocuments({estado: true})
    ]);

    // Obtener Categorias Inactivos
    const [mostrarServiciosInactivas, totalServiciosInactivas] = await Promise.all([
        //Obtener los Categorias de la base de datos
        Servicio.find({estado: false}),
        // Obtener el total de Categorias en la base de datos
        Servicio.countDocuments({estado: false})
    ]);

    res.json({
        msg: 'Obteniendo Todos los Servicios',
        mostrarServiciosActivos,
        totalServiciosActivos,
        mostrarServiciosInactivas,
        totalServiciosInactivas,
    });
}

// Obtener una solo servicio - pupulate {<regresa el objeto del servicio>}
const getUnServicio = async (req, res = response) => {
    const {id} = req.params;
    const servicioPorID = await Servicio.findById(id)
                            .populate('usuario', ['nombre','rol'] )
                            .populate('categoria', 'nombre');
                            // .populate('usuario', 'rol');

    res.json({
        servicioPorID
    })
}


// Funcion POST para crear servicios enviados por HTTP
const postServicio = async(req, res = response) => {    

    const { estado, usuario, ...body } = req.body;

    // Comprobar que este nombre ya esta registrado en la DB
    const servicioDB = await Servicio.findOne({nombre: body.nombre});

    if(servicioDB){
        return res.status(400).json({
            msg: `El servicio ${body.nombre} ya existe`,
        });
    }else{

        const datos = {
            ...body,
            nombre: body.nombre.toUpperCase(),
            usuario: req.usuario._id,
        };
        
        const servicio = new Servicio (datos);
    
        await servicio.save();
    
        res.status(201).json({
            msg: 'Servicio creado',
            servicio});
    }


}

// Funcion PUT para actualizar datos del servicio enviados por HTTP
const putServicio = async(req = request, res = response) => {
    
    const { id } = req.params;
    const {estado, usuario, ...resto } = req.body;

    if(resto.nombre){
        resto.nombre = resto.nombre.toUpperCase()
        
        // Usuario que actualizo el servicio
        resto.usuario = req.usuario._id;
    }

    
    const servicio = await Servicio.findByIdAndUpdate(id, resto);

    res.json({
        //msg: 'put servicio',
        servicio    
         
    });
}

// Funciones para eliminar servivios por HTTP - Solo Administrador
const deleteServicio = async(req = request, res = response) => {

    const { id } = req.params;
    
    const servicioEliminado = await Servicio.findByIdAndUpdate(id, {estado: false});
   
    res.json({

        msg: 'delete servicio',  
        servicioEliminado      

    });
}


// Exportar controladores
module.exports = {
    getServicios,
    getUnServicio,
    putServicio,
    postServicio,
    deleteServicio,
}