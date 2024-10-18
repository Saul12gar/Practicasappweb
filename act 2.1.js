const express = require ('express');
const app = express();
const PORT = 3000;
app.use (express.json());

let tareas=[
    {id:1,nombre:'Español'},
    {id:2,nombre:'Matematicas'},
    {id:3,nombre:'Ciencias'}
    ];

    app.get('/tareas',(req,res)=>{
        res.json(tareas);
       
    });
    
    app.get('/tareas/:id',(req,res)=>{
        const id= parseInt(req.params.id);
        const nombre = tareas.find(e=> e.id===id);
        if (nombre){
            res.json(nombre); //valida
        }else{
            res.status(404).send('tarea no encontrado'); //no encuentra
        }
    });
