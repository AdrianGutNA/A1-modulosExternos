//Iniciar con: node serverAxios.js

const axios = require('axios');

let url = "https://jsonplaceholder.typicode.com/todoss";

let data = {
    nombre: "Adrian",
    apellido: "Gutiérrez",
    edad: 24
}

let config = {
    headers: {
        Autorization: "Datos"
    }
}

axios.post(url, data, config).then(response => {
    let persona = response.data;
    console.log("Mi nombre es: ", persona.nombre, "Me apellido: ", persona.apellido, "y tengo: ", persona.edad, "años");
});