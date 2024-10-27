import { objectType } from 'nexus'

export const Wishlist = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Wishlist',
  definition(t) {
    t.int('id')
    t.nullable.int('userId')
    t.nullable.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.list.field('products', {
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
        return root.products
      },
    })
    t.field('_count', {
      type: 'WishlistCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
