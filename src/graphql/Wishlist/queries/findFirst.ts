import { queryField, list } from 'nexus'

export const WishlistFindFirstQuery = queryField('findFirstWishlist', {
  type: 'Wishlist',
  args: {
    where: 'WishlistWhereInput',
    orderBy: list('WishlistOrderByWithRelationInput'),
    cursor: 'WishlistWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'WishlistScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.wishlist.findFirst({
      ...args,
      ...select,
    })
  },
})
