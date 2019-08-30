import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import schema from './schema'
import mongoose from 'mongoose'

const server = express()

mongoose.connect('mongodb://localhost/graphqlTutorial-2')
const connection = mongoose.connection
connection.once('open', () => {
  console.log('db connected')
})

server.use('/graphiql', graphiqlExpress({
  endpointURL : '/graphql'
}))

server.use('/graphql', bodyParser.json(), graphqlExpress({schema}))

server.listen(5000, ()=>{
  console.log('server on port 5000')
})
