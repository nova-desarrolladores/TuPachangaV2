// Fichero para manejar las rutas de la pagina principal
const {Router}  = require('express');
const { check } = require('express-validator');

const {validarCampos}  = require('../middlewares/validar-campos');
const {loginUsuario} = require('../controllers/auth-login');

const rutas = Router();


rutas.post('/login',[
    check('correo', 'Ingrese un correo valido').isEmail(),
    check('password', 'El password no es correcto').not().isEmpty(),
    validarCampos 
], loginUsuario);





// Exportar rutas
module.exports = rutas;
