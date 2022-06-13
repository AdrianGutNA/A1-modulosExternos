//Iniciar con: node serverExpress.js

const express = require('express');

var app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send({
        data: 'Servidor de Express - Adrián Gutiérrez'
    })
});

app.listen(port, () => {
    console.log('Aplicación Iniciada');
})