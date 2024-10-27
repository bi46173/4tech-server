import { objectType } from 'nexus'

export const Product = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Product',
  definition(t) {
    t.int('id')
    t.string('name')
    t.string('description')
    t.int('price')
    t.float('discount')
    t.int('stock')
    t.string('category')
    t.string('manufacturer')
    t.string('img')
    t.int('likes')
    t.nullable.string('memory')
    t.nullable.string('storage')
    t.nullable.string('processor')
    t.nullable.string('gpu')
    t.nullable.string('os')
    t.nullable.string('screen')
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
    t.list.field('ShoppingProduct', {
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
        return root.ShoppingProduct
      },
    })
    t.list.field('WishlistProduct', {
      type: 'WishlistProduct',
      args: {
        where: 'WishlistProductWhereInput',
        orderBy: 'WishlistProductOrderByWithRelationInput',
        cursor: 'WishlistProductWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'WishlistProductScalarFieldEnum',
      },
      resolve(root: any) {
        return root.WishlistProduct
      },
    })
    t.field('_count', {
      type: 'ProductCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
