import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        description: 'A simple type for getting started!',
        resolve: () => 'world',
      },
    }
  }),
})
