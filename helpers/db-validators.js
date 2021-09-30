/* El archivo db-validators.js verifica si los usuarios
en verdad existen en la base de datos.
*/

const Role = require('../models/rol');
const Usuario = require('../models/usuario');
const Servicio = require('../models/servicio');

// Verificar si el rol de usaurio existe en la base de datos
const esUnRolValido = async( rol = '') =>{
           
    const existeRol =  await Role.findOne({ rol });
        if(!existeRol){
        throw new Error (`El rol ${rol} no esta registrado en la base de datos`);
        }     
}

// Verificar si el correo existe en la base de datos
const existeEmail = async(correo ='') => {

    const Emailexiste = await Usuario.findOne({correo});
        if (Emailexiste){ 
            throw new Error ('Este correo ya esta registrado');
        }
}

// Verificar si el usuario existe por id contra la base de datos
const existeUsuarioPorId = async(id ='') => {

    const existeUsuario = await Usuario.findByIdAndUpdate(id);
        if (!existeUsuario){ 
            throw new Error (`Este id: ${id} no existe`);
        }
}
// Verificar si el servicio existe por id contra la base de datos
const existeServicioPorId = async(id ='') => {

    const existeServicioPorId = await Servicio.findById(id);
        if (!existeServicioPorId){ 
            throw new Error (`Este id: ${id} no existe`);
        }
}

// Exportaciones de las funciones
module.exports = {
    esUnRolValido,
    existeEmail,
    existeUsuarioPorId,
    existeServicioPorId
}