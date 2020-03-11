require('dotenv').config()

import { ApolloServer } from 'apollo-server'
import typeDefs from './types'
import resolvers from './resolvers'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
