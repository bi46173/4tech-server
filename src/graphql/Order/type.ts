import { objectType } from 'nexus'

export const Order = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Order',
  definition(t) {
    t.int('id')
    t.int('userId')
    t.string('OrderStatus')
    t.field('date', { type: 'DateTime' })
    t.int('subtotal')
    t.field('type', { type: 'OrderType' })
    t.field('User', {
      type: 'User',
      resolve(root: any) {
        return root.User
      },
    })
    t.nullable.field('address', {
      type: 'OrderAddress',
      resolve(root: any) {
        return root.address
      },
    })
    t.list.field('products', {
      type: 'OrderProduct',
      args: {
        where: 'OrderProductWhereInput',
        orderBy: 'OrderProductOrderByWithRelationInput',
        cursor: 'OrderProductWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OrderProductScalarFieldEnum',
      },
      resolve(root: any) {
        return root.products
      },
    })
    t.field('_count', {
      type: 'OrderCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
