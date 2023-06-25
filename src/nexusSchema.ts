import { makeSchema } from 'nexus'
import * as types from './graphql'
import * as customTypes from './custom'
import { paljs } from '@paljs/nexus'
import { join } from 'path'
import { permissions } from './permissions'
import { applyMiddleware } from 'graphql-middleware'

const schemaDefinition = makeSchema({
  types: [types, customTypes],
  plugins: [paljs()],
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: join(__dirname, 'context.ts'),
    export: 'Context',
  },
})

export const schema = applyMiddleware(schemaDefinition, permissions)
