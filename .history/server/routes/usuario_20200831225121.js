const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const Usuario = require('../models/usuario');
const usuario = require('../models/usuario');
const { json } = require('body-parser');

const app = express();

app.get('/usuario', function (req, res) {
    
    let desde = req.query.desde || 0;
    let limite = req.query.limite || 5;
    desde = Number(desde);
    limite = Number(limite);
    Usuario.find({})
            .skip(desde)
            .limit(limite)
            .exec( (err,usuarios) => {
                if(err){
                    return res.status(400).json({
                        ok: false,
                        err
                    });
                }

                Usuario.count({} , (err,conteo) => {
                    res.json({
                        ok:true,
                        usuarios
                    });
                });

                
            })


    });
  
app.post('/usuario', function (req, res) {
  
    let body = req.body;
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password,10),
        role: body.role
    });
    usuario.save( (err,usuarioDB)  => {
        if( err ){
            return res.status(400).json({
                ok: false,
                err
            });
        }
        //usuarioDB.password = null;
        res.json({
            ok:true,
            usuario: usuarioDB
        });
    });

    });
  
app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;
    let body = _.pick(req.body,["nombre","email","img","role","estado"]);

    Usuario.findByIdAndUpdate(id,body,{new : true, runValidators: true}, (err,usuarioDB) => {
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok:true,
            usuarioDB
        });
    });

   
    });
    
app.delete('/usuario', function (req, res) {
       res.json('delete Usuario')
    });


module.exports = app;