import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
  type Author {
    id: String
    age: Int
    name: String
    books: [String]
  }

  type Query {
    authors: [Author]
  }
`

const schema = makeExecutableSchema({typeDefs, resolvers})
export default schema
