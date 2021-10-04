const { response } = require("express")



// Validar si el usuario tiene el Rol de Administrador
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

// Validar si el usuario tiene el Rol de Proveedor
const esProveedorRol = (req, res =response, next) => {

    if( !req.usuario ){

        return res.status(500).json({
            msg:'se quiere verificar el rol sin el token '
        });
    }

 const {rol, nombre} =  req.usuario;

 if(rol !== 'PROVEEDOR'){
     return res.status(401).json({
         msg: `${nombre} No tienes permisos de Proveedor para realizar esta accion`
     });
 }


next();
}

module.exports = {
    esAdminRol,
    esProveedorRol,
}