const express = require('express');
const app = express();
 
app.get('/usuario', function (req, res) {
  res.json('get Usuario')
});

app.post('/usuario', function (req, res) {
    res.json('post Usuario')
});

app.put('/usuario', function (req, res) {
    res.json('get Usuario')
 });
  
 app.delete('/usuario', function (req, res) {
     res.json('Hellocito')
 });
 
app.listen(3000, ()=> {
   console.log('Escuchando puerto',3000); 
});