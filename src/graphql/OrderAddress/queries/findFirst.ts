import { queryField, list } from 'nexus'

export const OrderAddressFindFirstQuery = queryField('findFirstOrderAddress', {
  type: 'OrderAddress',
  args: {
    where: 'OrderAddressWhereInput',
    orderBy: list('OrderAddressOrderByWithRelationInput'),
    cursor: 'OrderAddressWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('OrderAddressScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.orderAddress.findFirst({
      ...args,
      ...select,
    })
  },
})
