import { queryField, nonNull, list } from 'nexus'

export const OrderProductFindManyQuery = queryField('findManyOrderProduct', {
  type: nonNull(list(nonNull('OrderProduct'))),
  args: {
    where: 'OrderProductWhereInput',
    orderBy: list('OrderProductOrderByWithRelationInput'),
    cursor: 'OrderProductWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('OrderProductScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.orderProduct.findMany({
      ...args,
      ...select,
    })
  },
})
