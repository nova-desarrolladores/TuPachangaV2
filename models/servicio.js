// Modelo o Esquema tabla usuarios para la base de datos

const {Schema, model} = require('mongoose');

const ServicioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del servicio es obligatorio'],
        unique: true
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción del servicio es obligatoria'],  
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref:'Categoria',
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    }, 
    imagenServicio: {
        type: String,
    },
    galeriaImagen: {
        type: String,
    },
    estado:{
        type: Boolean,
        default: true,
        required: true
    },
    fechaPublicacion: {
        type: Date,
        default: Date.now   
    }, 
    precio: {
        type: Number,
        default: 0
    },
      
});


//Metodos para sobre escribir metodos
ServicioSchema.methods.toJSON = function (){
    const {estado, __v, ...datos} = this.toObject();
    return datos;
}

// Exportar el modelo (<nombre coleccion>, <esquema creado>)
module.exports = model('Servicio', ServicioSchema);