import { rule, shield, or } from 'graphql-shield'
import { getUserId, isAdmin } from '../auth'
import { Context } from '../context'

const rules = {
  isAuthenticatedUser: rule()((_parent, _args, context: Context) => {
    const userId = getUserId(context)
    return Boolean(userId)
  }),
  isAdmin: rule()((_parent, _args, context: Context) => {
    const userId = isAdmin(context)
    return Boolean(userId)
  }),
  accessOwnData: rule()((_parent, args, context: Context) => {
    const userId = getUserId(context)
    if (!userId) return false
    const adminRole = isAdmin(context)
    if (adminRole) return true
    args.where = {
      ...args.where,
      userId,
    }
    return true
  }),
  accessOwnUserData: rule()((_parent, args, context: Context) => {
    const userId = getUserId(context)
    if (!userId) return false
    const adminRole = isAdmin(context)
    if (adminRole) return true
    args.where = {
      ...args.where,
      id: userId,
    }
    return true
  }),
}

export const permissions = shield(
  {
    Query: {
      findFirstUser: rules.accessOwnUserData,
      findManyUser: rules.isAdmin,
      findManyShoppingProduct: rules.accessOwnData,
      findManyOrder: rules.accessOwnData,
      findFirstOrder: rules.accessOwnData,
      getAdminStats: rules.isAdmin,
    },
    Mutation: {
      updateOneUser: rules.accessOwnUserData,
      updateOneAddress: rules.accessOwnData,
      deleteOneUser: rules.isAdmin,
      deleteOneProduct: rules.isAdmin,
      createOneProduct: rules.isAdmin,
      updateOneProduct: rules.isAdmin,
      deleteOneReview: rules.isAdmin,
      deleteOneOrder: rules.isAdmin,
      createOneOrder: rules.isAuthenticatedUser,
      deleteManyShoppingProduct: rules.accessOwnData,
    },
  },
  {
    debug: true,
  },
)
