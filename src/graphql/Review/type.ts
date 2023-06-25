import { objectType } from 'nexus'

export const Review = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Review',
  definition(t) {
    t.int('id')
    t.int('userId')
    t.int('productId')
    t.string('comment')
    t.int('rating')
    t.field('date', { type: 'DateTime' })
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
