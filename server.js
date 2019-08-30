import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import schema from './schema'

const server = express()

server.use('/graphiql', graphiqlExpress({
  endpointURL : '/graphql'
}))

server.use('/graphql', bodyParser.json(), graphqlExpress({schema}))

server.listen(5000, ()=>{
  console.log('server on port 5000')
})
