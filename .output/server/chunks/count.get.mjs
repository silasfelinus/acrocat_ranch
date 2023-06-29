import { defineEventHandler } from 'h3'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const count_get = defineEventHandler(async (event) => {
  try {
    if (event.node.req.method === 'GET') {
      const count = await prisma.bot.count()
      event.node.res.setHeader('Content-Type', 'application/json')
      event.node.res.statusCode = 200
      event.node.res.end(JSON.stringify({ count }))
    } else {
      event.node.res.statusCode = 405
      event.node.res.end('Method Not Allowed')
    }
  } catch (error) {
    console.error('Failed to fetch bot count:', error)
    event.node.res.setHeader('Content-Type', 'application/json')
    event.node.res.statusCode = 500
    event.node.res.end(JSON.stringify({ error: 'Failed to fetch bot count' }))
  } finally {
    await prisma.$disconnect()
  }
})

export { count_get as default }
//# sourceMappingURL=count.get.mjs.map
