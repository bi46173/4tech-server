import { mutationField, nonNull } from 'nexus'

export const ShoppingProductDeleteOneMutation = mutationField(
  'deleteOneShoppingProduct',
  {
    type: 'ShoppingProduct',
    args: {
      where: nonNull('ShoppingProductWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.shoppingProduct.delete({
        where,
        ...select,
      })
    },
  },
)
