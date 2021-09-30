// Modelo o Esquema tabla usuarios para la base de datos

const {Schema, model} = require('mongoose');

const ServicioSchema = Schema({
    nombreServicio: {
        type: String,
        required: [true, 'El nombre del servicio es obligatorio'],
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción del servicio es obligatoria'],  
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref:'Categoria'
        //required: [true, 'La categoria de servicio es obligatorio'],  
    },
    imagenServicio: {
        type: String,
    },
    galeriaImagen: {
        type: [String],
    },
    estadoServicio:{
        type: Boolean,
        default: true
    },
    fechaPublicacion: {
        type: Date,
        default: Date.now   
    }, 
    precio: {
        type: Number,
        required: [true, 'El precio del servicio es obligatorio'],

    },    
});


// Metodos para sobre escribir metodos
// UsuarioSchema.methods.toJSON = function (){
//     const {password, __v, ...usuario} = this.toObject();
//     return usuario;
// }

// Exportar el modelo (<nombre coleccion>, <esquema creado>)
module.exports = model('Servicio', ServicioSchema);