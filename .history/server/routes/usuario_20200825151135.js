const express = require('express');
const Usuario = require('../models/usuario');

const app = express();

app.get('/usuario', function (req, res) {
    res.json('get Usuario')
  });
  
app.post('/usuario', function (req, res) {
  
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        role: body.role
    });

    let body = req.body;
    if(body.nombre === undefined){
  
        res.status(400).json({
            ok:false,
            mensaje:"El nombre es necesario"
        });
    }else{
        res.json({body})
    }
  });
  
app.put('/usuario/:id', function (req, res) {
      let id = req.params.id;
      res.json({
          id
      });
   });
    
app.delete('/usuario', function (req, res) {
       res.json('delete Usuario')
   });


module.exports = app;