const jwt = require('jsonwebtoken');
const { response } = require('../routes/usuario');

// ========================================
// VERIFICAR TOKEN
// ========================================
let verificacionToken = (req,res,next) => {
    let token = req.get('token');
    jwt.verify(token, seed, (err, decoded) => {
        if(err){
            return response.status(401).json({
                ok: false,
                err
            });
        }
    });

    res.json({
        token: token
    });
};

module.exports = {
    verificacionToken
}