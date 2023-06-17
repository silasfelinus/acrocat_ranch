// server/api/bots/[id].ts
import { getBot } from '.'

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)
  if (isNaN(id)) {
    const invalidIdError = createError({
      statusCode: 400,
      statusMessage: 'Invalid ID'
    })
    sendError(event, invalidIdError)
    return
  }
  const bot = await getBot(id)
  if (!bot) {
    const notFoundError = createError({
      statusCode: 404,
      statusMessage: 'Bot not found '
    })
    sendError(event, notFoundError)
  }
  return bot
})
