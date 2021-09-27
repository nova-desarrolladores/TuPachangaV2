const {response, request} = require('express');

// Importar modelo del esquema usuario (DB)
const Servicio = require('../models/servicio');

// Funcion GET para obtener el servicio por HTTP
const getServicio = async (req = request, res = response) => {    

    const {name} = req.query;

    res.json({
        msg: 'get servicio',
        name
        
    });
}

// Funcion PUT para actualizar datos del servicio enviados por HTTP
const putServicio = async(req = request, res = response) => {
    
    const {id} = req.params;
    res.json({
        msg: 'put servicio',
        id    
         
    });
}

// Funcion POST para crear servicios enviados por HTTP
const postServicio = async(req = request, res = response) => {    

    //const {nombre} = req.body;
    const body = req.body;
    const servicio = new Servicio (body);

    await servicio.save();

    res.json({
        msg: 'post servicio',
        servicio
         
    });
}

// Funciones para eliminar servivios por HTTP
const deleteServicio = async(req = request, res = response) => {
   
    res.json({
        msg: 'delete servicio',        
    });
}


// Exportar controladores
module.exports = {
    getServicio,
    putServicio,
    postServicio,
    deleteServicio,
}