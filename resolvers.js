const authorsTest = [{
  id:1,
  name: 'primer test',
  age: 1,
  books:['1 libro', '2 libro']
}]

const resolvers = {
  Query: {
    authors: () => {
      return authorsTest
    }
  }
}

export default resolvers
