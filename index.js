require('dotenv').config();

const express = require('express');
const cors = require('cors');
const {dbConnection} = require('./database/config')

// Crear servidor Express
const app = express();

// Configuración cors
app.use(cors());

// Conexion a mongoDB
dbConnection();

// Rutas
app.get( '/', (req, res) => {
    
    res.json({
        ok: true,
        msg: 'Hola amigos'
    })

} );

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});