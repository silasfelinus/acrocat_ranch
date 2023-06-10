import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const galleries = await prisma.gallery.findMany()
  return galleries
})
