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
    urlDB= '';
}else{
    urlDB= 'mongodb+srv://Traxz:oJ8SO5NNpTiUaqP8@cluster0.lq2ji.mongodb.net/test';
}