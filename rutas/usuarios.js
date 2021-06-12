/* 
    Ruta --> /api/usuarios
*/

const { Router } = require('express');
const { validarCampos } = require('../middleware/validar-campos');
const { check } = require('express-validator');
const { validarJWT } = require('../middleware/validar-jwt');

const { getUsuarios, crearUsuario, actualizarUsuario, borrarUsuario } = require( '../controllers/usuarios' );

const router = Router();

router.get( '/', validarJWT ,getUsuarios );

router.post( '/', [
        check('nombre', 'El nombre es obligatorio').notEmpty(),
        check('password', 'El password es obligatorio').notEmpty(),
        check('email', 'El email es obligatorio').notEmpty().isEmail(),
        validarCampos,
    ],  crearUsuario );

router.put( '/:id', [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').notEmpty(),
        check('role', 'El role es obligatorio').notEmpty(),
        check('email', 'El email es obligatorio').notEmpty().isEmail(),
        validarCampos,
] ,actualizarUsuario );

router.delete( '/:id', validarJWT,borrarUsuario );

module.exports = router;
