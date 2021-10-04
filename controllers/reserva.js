const {response, request} = require('express');

// Importar modelo del esquema usuario (DB)
const Reserva = require('../models/reserva');

// Funcion GET para obtener el reserva por HTTP
const getReserva = async (req = request, res = response) => {    

    const reservas = await Reserva.find();

    const {numReserva} = req.query;

    res.json({
        //msg: 'get reserva',
        reservas
        
        
    });
}

// Funcion PUT para actualizar datos del reserva enviados por HTTP
const putReserva = async(req = request, res = response) => {
    
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const reserva = await reserva.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'put reserva',
        reserva    
         
    });
}

// Funcion POST para crear reservas enviados por HTTP
const postReserva = async(req = request, res = response) => {    

    //const {nombre} = req.body;
    const { 
        numReserva,
        
    } = req.body;
    
    const reserva = new Reserva ({
        numReserva,
        
    });

    await Reserva.save();

    res.json({
        //msg: 'post reserva',
        reserva
         
    });
}

// Funciones para eliminar servivios por HTTP
const deleteReserva = async(req = request, res = response) => {

    const { id } = req.params;
    const { _id, ...resto } = req.body;
    
    const reserva = await Reserva.findByIdAndDelete(id);
   
    res.json({
        msg: 'delete reserva',  
        reserva      
    });
}


// Exportar controladores
module.exports = {
    getReserva,
    putReserva,
    postReserva,
    deleteReserva,
}