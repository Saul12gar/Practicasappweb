const express = require ('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
});
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('Servidoir corriendo en http://localhost:${PORT}');
    
});




//Archivos estaticos son css, js