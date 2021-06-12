const bcrypt = require('bcryptjs');
const { response } = require('express');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');

const login = async( req, res = response ) => {
    
    const { email, password } = req.body;

    try {
        
        // Comprobar email
        const usuarioDB = await Usuario.findOne({ email });

        if ( !usuarioDB ) {
            return res.status(404).json({
                ok: false,
                msg: ' El email o la contraseña no son correctos'
            });
        }

        // Comprobar password
        const validPassword = bcrypt.compareSync( password, usuarioDB.password );

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: ' El email o la contraseña no son correctos'
            });
        }

        // Generar token

        const token = await generarJWT( usuarioDB.id );


        res.json({
            ok: true,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error, al logar el usuario'
        });
    }
}

module.exports = {
    login
}