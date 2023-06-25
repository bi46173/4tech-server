import { mutationField, nonNull } from 'nexus'

export const OrderAddressCreateOneMutation = mutationField(
  'createOneOrderAddress',
  {
    type: nonNull('OrderAddress'),
    args: {
      data: nonNull('OrderAddressCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.orderAddress.create({
        data,
        ...select,
      })
    },
  },
)
