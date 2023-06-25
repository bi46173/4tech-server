import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('email')
    t.string('password')
    t.string('firstName')
    t.string('lastName')
    t.nullable.string('gender')
    t.nullable.field('birthday', { type: 'DateTime' })
    t.field('role', { type: 'Role' })
    t.field('createdAt', { type: 'DateTime' })
    t.nullable.field('address', {
      type: 'Address',
      resolve(root: any) {
        return root.address
      },
    })
    t.list.field('orders', {
      type: 'Order',
      args: {
        where: 'OrderWhereInput',
        orderBy: 'OrderOrderByWithRelationInput',
        cursor: 'OrderWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OrderScalarFieldEnum',
      },
      resolve(root: any) {
        return root.orders
      },
    })
    t.list.field('reviews', {
      type: 'Review',
      args: {
        where: 'ReviewWhereInput',
        orderBy: 'ReviewOrderByWithRelationInput',
        cursor: 'ReviewWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ReviewScalarFieldEnum',
      },
      resolve(root: any) {
        return root.reviews
      },
    })
    t.list.field('cart', {
      type: 'ShoppingProduct',
      args: {
        where: 'ShoppingProductWhereInput',
        orderBy: 'ShoppingProductOrderByWithRelationInput',
        cursor: 'ShoppingProductWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ShoppingProductScalarFieldEnum',
      },
      resolve(root: any) {
        return root.cart
      },
    })
    t.field('_count', {
      type: 'UserCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
