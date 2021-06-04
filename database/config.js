// Conexión con mongoDB
const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {

    try {
        mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB online')
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de conectar con la BD');
    }
}

module.exports = {
    dbConnection
}