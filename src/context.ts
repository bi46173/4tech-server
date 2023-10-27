require('dotenv').config()
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export interface Context {
  prisma: PrismaClient
  req: any
  select: any
  stripe: any
  token: string
}

export function createContext(req: any): Context {
  const { token } = req.req.cookies
  return {
    ...req,
    prisma,
    select: {},
    stripe,
    token,
  }
}
