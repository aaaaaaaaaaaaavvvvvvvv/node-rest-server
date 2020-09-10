require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

//Llamados a servicio web
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

//Configuracion global de rutas
app.use(require('./routes/index'));

//Conexion a mongodb
mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
},(err,res)=>{
    if (err) throw err;

    console.log('Base de datos online');
});
 
//Habilitar la carpeta public para que sea accedido de cualquier lugar
app.use(express.static(path.resolve(__dirname , '../public')));
console.log(path.resolve(__dirname , '../public'));
app.listen(process.env.PORT, ()=> {
   console.log('Escuchando puerto',process.env.PORT); 
});