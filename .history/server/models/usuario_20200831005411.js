const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values:['ADMIN_ROLE','USER_ROLE'],
    message: '{VALUE} no es un rol valido.'
};

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre:{
        type: String,
        required: [true,'El nombre es necesario.']
    },
    email:{
        type: String,
        unique: true,
        required: [true,'El correo es necesario.']
    },
    password:{
        type: String,
        required: [true,'Necesita una contraseña para el usuario.']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        //required: [true,'Nesecita un rol para el usaurio.'],
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }
});

usuarioSchema.methods.toJSON = function(){
    let user = this;
    let userObj = user.toObject();
    delete userObj.password;
}

usuarioSchema.plugin( uniqueValidator , { message:'{PATH} debe de ser unico.' });
module.exports = mongoose.model('Usuario', usuarioSchema);