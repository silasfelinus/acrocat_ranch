import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { data } = await readBody(event)

  const gallery = await prisma.gallery.create(data)
  return gallery
})
