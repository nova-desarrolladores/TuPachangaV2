const {Schema, model} = require('mongoose');


const RolSchema = Schema({
    rol:{
        type: String,
        required: [true, 'El usuario es obligatorio']
    },
   
});


module.exports = model('Role', RolSchema);