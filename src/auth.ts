require('dotenv').config()
import { verify } from 'jsonwebtoken'
import { Context } from './context'

export const APP_SECRET = process.env.APP_SECRET || 'appsecret321'

export interface Token {
  userId: string
  role: string
}

export function getUserId(context: Context) {
  const authHeader = context.req.get('Authorization')
  if (authHeader) {
    const token = authHeader.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET) as Token
    return verifiedToken && Number(verifiedToken.userId)
  }
}
export function isAdmin(context: Context) {
  const authHeader = context.req.get('Authorization')
  if (!authHeader) return false
  const token = authHeader.replace('Bearer ', '')
  const verifiedToken = verify(token, APP_SECRET) as Token
  return verifiedToken && verifiedToken.role === 'ADMIN'
}
