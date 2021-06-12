require('dotenv').config();

const express = require('express');
const cors = require('cors');
const {dbConnection} = require('./database/config')

// Crear servidor Express
const app = express();

// Configuración cors
app.use(cors());

//lectura y parseo del body
app.use(express.json());

// Conexion a mongoDB
dbConnection();

// Rutas
app.use( '/api/usuarios', require('./rutas/usuarios') );
app.use( '/api/login', require('./rutas/auth') );

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});