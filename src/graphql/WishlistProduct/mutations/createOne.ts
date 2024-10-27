import { mutationField, nonNull } from 'nexus'

export const WishlistProductCreateOneMutation = mutationField(
  'createOneWishlistProduct',
  {
    type: nonNull('WishlistProduct'),
    args: {
      data: nonNull('WishlistProductCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.wishlistProduct.create({
        data,
        ...select,
      })
    },
  },
)
