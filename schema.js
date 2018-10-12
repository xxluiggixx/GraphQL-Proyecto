//importar un tools para crear un schema ejecutable
const {makeExecutableSchema}= require('graphql-tools')

const typeDefs = `
  type Curso {
    id: ID!
    titulo: String!
  }

  type Query{
    cursos: [Curso]
  }
`
//generar un schema a traves de la herramienta
const schema = makeExecutableSchema({
  typeDefs
})

module.exports = schema
