import { queryField, list } from 'nexus'

export const WishlistProductFindFirstQuery = queryField(
  'findFirstWishlistProduct',
  {
    type: 'WishlistProduct',
    args: {
      where: 'WishlistProductWhereInput',
      orderBy: list('WishlistProductOrderByWithRelationInput'),
      cursor: 'WishlistProductWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: 'WishlistProductScalarFieldEnum',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.wishlistProduct.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
