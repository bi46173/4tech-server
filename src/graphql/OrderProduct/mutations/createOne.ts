import { mutationField, nonNull } from 'nexus'

export const OrderProductCreateOneMutation = mutationField(
  'createOneOrderProduct',
  {
    type: nonNull('OrderProduct'),
    args: {
      data: nonNull('OrderProductCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.orderProduct.create({
        data,
        ...select,
      })
    },
  },
)
