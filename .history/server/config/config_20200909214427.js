// ========================================
// PUERTO
// ========================================
process.env.PORT = process.env.PORT || 3000;

// ========================================
// ENTORNO
// ========================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ========================================
// BASE DE DATOS
// ========================================
let urlDB;
if(process.env.NODE_ENV === 'dev'){
    urlDB= 'mongodb://localhost:27017/cafe';
}else{
    urlDB= process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

// ========================================
// VENCIMIENTO DEL TOKEN
// ========================================

process.env.CADUCICAD_TOKEN =60*60*24*30;

// ========================================
// SEMILLA DE AUTENTICACION
// ========================================
process.env.SEED = process.env.SEED  || 'seed-desarrollo';

// ========================================
// ROLE ADMINISTRADOR
// ========================================
process.env.ROLE_ADMIN = 'ADMIN_ROLE';

// ========================================
// GOOGLE CLIENT ID
// ========================================
process.env.CLIENT_ID = process.env.CLIENT_ID || '401478122188-ptt8g23hbrfia0ecng0f74cjf3ck8e9p.apps.googleusercontent.com';