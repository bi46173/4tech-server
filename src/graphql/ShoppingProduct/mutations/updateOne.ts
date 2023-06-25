import { mutationField, nonNull } from 'nexus'

export const ShoppingProductUpdateOneMutation = mutationField(
  'updateOneShoppingProduct',
  {
    type: nonNull('ShoppingProduct'),
    args: {
      data: nonNull('ShoppingProductUpdateInput'),
      where: nonNull('ShoppingProductWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.shoppingProduct.update({
        where,
        data,
        ...select,
      })
    },
  },
)
