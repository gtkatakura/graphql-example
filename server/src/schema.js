import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = `
  type Query {
    """A simple type for getting started!"""
    hello: String
    animes(meanScore: MeanScoreFilter): [Anime]!
  }

  type Anime {
    id: ID
    name: String
    episodes: Float
    meanScore: Float
  }

  input MeanScoreFilter {
    """Greater or equal"""
    GTE: Float
  }
`

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

const resolvers = {
  Query: {
    hello: (_root, _args, _context) => {
      return 'world'
    },
    animes: (_root, args, _context) => {
      if (args.meanScore) {
        return animes.filter(anime => anime.meanScore >= args.meanScore.GTE)
      }

      return animes
    },
  },
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
