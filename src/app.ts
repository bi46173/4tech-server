import express from 'express'
import { json } from 'body-parser'
import cors from 'cors'
import { expressMiddleware } from '@apollo/server/express4'
import { createContext } from './context'
import { ApolloServer } from '@apollo/server'
import { applyMiddleware } from 'graphql-middleware'
import { schema } from './nexusSchema'
import { permissions } from './permissions'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import http from 'http'
import { config } from 'dotenv-flow'
require('dotenv').config()

//rest apis
const cloudinaryApi = require('./rest-api/cloudinary')

console.log('Creating Apollo Server...')

export async function createApp() {
  console.log('Creating express app...')

  const app = express()
  const httpServer = http.createServer(app)

  app.use(express.json({ limit: '50mb' }))
  app.get('/', function ({ res }) {
    res.send('<h1>Private</h1>')
  })

  const server = new ApolloServer({
    schema: applyMiddleware(schema, permissions),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: true,
    persistedQueries: false,
  })

  app.set('trust proxy', 1)
  await server.start()

  app.use(
    cors({
      origin: [
        'http://127.0.0.1:4200',
        'http://localhost:4200',
        'http://localhost:3000',
      ],
      credentials: true,
    }),
  )

  app.use(
    '/v1/graphql',
    json(),
    expressMiddleware(server, {
      context: async (req) => createContext(req),
    }),
  )
  // rest apis
  app.use(cloudinaryApi)
  return app
}
const PORT = process.env.PORT || 4000
createApp().then((e) => {
  e.listen(PORT, () => {
    config({
      default_node_env: 'development',
      purge_dotenv: true,
    })
    console.log(`Server running on http://localhost:${PORT}`)
  })
})
