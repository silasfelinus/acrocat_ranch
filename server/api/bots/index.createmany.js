import prisma from '../prisma'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    // The request body should be an array of bots to create
    if (!Array.isArray(body)) {
      throw new TypeError(
        'The request body should be an array of bots to create.'
      )
    }

    const requiredFields = ['name', 'description', 'avatarImage', 'prompt']

    const allowedFields = [
      'name',
      'botType',
      'description',
      'avatarImage',
      'model',
      'post',
      'temperature',
      'maxTokens',
      'prompt',
      'image',
      'mask',
      'style',
      'n',
      'intro',
      'size'
    ]

    // Map over the bots in the request body to create the data array for prisma.bot.createMany
    const data = body.map((bot) => {
      for (const field of requiredFields) {
        if (!bot[field]) {
          throw new Error(
            `Missing data for bot. Please make sure to provide ${field}.`
          )
        }
      }

      const botData = {}

      for (const field of allowedFields) {
        if (bot[field] !== undefined) {
          botData[field] = bot[field]
        }
      }

      return botData
    })

    await prisma.bot.createMany({
      data
    })

    return { message: 'Bots created successfully.' }
  } catch (error) {
    let errorMessage = 'An error occurred while creating the bots.'

    // Check if error is an instance of Error
    if (error instanceof Error) {
      errorMessage += ` Details: ${error.message}`
    }

    throw createError({
      statusCode: 500,
      statusMessage: errorMessage
    })
  }
})
