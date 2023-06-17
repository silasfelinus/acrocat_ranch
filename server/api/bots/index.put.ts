import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default eventHandler(async (event) => {
  const body = await readBody(event)
  const id = body.id
  const name = body.name
  const botType = body.botType
  const description = body.description
  const avatarImage = body.avatarImage
  const prompt = body.prompt

  if (!(id && name && prompt))
    return createError({
      statusCode: 400,
      statusMessage: 'Missing Required Parameter'
    })

  let bot = null

  if (id && name && prompt)
    bot = await prisma.bot.update({
      where: {
        id
      },
      data: {
        name,
        prompt
      }
    })

  return bot
})
