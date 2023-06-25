import { objectType } from 'nexus'

export const OrderProduct = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'OrderProduct',
  definition(t) {
    t.int('id')
    t.int('orderId')
    t.string('name')
    t.int('price')
    t.string('img')
    t.float('discount')
    t.int('quantity')
    t.field('Order', {
      type: 'Order',
      resolve(root: any) {
        return root.Order
      },
    })
  },
})
