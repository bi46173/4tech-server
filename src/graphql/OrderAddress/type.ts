import { objectType } from 'nexus'

export const OrderAddress = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'OrderAddress',
  definition(t) {
    t.int('id')
    t.int('orderId')
    t.string('fullName')
    t.string('street')
    t.string('city')
    t.string('zipCode')
    t.string('country')
    t.string('phoneNumber')
    t.field('order', {
      type: 'Order',
      resolve(root: any) {
        return root.order
      },
    })
  },
})
