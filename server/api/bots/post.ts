import { createError } from 'h3' // adjust based on where these methods are located in your project
import { createBot } from '.'

export default defineEventHandler(async (event) => {
  try {
    const { name, description, avatarImage, prompt } = await readBody(event)

    if (!name || !description || !avatarImage || !prompt) {
      const missingDataError = createError({
        statusCode: 400,
        statusMessage:
          'Missing data. Please make sure to provide name, description, avatarImage, and prompt.'
      })
      return missingDataError
    }

    let bot = await createBot(name, description, avatarImage, prompt)

    return bot
  } catch (error) {
    const serverError = createError({
      statusCode: 500,
      statusMessage: 'An error occurred while creating the bot.'
    })
    return serverError
  }
})
