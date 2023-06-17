import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  let bot = null

  if (body.bot)
    await prisma.bot
      .create({
        data: {
          name: body.name,
          botType: body.botType,
          description: body.description,
          avatarImage: body.avatarImage,
          prompt: body.prompt
        }
      })
      .then((response) => {
        bot = response
      })
  return {
    bot
  }
})
