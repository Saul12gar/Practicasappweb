const express = require ('express');
const app = express();
const PORT = 3000;
app.use (express.json());

let tareas=[
    {id:1,nombre:'Español'},
    {id:2,nombre:'Matematicas'},
    {id:3,nombre:'Ciencias'},
    {id:4,nombre:'Hstoria'},
    {id:5,nombre:'Fisica'}
    ];

    app.get('/tareas',(req,res)=>{
        res.json(tareas);
       
    });
    
    //Read
    app.get('/tareas/:id',(req,res)=>{
        const id= parseInt(req.params.id);
        const materia = tareas.find(e=> e.id===id);
        if (materia){
            res.json(materia);
        }else{
            res.status(404).send('tarea no encontrado'); 
        }
    });

    //Create
    app.post('/tareas',(req,res)=>{
        const nuevatarea={
            id:tareas.length+1,
            nombre:req.body.nombre
        };
        tareas.push(nuevatarea);
        res.status(201).json(nuevatarea);
    });
    
    
    //update
    app.put('/tareas/:id',(req,res)=>{
        const id=parseInt(req.params.id);
        const materia=tareas.find(e=>e.id===id);
        if (materia){
            materia.nombre=req.body.nombre;
            res.json(materia);
        } else{
            res.status(404).send('Tarea no encontrada');
        }
    });
    
    //delete
    app.delete('/tareas/:id',(req,res)=>{
        const id=parseInt(req.params.id);
        const index=tareas.findIndex(e=>e.id===id);
        if(index!==-1){
            tareas.splice(index,1);
            res.send('tarea eliminada');
        }else{
            res.status(404).send('tarea no encontrado');
        }
    });

    app.listen (PORT,()=>{
        console.log('Servidor corriendo en http://localhost:${PORT}');
    });