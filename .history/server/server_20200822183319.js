const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.send('Escuchando puerto: ',3000)
})
 
app.listen(3000)