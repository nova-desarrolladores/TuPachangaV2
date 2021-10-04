const {response, request} = require('express');

// Importar modelo del esquema usuario (DB)
const Servicio = require('../models/servicio');

// Funcion GET para obtener el servicio por HTTP
const getServicio = async (req = request, res = response) => {    

    const servicios = await Servicio.find();

    const {name} = req.query;

    res.json({
        //msg: 'get servicio',
        servicios
        
        
    });
}

// Funcion PUT para actualizar datos del servicio enviados por HTTP
const putServicio = async(req = request, res = response) => {
    
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const servicio = await Servicio.findByIdAndUpdate(id, resto);

    res.json({
        //msg: 'put servicio',
        servicio    
         
    });
}

// Funcion POST para crear servicios enviados por HTTP
const postServicio = async(req = request, res = response) => {    

    //const {nombre} = req.body;
    const { 
        nombreServicio,
        descripcion,
        tipoServicio,
        galeriaImagen,
        estadoServicio,
        fechaPublicacion,
        precio
    } = req.body;
    
    const servicio = new Servicio ({
        nombreServicio,
        descripcion,
        tipoServicio,
        galeriaImagen,
        estadoServicio,
        fechaPublicacion,
        precio
    });

    await servicio.save();

    res.json({
        //msg: 'post servicio',
        servicio
         
    });
}

// Funciones para eliminar servivios por HTTP
const deleteServicio = async(req = request, res = response) => {

    const { id } = req.params;
    const { _id, ...resto } = req.body;
    
    const servicio = await Servicio.findByIdAndDelete(id);
   
    res.json({
        //msg: 'delete servicio',  
        servicio      
    });
}


// Exportar controladores
module.exports = {
    getServicio,
    putServicio,
    postServicio,
    deleteServicio,
}