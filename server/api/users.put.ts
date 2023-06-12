import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default eventHandler((event) => {
  return {
    api: 'Put User'
  }
})
