import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = `
  type Query {
    """A simple type for getting started!"""
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: (_root, _args, _context) => {
      return 'world'
    },
  },
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
