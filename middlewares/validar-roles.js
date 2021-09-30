const { response } = require("express")


const esAdminRol = (req, res =response, next) => {

    if( !req.usuario ){

        return res.status(500).json({
            msg:'se quiere verificar el rol sin el token '
        });
    }

 const {rol, nombre} =  req.usuario;

 if(rol !== 'ADMIN'){
     return res.status(401).json({
         msg: `${nombre} No tienes permisos de Administrador para realizar esta accion`
     });
 }


next();
}

module.exports = {
    esAdminRol,
}