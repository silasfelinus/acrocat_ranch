import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getBots() {
  const bots = await prisma.bot.findMany({})
  return bots
}

export async function getBot(id: Number) {
  const bot = await prisma.bot.findUnique({
    where: {
      id: Number(id)
    }
  })
  return bot
}

export async function createBot(
  name: string,
  description: string,
  avatarImage: string,
  prompt: string
) {
  if (!name || !description || !avatarImage || !prompt) {
    throw new Error(
      'Missing data. Please make sure to provide name, description, avatarImage, and prompt.'
    )
  }

  const result = await prisma.bot.create({
    data: {
      name,
      description,
      avatarImage,
      prompt
    }
  })

  return result
}
