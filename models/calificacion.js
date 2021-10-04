// Modelo o Esquema tabla calificacion para la base de datos

const {Schema, model} = require('mongoose');

const CalificacionSchema = Schema({    
    usuario: {
        type: Schema.Types.ObjectId,
        ref:'Usuario'  
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref:'Categoria',
        required: true
    },
    puntuacion: {
        type: Number,
        required: [true, 'El número de Calificacion es obligatorio'],
    },
    comentario: {
        type: String,
    },
    fechaCalificacion: {
        type: Date,
        default: Date.now   
    }, 
      
});

// Metodos para sobre escribir metodos
// UsuarioSchema.methods.toJSON = function (){
//     const {password, __v, ...usuario} = this.toObject();
//     return usuario;
// }

// Exportar el modelo (<nombre coleccion>, <esquema creado>)
module.exports = model('Calificacion', CalificacionSchema);