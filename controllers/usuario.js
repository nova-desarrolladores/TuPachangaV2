const {response, request} = require('express');
const bcryptjs = require('bcryptjs');


// Importar modelo del esquema usuario 
const Usuario = require('../models/usuario');

// Funciones para las rutas del usuario enviadas por HTTP
const getUsuario = (req = request, res = response) => {

    //Query params en la ruta de la URL
    const query = req.query;

    res.json({
        msg: 'Obteniendo datos del usuario',
        query,
    });
}

const putUsuario = (req = request, res = response) => {


    const id = req.params.id;

    res.json({
        msg: 'actualizando datos del usuario',
        id
    });
}

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
    //new Usuario toma el modelo de la BD usuario.
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

    // Verificar si el correo existe

    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail){ 
        return res.status(400).json({
            msg:'Ese correo ya esta en uso'
        }) 
    }

    // Encriptar contrasenia
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password, salt);

    // Guardar datos en la DB de Mongo
    await usuario.save();

    res.json({
        msg: 'Datos del usuario guardados correctamente',
       usuario,
    });
}

const deleteUsuario = (req = request, res = response) => {
    res.json({
        msg: 'elimindando datos del usuario',
    });
}


// Exportar controladores

module.exports = {
    getUsuario,
    putUsuario,
    postUsuario,
    deleteUsuario,
}