import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// get
const users = prisma.user.findMany()

export default defineEventHandler(async () => {
  return await users
})
