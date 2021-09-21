const {response, request} = require('express');
const bcryptjs = require('bcryptjs');


// Importar modelo del esquema usuario (DB)
const Usuario = require('../models/usuario');

// Funcion GET para obtener el usuario enviados por HTTP
const getUsuario = async (req = request, res = response) => {

    // Obtener Usuarios Activos
    const [mostrarUsuariosActivos, totalUsuariosActivos] = await Promise.all([
        //Obtener los usuarios de la base de datos
        Usuario.find({estadoUsuario: true}),
        // Obtener el total de usuarios en la base de datos
        Usuario.countDocuments({estadoUsuario: true})
    ]);

    // Obtener Usuarios Inactivos
    const [mostrarUsuariosInactivos, totalUsuariosInactivos] = await Promise.all([
        //Obtener los usuarios de la base de datos
        Usuario.find({estadoUsuario: false}),
        // Obtener el total de usuarios en la base de datos
        Usuario.countDocuments({estadoUsuario: false})
    ]);

    res.json({
        msg: 'Obteniendo datos del usuario',
        mostrarUsuariosActivos,
        totalUsuariosActivos,
        mostrarUsuariosInactivos,
        totalUsuariosInactivos
    });
}

// Funcion PUT para actualizar datos del usuario enviados por HTTP
const putUsuario = async(req = request, res = response) => {

    const {id} = req.params;
    const {_id,password, correo, ...resto} = req.body;

    // Validar si el id que que se manda es el mismo contra base de datos
    if (password){
        // Encriptar contrasenia
    const salt = bcryptjs.genSaltSync(10);
    resto.password = bcryptjs.hashSync(password, salt);
    }

    const infoUsuario = await Usuario.findByIdAndUpdate(id , resto);

    res.json({
        msg: 'Datos del usuario actualizados correctamente',
        infoUsuario,
    });
}

// Funcion POST para crear usuarios enviados por HTTP
const postUsuario = async(req = request, res = response) => {

    // Constante body que simula lo que recibe del formulario de registro
    const {
            nombre,
            apellidoPaterno,
            apellidoMaterno,
            direccion,
            estado,
            municipio,
            telefono,
            rfc,
            correo,
            password,
            img,
            rol,} = req.body;
    // Constante usuario almacena lo que recibe del formulario "body",
    //new Usuario toma el modelo del esquema de la BD usuario.
    const usuario = new Usuario({
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        direccion,
        estado,
        municipio,
        telefono,
        rfc,
        correo,
        password,
        img,
        rol});


    // Encriptar contrasenia
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password, salt);

    // Guardar datos en la DB de Mongo
    await usuario.save();

    res.json({
        msg: 'Usuario creado correctamente',
       usuario,
    });
}

// Funciones para eliminar el usuario o datos del usuario por HTTP
const deleteUsuario = async(req = request, res = response) => {

    const {id} = req.params;
    // Borrar el usuario completo (Funcion no recomendable)
    //const eliminarUsuario = await Usuario.findByIdAndDelete(id)

    //Desactivar cuenta de usuaurio (funcion recomendable) //Metodo para el ADMINISTRADOR
    const desactivarCuenta =  await Usuario.findByIdAndUpdate(id, {estadoUsuario: false});

    res.json({
        msg: 'elimindando datos del usuario',
        //eliminarUsuario
        desactivarCuenta
    });
}


// Exportar controladores
module.exports = {
    getUsuario,
    putUsuario,
    postUsuario,
    deleteUsuario,
}