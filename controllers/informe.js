const { response } = require("express");

const Categoria = require('../models/categoria');
const Servicio = require('../models/servicio');
const Usuario = require('../models/usuario');


// Obtener total de categorias
const obtenerTotalCategorias = async(req, res = response) => {

    const totalCategorias = await Categoria.countDocuments({estado: true});
    
    try {
        if(totalCategorias){

          return res.json({
                msg: 'El numero de categorias que existen son:',
                totalCategorias
            })
        }
        res.status(500).json({
            msg: `No se encontraron categorias en la DB`
        });
        

    } catch (error) {

        throw new Error(`Algo salio mal ${error}`);
        
    }
}

// Obtener total de servicios
const obtenerTotalServicios = async(req, res = response) => {

    const totalServicios = await Servicio.countDocuments({estado: true});
    
    try {
        if(totalServicios){

          return res.json({
                msg: 'El numero de servicios que existen son:',
                totalServicios
            })
        }
        res.status(500).json({
            msg: `No se encontraron servicios en la DB`
        });
        

    } catch (error) {

        throw new Error(`Algo salio mal ${error}`);
        
    }
}


const obtenerTotalProveedores = async(req, res = response) => {

    const totalProveedores = await Usuario.countDocuments({rol: 'PROVEEDOR'})
    try {
        if(totalProveedores){
            
            res.json({
                msg: 'El total de proveedores son: ',
                totalProveedores,
            });
        }
        res.status(400).json({
            msg: `No se encontraron proveedores en la DB`
        });

    } catch (error) {
        throw new Error(`Algo salio mal ${error}`);
    }

}


const obtenerTotalConsumidores = async(req, res = response) => {

    const totalConsumidores = await Usuario.countDocuments({rol: 'CONSUMIDOR'})
    try {
        if(totalConsumidores){
            
            res.json({
                msg: 'El total de consumidores son: ',
                totalConsumidores,
            });
        }
        res.status(400).json({
            msg: `No se encontraron consumidores en la DB`
        });

    } catch (error) {
        throw new Error(`Algo salio mal ${error}`);
    }

}

module.exports = {
    obtenerTotalCategorias,
    obtenerTotalConsumidores,
    obtenerTotalServicios,
    obtenerTotalProveedores,
}