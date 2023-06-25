import { queryField, list } from 'nexus'

export const AddressFindFirstQuery = queryField('findFirstAddress', {
  type: 'Address',
  args: {
    where: 'AddressWhereInput',
    orderBy: list('AddressOrderByWithRelationInput'),
    cursor: 'AddressWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('AddressScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.address.findFirst({
      ...args,
      ...select,
    })
  },
})
