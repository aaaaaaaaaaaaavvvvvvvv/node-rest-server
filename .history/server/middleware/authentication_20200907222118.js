const jwt = require('jsonwebtoken');
const { response } = require('../routes/usuario');

// ========================================
// VERIFICAR TOKEN
// ========================================
let verificacionToken = (req,res,next) => {
    let token = req.get('token');

    jwt.verify(token, process.env.SEED , (err, decoded) => {
        if(err){
            return res.status(401).json({
                ok: false,
                err 
            });
        }

        req.usuario = decoded.usuario;
        next();
    });

   
};

// ========================================
// VERIFICAR ADMIN ROLE
// ========================================

let verificacionAdminRole = (req,res,next)=> {
    let usuario = req.usuario;
    if(usuario.role != process.env.ROLE_ADMIN){
        console.log("No deberia dejar entrar");
        console.log(usuario.role);
        console.log(process.env.ROLE_ADMIN);
        return res.status(401).json({
            ok:false,
            mensaje: 'Solo Administradores pueden crear y/o modificar usuarios.'
        });
    }
    next();
};

module.exports = {
    verificacionToken,
    verificacionAdminRole
}