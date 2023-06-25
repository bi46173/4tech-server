import { mutationField, nonNull } from 'nexus'

export const ShoppingProductDeleteManyMutation = mutationField(
  'deleteManyShoppingProduct',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ShoppingProductWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.shoppingProduct.deleteMany({ where } as any)
    },
  },
)
