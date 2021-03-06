require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Llamados a servicio web
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario'));
app.use(require('./routes/login'));
//Conexion a mongodb
mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
},(err,res)=>{
    if (err) throw err;

    console.log('Base de datos online');
});
 
app.listen(process.env.PORT, ()=> {
   console.log('Escuchando puerto',process.env.PORT); 
});