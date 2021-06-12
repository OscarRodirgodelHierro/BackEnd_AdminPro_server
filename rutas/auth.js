/*
    ruta ---> 'api/login'
 */

const { Router } = require('express');
const { login } = require('../controllers/auth');
const { check, validationResult } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campos');

const router = Router();

router.post( '/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contaseña es obligatoria').notEmpty(),
    validarCampos
], login )


module.exports = router;