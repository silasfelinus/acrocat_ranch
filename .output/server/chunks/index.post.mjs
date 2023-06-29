import { defineEventHandler, readBody, createError } from 'h3'
import prisma from './prisma.mjs'
import '@prisma/client'

const index_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const requiredFields = ['name', 'description', 'avatarImage', 'prompt']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new Error(`Missing data. Please make sure to provide ${field}.`)
      }
    }
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
    const data = {}
    for (const field of allowedFields) {
      if (body[field] !== void 0) {
        data[field] = body[field]
      }
    }
    const bot = await prisma.bot.create({
      data
    })
    return bot
  } catch (error) {
    let errorMessage = 'An error occurred while creating the bot.'
    if (error instanceof Error) {
      errorMessage += ` Details: ${error.message}`
    }
    throw createError({
      statusCode: 500,
      statusMessage: errorMessage
    })
  }
})

export { index_post as default }
//# sourceMappingURL=index.post.mjs.map
