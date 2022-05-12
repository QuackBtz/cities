import { ApolloServer } from 'apollo-server'
import { schema } from './graphql'
import { apis } from './apis'
import 'dotenv/config'

const port = process.env.SERVER_PORT || 4000

const formatError = (err) => {
  return {
    message: {
      message: err.message,
      code: err.extensions.code
    }
  }
}

const server = new ApolloServer({ dataSources: () => (apis), ...schema, formatError })

server.listen({ port })
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  })