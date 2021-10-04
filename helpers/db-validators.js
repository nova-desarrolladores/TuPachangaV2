/* El archivo db-validators.js verifica si 
los datos de las colecciones
en verdad existan en la base de datos.
*/

const Role = require('../models/rol');
const Usuario = require('../models/usuario');
const Categoria =  require('../models/categoria');
const Servicio = require('../models/servicio');
const Reserva = require('../models/reserva');
const Calificacion = require('../models/calificacion');


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

// Verificar si la categoria existe por id contra la base de datos
const existeCategoriaPorId = async(id) => {
    
    const existeCategoria = await Categoria.findById(id);
        if (!existeCategoria){ 
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
const existeReservaPorId = async(id ='') => {

    const existeReservaPorId = await Reserva.findById(id);
        if (!existeReservaPorId){ 
            throw new Error (`Este id: ${id} no existe`);
        }
}

// Verificar si el rol existe por id contra la base de datos
const existeRolPorId = async(id ='') => {

    const RolPorId = await Role.findById(id);
        if (!RolPorId){ 
            throw new Error (`Este id: ${id} no existe`);
        }
}

const existeCalificacionPorId = async(id ='') => {

    const existeCalificacionPorId = await Calificacion.findById(id);
        if (!existeCalificacionPorId){ 
            throw new Error (`Este id: ${id} no existe`);
        }
}



// Exportaciones de las funciones
module.exports = {
    esUnRolValido,
    existeEmail,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeServicioPorId,
    existeReservaPorId,
    existeRolPorId,
    existeCalificacionPorId,

}