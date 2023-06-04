// server/api/chat.post.js
export default defineEventHandler(async (event) => {
  const { messages } = await readBody(event)
  const stream = await getChatStream({ messages })

  return sendStream(event, stream)
})
