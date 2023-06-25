import { mutationField, nonNull } from 'nexus'

export const ShoppingProductCreateOneMutation = mutationField(
  'createOneShoppingProduct',
  {
    type: nonNull('ShoppingProduct'),
    args: {
      data: nonNull('ShoppingProductCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.shoppingProduct.create({
        data,
        ...select,
      })
    },
  },
)
