import { objectType, nonNull, intArg, extendType } from 'nexus'
import { Context } from '../context'
const PaymentIntent = objectType({
  name: 'PaymentIntent',
  definition(t) {
    t.string('clientSecret')
  },
})

export const GetPaymentIntent = extendType({
  type: 'Query',
  definition(t) {
    t.field('getPaymentIntent', {
      type: PaymentIntent,
      args: {
        amount: nonNull(intArg()),
      },
      resolve: async (_, { amount }, context: Context) => {
        const paymentIntent = await context.stripe.paymentIntents.create({
          amount,
          currency: 'usd',
        })

        return {
          clientSecret: paymentIntent.client_secret,
        }
      },
    })
  },
})
