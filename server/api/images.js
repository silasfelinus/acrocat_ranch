import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function (req, res) {
  try {
    const images = await prisma.image.findMany()
    return res.send(images)
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
}
