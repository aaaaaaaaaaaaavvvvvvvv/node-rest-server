const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
const Usuario = require('../models/usuario');
const app = express();


app.post('/login',(req,res)=> {

    let body = req.body;

    Usuario.findOne({email: body.email}, (err,usuarioDB) =>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            });
        }

        if(!usuarioDB){
            return res.status(400).json({
                ok:false,
                err:{
                    message:'(Usuario) y/o contraseña incorrectos.'
                }
            });
        }
    
        if (!bcrypt.compareSync(body.password, usuarioDB.password)){
            return res.status(400).json({
                ok:false,
                err:{
                    message:'Usuario y/o (contraseña) incorrectos.'
                }
    
               
            });
        }

        let token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEED, {expiresIn: process.env.CADUCICAD_TOKEN });
    
        res.json({
            ok:true,
            usuario: usuarioDB,
            token
        });
    });



   
});

//Configuraciones de google
async function verify( token ) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID, 
    });
    const payload = ticket.getPayload();
    return {
        nombre: payload.name,
        email: payload.email,
        img: payload.picture,
        google: true
    }
}

app.post('/google', async (req,res)=> {
    let token = req.body.idtoken;
    let googleUser = await verify( token );
    return res.json({
        ok:true,
        token
    });

});

module.exports = app;