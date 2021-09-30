
// Modelo o Esquema tabla usuarios para la base de datos

const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    apellidoPaterno: {
        type: String,
        required: [true, 'El apellido paterno es obligatorio'],  
    },
    apellidoMaterno: {
        type: String,
        required: [true, 'El apellido materno es obligatorio'],  
    },
    direccion: {
        type: String,
        required: [true, 'La direccion es obligatorio'],  
    },
    estado: {
        type: String,
        required: [true, 'El estado es obligatorio'],  
    },
    municipio: {
        type: String,
        required: [true, 'El municipio es obligatorio'],  
    },
    telefono: {
        type: Number,
        required: [true, 'El telefono es obligatorio'],  
    },
    rfc: {
        type: String,
        unique: true,
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true,  
    },
    password:{
        type: String,
        required: [true, 'La contraseña es obligatorio'],
    },
    img: {
        type: String,
    },
    rol:{
        type: String,
        required: true,
        enum: ['ADMIN','PROVEEDOR','CONSUMIDOR'],
    },
    estadoUsuario:{
        type: Boolean,
        default: true
    },
});


// Metodos para sobre escribir metodos
UsuarioSchema.methods.toJSON = function (){
    const {password, __v, ...usuario} = this.toObject();
    return usuario;
}

// Exportar el modelo (<nombre coleccion>, <esquema creado>)
=======
// Modelo o Esquema tabla usuarios para la base de datos

const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    apellidoPaterno: {
        type: String,
        required: [true, 'El apellido paterno es obligatorio'],  
    },
    apellidoMaterno: {
        type: String,
        required: [true, 'El apellido materno es obligatorio'],  
    },
    direccion: {
        type: String,
        required: [true, 'La direccion es obligatorio'],  
    },
    estado: {
        type: String,
        required: [true, 'El estado es obligatorio'],  
    },
    municipio: {
        type: String,
        required: [true, 'El municipio es obligatorio'],  
    },
    telefono: {
        type: Number,
        required: [true, 'El telefono es obligatorio'],  
    },
    rfc: {
        type: String,
        unique: true,
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true,  
    },
    password:{
        type: String,
        required: [true, 'La contraseña es obligatorio'],
    },
    img: {
        type: String,
    },
    rol:{
        type: String,
        required: true,
        enum: ['ADMIN','PROVEEDOR','CONSUMIDOR'],
    },
    estadoUsuario:{
        type: Boolean,
        default: true
    },
});


// Metodos para sobre escribir metodos
UsuarioSchema.methods.toJSON = function (){
    const {password, __v, _id, ...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario;
}

// Exportar el modelo (<nombre coleccion>, <esquema creado>)

module.exports = model('Usuario', UsuarioSchema);