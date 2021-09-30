// Paquetes o librerias de terceros
const express = require('express');
const cors    = require('cors');


// Importacion  de la conexion a la base de datos
const {dbConnection} = require('../database/config');

class Server {

    constructor(){
        // Inicializaciones de paquetes
        this.app = express();
        this.port = process.env.PORT;
        
        // Rutas que tomara el metodo Routes
        this.pathAuthLogin = '/api/auth';
        this.rutaCategoria = '/api/categoria';
        this.rutaUsuario = '/api/usuario';
        this.rutaServicio = '/api/servicio';

    /*Llamada de metodos de la clase Server */  
        // Metodo que conecta a la Base de datos
        this.conectarDB();

        // Metodo middleware
        this.middleware();

        // Metodo Rutas
        this.routes();
    }

    // Metodo asincrono para conectar a DB
    async conectarDB () {
        await dbConnection();
    }

    // Metodo Middleware
    middleware(){
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Carpeta o directorio public
        this.app.use(express.static('public'));
    }

    // Metodo para configurar Rutas
    routes(){
        
        //Ruta cargar fichero de rutas del usuario
        this.app.use(this.rutaUsuario, require('../routes/usuario'));
        this.app.use(this.pathAuthLogin, require('../routes/auth-login'));
        this.app.use(this.rutaCategoria, require('../routes/categoria'));
        this.app.use(this.rutaServicio, require('../routes/servicio'));
    }

    // Metodo para verificar si el servidor funciona
    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en', this.port);
        })
    }

}

// Exportar modulo actual de la clase
module.exports = Server;