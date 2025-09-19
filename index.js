const express = require("express"); //Importamos la libreria Express
const app = express(); //Para guardar la instancia del servidor

const port = 3000; //Definimos el puerto recomendado

const students = require("./data"); //Importamos los datos de data.js

app.get("/user-info/:id" , (req, res) => { //Defino GET, lo volvemos dinamico y :id puede ser cualquier numero, req objeto con solicitud del cliente, res objeto para responder
    const IdStudent = req.params.id; //Obtiene el valor que puso el cliente
    if (students[IdStudent]) { //Valida existencia del ID
        res.json(students[IdStudent]); //Devuelve le informacion en .json
    }else{
          res.status(404).json({error: "Student not found :("});
    }
});

app.listen(port, () => { //Iniciamos el servidor con el puerto
    console.log(`Example app listening on port ${port}`); //Muestro la direccion 
});