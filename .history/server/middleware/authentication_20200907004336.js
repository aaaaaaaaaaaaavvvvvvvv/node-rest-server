// ========================================
// VERIFICAR TOKEN
// ========================================
let verificacionToken = (req,res,next) => {
    let token = req.get('token');

    res.json({
        token: token
    });
};

module.exports = {
    verificacionToken
}