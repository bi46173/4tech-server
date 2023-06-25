import { extendType, objectType } from 'nexus'
import { Context } from '../context'

const CategoryCount = objectType({
  name: 'CategoryCount',
  definition(t) {
    t.nonNull.string('category')
    t.nonNull.int('count')
  },
})

const adminStats = objectType({
  name: 'adminStats',
  definition(t) {
    t.nonNull.int('usersCount'),
      t.nonNull.int('ordersCount'),
      t.nonNull.int('reviewsCount'),
      t.nonNull.int('ordersSum'),
      t.nonNull.list.field('productsByCategory', {
        type: CategoryCount,
      })
  },
})

export const getAdminStats = extendType({
  type: 'Query',
  definition(t) {
    t.field('getAdminStats', {
      type: adminStats,
      resolve: async (_, __, context: Context) => {
        const productsByCategoryCount =
          (await context.prisma.product.groupBy({
            by: ['category'],
            _count: {
              category: true,
            },
          })) ?? []
        const productsByCategory = productsByCategoryCount.map((item) => ({
          count: item._count.category,
          category: item.category,
        }))
        const orderSubtotalSums = await context.prisma.order.aggregate({
          _sum: {
            subtotal: true,
          },
        })
        const usersCount = (await context.prisma.user.count()) ?? 0
        const ordersCount = (await context.prisma.order.count()) ?? 0
        const reviewsCount = (await context.prisma.review.count()) ?? 0
        return {
          usersCount,
          ordersCount,
          reviewsCount,
          productsByCategory,
          ordersSum: orderSubtotalSums?._sum?.subtotal ?? 0,
        }
      },
    })
  },
})
