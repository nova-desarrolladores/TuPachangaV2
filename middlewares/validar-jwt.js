const { response } = require('express');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');


const validarJWT = async(req, res = response, next) => {

    const token = req.header('auth-token');
    
    if(!token){
        return res.status(401).json({
            msg: 'No se encontro un token en la peticion'
        })
    }

    try {
        
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        // leer el tipo de usuario que corresponde al uid
        const usuario = await Usuario.findById(uid);

        // Si el usuario esta elimidado de la DB arroje undefine
        if(!usuario){
            return res.status(401).json({
                msg: 'Token invalido - usuario no existe en la DB',
            });
        }

        // Verificar si el usuario esta activo
        if(!usuario.estadoUsuario){
            return res.status(401).json({
                msg: 'Token invalido - usuario desactivado estado: false',
            });
        }

        req.usuario = usuario;
        
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token invalido'
        });
        
    }

}

module.exports = {
    validarJWT
}