import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
  GraphQLInputObjectType,
} from 'graphql'

const AnimeType = new GraphQLObjectType({
  name: 'Anime',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    episodes: { type: GraphQLFloat },
    meanScore: { type: GraphQLFloat },
  }
})

const animes = [
  {
    id: 1,
    name: 'Mahoutsukai no Yome',
    episodes: 24,
    meanScore: 78,
  },
  {
    id: 2,
    name: 'Steins;Gate 0',
    episodes: 23,
    meanScore: 84,
  }
]

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        description: 'A simple type for getting started!',
        resolve: () => 'world',
      },
      animes: {
        type: new GraphQLList(AnimeType),
        args: {
          meanScore: {
            type: new GraphQLInputObjectType({
              name: 'MeanScoreFilter',
              fields: {
                GTE: {
                  type: GraphQLFloat,
                  description: 'Greater or equal',
                },
              },
            }),
          },
        },
        resolve: (_object, args, _context) => {
          if (args.meanScore) {
            return animes.filter(anime => anime.meanScore >= args.meanScore.GTE)
          }

          return animes
        }
      }
    }
  }),
})
