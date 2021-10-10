// Cargar modulo mongoose 
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const tupachanga = express();
const morgan = require('morgan');



const categoriaRutas = require('../routes/categoria')


tupachanga.use(cors());
tupachanga.use(morgan('tiny'));
tupachanga.use(bodyParser.json());
tupachanga.use('categoria', categoriaRutas)

// Funcion Conexion a la base de datos de MongoDB
const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log('Base de datos conectada correctamente');
    } catch (error) {
        console.log(error);
        throw new Error('Error! No se pudo conectar a la base de datos');
    }
}

// Exportacion del modulo de la base de datos
module.exports = {
    dbConnection,

}