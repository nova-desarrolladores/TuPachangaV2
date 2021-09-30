// Cargar modulo mongoose 
const mongoose =  require('mongoose');

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