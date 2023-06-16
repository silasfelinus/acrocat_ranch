import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default eventHandler(async () => {
  return await prisma.gallery.findMany()
})
