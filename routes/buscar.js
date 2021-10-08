const {Router} = require('express');

const { buscar } = require('../controllers/buscar');


const rutas = Router();


rutas.get('/:coleccion/:termino',buscar);




module.exports = rutas;