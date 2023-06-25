import { objectType } from 'nexus'

export const ShoppingProduct = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ShoppingProduct',
  definition(t) {
    t.int('id')
    t.int('quantity')
    t.int('userId')
    t.int('productId')
    t.field('Product', {
      type: 'Product',
      resolve(root: any) {
        return root.Product
      },
    })
    t.field('User', {
      type: 'User',
      resolve(root: any) {
        return root.User
      },
    })
  },
})
