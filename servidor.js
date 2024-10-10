const express = require ('express');
const app = express();
const PORT = 3000;
app.use (express.json());

let estudiantes=[
    {id:1,nombre:'Pedro Pascal'},
    {id:2,nombre:'Goku Perez'},
    {id:3,nombre:'Cristiano Ronaldo'}
    ];

//get obtener los estudiantes

app.get('/estudiantes',(req,res)=>{
    res.json(estudiantes);
   
});

app.get('/estudiantes/:id',(req,res)=>{
    const id= parseInt(req.params.id);
    const estudiante = estudiantes.find(e=> e.id===id);
    if (estudiante){
        res.json(estudiante); //valida
    }else{
        res.status(404).send('Estudiante no encontrado'); //no encuentra
    }
});

//agregar
app.post('/estudiantes',(req,res)=>{
    const nuevoEstudiante={
        id:estudiantes.length+1,
        nombre:req.body.nombre
    };
    estudiantes.push(nuevoEstudiante);
    res.status(201).json(nuevoEstudiante);
});


//actualizar
app.put('/estudiantes/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const estudiante=estudiantes.find(e=>e.id===id);
    if (estudiante){
        estudiante.nombre=req.body.nombre;
        res.json(estudiante);
    } else{
        res.status(404).send('Estudiante no encontrado');
    }
});

//delete
app.delete('/estudiantes/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const index=estudiantes.findIndex(e=>e.id===id);
    if(index!==-1){
        estudiantes.splice(index,1);
        res.send('Estudiante eliminado');
    }else{
        res.status(404).send('Estudiante no encontrado');
    }
});

app.listen (PORT,()=>{
    console.log('Servidor corriendo en http://localhost:${PORT}');
});



/*    Clase 20 sept

app.get ('/api/greet',(req,res)=>{
    res.json({message:'Esta es la primer API'});
});

app.listen (PORT,()=>{
    console.log('Servidor corriendo en http://localhost:${PORT}');
});
*/
