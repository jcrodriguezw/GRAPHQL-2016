import mongoose from 'mongoose'
import authorsModelMongo from './models/authorsModelMongo'

const resolvers = {
  Query: {
    authors: () => {
      return authorsModelMongo.find({})
    },
    author: (root, { id }) => {
      return authorsModelMongo.findOne({ id: id })
    }
  },
  Mutation:{
    addAuthor: (root, { name, age, books}) => {
      const author = new authorsModelMongo({name: name, age: age, books: books})
      return author.save()
    },
    deleteAuthor: (root, { id }) => {
      return author.remove()
    }
  }
}

export default resolvers
