import { mutationField, nonNull } from 'nexus'

export const ShoppingProductUpsertOneMutation = mutationField(
  'upsertOneShoppingProduct',
  {
    type: nonNull('ShoppingProduct'),
    args: {
      where: nonNull('ShoppingProductWhereUniqueInput'),
      create: nonNull('ShoppingProductCreateInput'),
      update: nonNull('ShoppingProductUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.shoppingProduct.upsert({
        ...args,
        ...select,
      })
    },
  },
)
