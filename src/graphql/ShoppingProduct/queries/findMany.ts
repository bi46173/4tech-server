import { queryField, nonNull, list } from 'nexus'

export const ShoppingProductFindManyQuery = queryField(
  'findManyShoppingProduct',
  {
    type: nonNull(list(nonNull('ShoppingProduct'))),
    args: {
      where: 'ShoppingProductWhereInput',
      orderBy: list('ShoppingProductOrderByWithRelationInput'),
      cursor: 'ShoppingProductWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('ShoppingProductScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.shoppingProduct.findMany({
        ...args,
        ...select,
      })
    },
  },
)
