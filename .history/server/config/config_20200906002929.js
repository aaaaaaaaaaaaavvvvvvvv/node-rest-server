se// ========================================
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