//Paquetes propias de Node
require('dotenv').config();

// Paquetes de Node de tercerors
const Server = require('./models/server');

// Instancia de nuevo servidor
const server = new Server();

// Escuchando el servidor
server.listen();
 
