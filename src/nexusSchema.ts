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
    schema: join(process.cwd(), '/generated/schema.graphql'),
    typegen: join(process.cwd(), '/generated/nexus.ts'),
  },
  contextType: {
    module: join(process.cwd(), 'context.ts'),
    export: 'Context',
  },
})

export const schema = applyMiddleware(schemaDefinition, permissions)
