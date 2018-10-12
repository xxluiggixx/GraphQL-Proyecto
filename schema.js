const {makeExecutableSchema}= require('graphql-tools')


const schema = `
  type Curso {
    id: ID!
    titulo: String!
  }
`
