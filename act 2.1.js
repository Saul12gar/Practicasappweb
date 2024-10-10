const express = require ('express');
const app = express();
const PORT = 3000;
app.use (express.json());

let tareas=[
    {id:1,nombre:'Pedro Pascal'},
    {id:2,nombre:'Goku Perez'},
    {id:3,nombre:'Cristiano Ronaldo'}
    ];
