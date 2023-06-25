import { Context } from '../context'
import { extendType } from 'nexus'
import { Product } from '@prisma/client'

export const ProductReviewsExtended = extendType({
  type: 'Product',
  definition(t) {
    t.field('avgRating', {
      type: 'Float',
      resolve: async (parent: Product, _, ctx: Context) => {
        const countReviews = await ctx.prisma.review.count({
          where: {
            productId: {
              equals: parent.id,
            },
          },
        })
        if (countReviews === 0) return 0.0
        const avgRating = await ctx.prisma.review.aggregate({
          where: {
            productId: parent.id,
          },
          _avg: {
            rating: true,
          },
        })
        return avgRating._avg.rating
      },
    })
  },
})
