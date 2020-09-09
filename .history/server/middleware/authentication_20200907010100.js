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

    res.json({
        token: token
    });
};

module.exports = {
    verificacionToken
}