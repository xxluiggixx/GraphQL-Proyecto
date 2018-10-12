/* REQUERIR DEPENDENCIAS*/
const express = require('express')
const bodyParser = require('body-parser')

const app = express()//Server express
const PORT = 3000

app.get('/', function (req,res) {
  res.send('Hello World!')
})
// Para q empieze a escuchar un puerto
app.listen(PORT, () => {
  console.log('Servidor corriendo OK');
})
