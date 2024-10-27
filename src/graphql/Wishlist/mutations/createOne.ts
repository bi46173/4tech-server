import { mutationField, nonNull } from 'nexus'

export const WishlistCreateOneMutation = mutationField('createOneWishlist', {
  type: nonNull('Wishlist'),
  args: {
    data: 'WishlistCreateInput',
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.wishlist.create({
      data,
      ...select,
    })
  },
})
