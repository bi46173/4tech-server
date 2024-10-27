import { objectType } from 'nexus'

export const WishlistProduct = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'WishlistProduct',
  definition(t) {
    t.int('id')
    t.int('productId')
    t.int('wishlistId')
    t.nullable.field('wishlist', {
      type: 'Wishlist',
      resolve(root: any) {
        return root.wishlist
      },
    })
    t.nullable.field('product', {
      type: 'Product',
      resolve(root: any) {
        return root.product
      },
    })
  },
})
