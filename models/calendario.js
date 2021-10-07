const {Schema, model} = require('mongoose');


const CalendarioSchema = Schema({
    
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    servicio: {
        type: Schema.Types.ObjectId,
        ref: 'Servicio',
        required: true
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Servicio',
        required: true
    },

    descripcion:{
        type: String,

    },
    fechaDisponible: {
        type: Date.now,
        required: true
    },
    fechaReserva: {
        type: Date.now,
        required: true
    }

});




module.exports = model('Calendario', CalendarioSchema)