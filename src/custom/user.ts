import { APP_SECRET, getUserId } from '../auth'
import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import {
  nonNull,
  objectType,
  stringArg,
  intArg,
  list,
  inputObjectType,
} from 'nexus'
import { Context } from '../context'

const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token')
    t.field('user', { type: 'User' })
  },
})
export const CartProducts = inputObjectType({
  name: 'CartProducts',
  definition(t) {
    t.int('productId'), t.int('quantity')
  },
})

export const UserOperations = objectType({
  name: 'Mutation',
  definition(t) {
    t.field('signup', {
      type: AuthPayload,
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
        firstName: nonNull(stringArg()),
        lastName: nonNull(stringArg()),
        gender: stringArg(),
        birthday: stringArg(),
        city: stringArg(),
        country: stringArg(),
        phoneNumber: stringArg(),
        street: stringArg(),
        zipCode: stringArg(),
      },
      resolve: async (_parent, args, context: Context) => {
        const checkExistingUser = await context.prisma.user.findFirst({
          where: {
            email: args.email,
          },
        })
        if (checkExistingUser) throw new Error('Email is already being used!')

        const hashedPassword = await hash(args.password, 10)
        const user = await context.prisma.user.create({
          data: {
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
            password: hashedPassword,
            birthday: new Date(args.birthday),
            gender: args.gender,
            address: {
              create: {
                street: args.street,
                city: args.city,
                country: args.country,
                zipCode: args.zipCode,
                phoneNumber: args.phoneNumber,
              },
            },
          },
          include: {
            address: false,
          },
        })
        return {
          token: sign({ userId: user.id, role: user.role }, APP_SECRET),
          user,
        }
      },
    })
    t.field('login', {
      type: AuthPayload,
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_parent, { email, password }, context: Context) => {
        const user = await context.prisma.user.findUnique({
          where: {
            email,
          },
        })
        if (!user) {
          throw new Error(`No user found for email: ${email}`)
        }
        const passwordValid = await compare(password, user.password)
        if (!passwordValid) {
          throw new Error('Invalid password')
        }
        const token = sign({ userId: user.id, role: user.role }, APP_SECRET)
        context.req.res.cookie('token', token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24,
          sameSite: 'none',
          secure: true,
        })
        return {
          token,
          user,
        }
      },
    }),
      t.field('signout', {
        type: 'Boolean',
        resolve: async (_parent, args, context) => {
          context.req.res.clearCookie('token')
          return true
        },
      }),
      t.field('changePassword', {
        type: 'Boolean',
        args: {
          id: nonNull(intArg()),
          currentPassword: nonNull(stringArg()),
          password: nonNull(stringArg()),
        },
        resolve: async (
          _parent,
          { id, currentPassword, password },
          context: Context,
        ) => {
          const user = await context.prisma.user.findUnique({
            where: {
              id,
            },
          })
          if (!user) throw new Error(`No user found`)

          if (getUserId(context) !== id)
            throw new Error('Oops, something went wrong')
          const passwordValid = await compare(currentPassword, user.password)
          if (!passwordValid)
            throw new Error('Your old password is not correct')

          const hashedPassword = await hash(password, 10)
          await context.prisma.user.update({
            data: {
              password: hashedPassword,
            },
            where: {
              id,
            },
          })
          return true
        },
      }),
      t.list.field('setCart', {
        type: 'ShoppingProduct',
        args: {
          products: list(nonNull('CartProducts')),
          userId: nonNull(intArg()),
        },
        resolve: async (_parent, args, context: Context) => {
          const { products, userId } = args
          let cart = []

          if (products.length === 0) {
            cart = await context.prisma.shoppingProduct.findMany({
              where: {
                userId,
              },
              include: {
                Product: true,
              },
            })
          } else {
            for (const product of products) {
              await context.prisma.shoppingProduct.upsert({
                where: {
                  cartProduct: {
                    userId,
                    productId: product.productId,
                  },
                },
                create: {
                  User: {
                    connect: {
                      id: userId,
                    },
                  },
                  Product: {
                    connect: {
                      id: product.productId,
                    },
                  },
                  quantity: product.quantity,
                },
                update: {
                  quantity: {
                    set: product.quantity,
                  },
                },
              })
            }
            cart = await context.prisma.shoppingProduct.findMany({
              where: {
                userId,
              },
              include: {
                Product: true,
              },
            })
          }

          return cart
        },
      })
  },
})
