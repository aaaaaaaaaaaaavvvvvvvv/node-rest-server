const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre:{
        type: String,
        required: [true,'El nombre es necesario.']
    },
    email:{
        type: String,
        required: [true,'El correo es necesario.']
    },
    password:{
        type: String,
        required: [true,'Necesita una contraseña para el usuario.']
    },
    img:{
        type: String,
        required: false
    },
    rol:{
        type: String,
        required: [true,'Nesecita un rol para el usaurio.'],
        default: 'USER_ROLE'
    },
    estado:{
        type: Boolean
    },
    google:{
        type: Boolean
    }
});
