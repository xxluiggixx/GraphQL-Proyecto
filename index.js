/* REQUERIR DEPENDENCIAS*/
const express = require('express')
const bodyParser = require('body-parser')
const {graphqlExpress, graphiqlExpress} = require('graphql-server-express') //es un middle word
const schema = require('./schema') //importo el schema de graphql

const app = express()//Server express

//app.use("que endPoint", Lo pasamos por bodyParser, middel world q importamos)
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({schema})
)
//poder utilizar la parte grafica
app.use(
  '/graphql',
  graphiqlExpress({
    endpointURL:'/graphql'
  })
)

const PORT = 3000


// Para q empieze a escuchar un puerto
app.listen(PORT, () => {
  console.log('Servidor corriendo OK');
})
