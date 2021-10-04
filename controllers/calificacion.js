const {response, request} = require('express');

// Importar modelo del esquema usuario (DB)
const Calificacion = require('../models/calificacion');

// Funcion GET para obtener el Calificacion por HTTP
const getCalificacion = async (req = request, res = response) => {    

     const calificacion = await Calificacion.find();

     //const {comentario} = req.query;

    res.json({
        msg: 'get calificacion',
        calificacion
        
        
    });
}

// Funcion PUT para actualizar datos del calificacion enviados por HTTP
const putCalificacion = async(req = request, res = response) => {
    
     const { id } = req.params;
     const { _id, ...resto } = req.body;

    const calificacion = await Calificacion.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'put calificacion',
        calificacion    
         
    });
}

// Funcion POST para crear calificacion enviados por HTTP
const postCalificacion = async(req = request, res = response) => {    

    //const {nombre} = req.body;
    const { 
        usuario,
        categoria,
        comentario,
        puntuacion,
        fechaCalificacion,
        
    } = req.body;
    
    const calificacion = new Calificacion ({
        usuario,
        categoria,
        comentario,
        puntuacion,
        fechaCalificacion,
        
    });

    await calificacion.save();

    res.json({
        msg: 'post calificacion',
        calificacion
         
    });
}

// Funciones para eliminar calificacion por HTTP
const deleteCalificacion = async(req = request, res = response) => {

    const { id } = req.params;
    //const { _id, ...resto } = req.body;
    
    const calificacion = await Calificacion.findByIdAndDelete(id);
   
    res.json({
        msg: 'delete calificacion',  
        calificacion      
    });
}


// Exportar controladores
module.exports = {
    getCalificacion,
    putCalificacion,
    postCalificacion,
    deleteCalificacion,
}