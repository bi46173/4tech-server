/**
 * @type {import('@paljs/types').Config}
 **/

const common = {
  excludeFieldsByModel: {
    // Model: ['field1', 'field2', 'fieldN'],
  },
  // excludeQueriesAndMutations: ['deleteMany', 'createMany', 'updateMany'],
  excludeQueriesAndMutationsByModel: {
    // all possible resolvers : ['findUnique','findFirst','findMany','findCount','aggregate','createOne','updateOne','upsertOne','deleteOne','updateMany','deleteMany']
    // Model : ['resolver','resolver2'] - exclude generation for resolver
    Address: [
      'findUnique',
      'findMany',
      'findCount',
      'aggregate',
      'createOne',
      'deleteOne',
      'updateMany',
      'deleteMany',
    ],
    User: [
      'findUnique',
      'findCount',
      'aggregate',
      'createOne',
      'upsertOne',
      'updateMany',
      'deleteMany',
    ],
    Product: [
      'findUnique',
      'aggregate',
      'upsertOne',
      'updateMany',
      'deleteMany',
    ],
    Order: [
      'findUnique',
      'aggregate',
      'updateOne',
      'upsertOne',
      'updateMany',
      'deleteMany',
    ],
    OrderAddress: [
      'findUnique',
      'findMany',
      'findCount',
      'aggregate',
      'updateOne',
      'upsertOne',
      'deleteOne',
      'updateMany',
      'deleteMany',
    ],
    OrderProduct: [
      'findUnique',
      'findFirst',
      'findCount',
      'aggregate',
      'updateOne',
      'upsertOne',
      'deleteOne',
      'updateMany',
      'deleteMany',
    ],
    Review: [
      'findUnique',
      'findFirst',
      'aggregate',
      'updateOne',
      'upsertOne',
      'updateMany',
      'deleteMany',
    ],
    ShoppingProduct: [
      'findUnique',
      'findFirst',
      'findCount',
      'aggregate',
      'updateMany',
    ],
    // WishlistProduct: [
    //   'findUnique',
    //   'findFirst',
    //   'findCount',
    //   'aggregate',
    //   'createOne',
    //   'updateOne',
    //   'upsertOne',
    //   'updateMany',
    //   'deleteMany',
    // ],
  },
  excludeModels: [
    // { name: 'model', queries: true, mutations: true },
  ],
}

module.exports = {
  backend: {
    ...common,
    generator: 'nexus',
    outputs: {
      schema: __dirname + '/src/generated/schema.graphql',
      typegen: __dirname + '/src/generated/nexus.ts',
    },
  },
}
