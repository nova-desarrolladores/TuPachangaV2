// Modelo o Esquema tabla usuarios para la base de datos

const {Schema, model} = require('mongoose');

const ReservaSchema = Schema({    
    // usuario: {
    //     type: Schema.Types.ObjectId,
    //     ref:'Usuario'
    //     //required: [true, 'La categoria de servicio es obligatorio'],  
    // },
    // servicio: {
    //     type: Schema.Types.ObjectId,
    //     ref:'Servicio'
    //     //required: [true, 'La categoria de servicio es obligatorio'],  
    // },
    numReserva: {
        type: Number,
        required: [true, 'El número de reserva es obligatorio'],
    },
      
});

// Metodos para sobre escribir metodos
// UsuarioSchema.methods.toJSON = function (){
//     const {password, __v, ...usuario} = this.toObject();
//     return usuario;
// }

// Exportar el modelo (<nombre coleccion>, <esquema creado>)
module.exports = model('Reserva', ReservaSchema);