// Librerias o Modulos
const {response, request} = require('express');
const bcryptjs            = require('bcryptjs');

// Importar modelo del esquema usuario (DB)
const Usuario = require('../models/usuario');

// Helpers (Funciones)
const {generarJWT} = require('../helpers/generar-jwt')

// Funcion para autenticar el logueo del usuario
const loginUsuario = async(req = request, res = response) => {

   const {correo,password} = req.body;

        try {

            //Validar si el email existe en la BD

              const usuario = await Usuario.findOne({correo}); 
              if(!usuario){
                  return res.status(400).json({
                    msg: 'El correo ingresado no es correcto'
                  });
              }
            // Validar si el estado del usuario esta activo (estadoUsuario: true)
            if(usuario.estadoUsuario === false){
                return res.status(400).json({
                  msg: 'Esta cuenta ha sido suspendida'
                });
            }

            // Validar si el password existe en la BD
               const validpassword = bcryptjs.compareSync(password, usuario.password);
               if(validpassword === false){
                return res.status(400).json({
                  msg: 'La contraseña no es correcta'
                });
            }
            
            // Generar JWT (Json Web Token)
            const token = await generarJWT(usuario.id);
            
            res.json({
                msg: 'Se inicio sesión correctamente',
                usuario,
                token,
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Algo salio mal comuniquese con el administrador'
            })
        }
        
}



module.exports = {
    loginUsuario
}