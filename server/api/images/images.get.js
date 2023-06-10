import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getImages() {
  const images = await prisma.images.findMany()
  return images
}

export default defineEventHandler(async () => {
  return await getImages()
})
