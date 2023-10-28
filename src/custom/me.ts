import { nonNull, queryField, stringArg } from 'nexus'
import { Context } from '../context'
import { getUserId, verifyToken } from '../auth'

export const me = queryField('me', {
  type: 'User',
  resolve: async (_root, args, context: Context) => {
    const userId = getUserId(context)
    if (!userId) return null
    return await context.prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        address: true,
      },
    })
  },
})

export const userByJwt = queryField('userByJwt', {
  type: 'User',
  args: {
    token: nonNull(stringArg()),
  },
  resolve: async (_root, args, context: Context) => {
    const user = verifyToken(args.token)
    if (!user.userId) return null
    return await context.prisma.user.findUnique({
      where: {
        id: Number(user.userId),
      },
    })
  },
})
