import { defineEventHandler } from 'h3'
import prisma from './prisma.mjs'
import '@prisma/client'

const index_get = defineEventHandler(async () => {
  const bots = await prisma.bot.findMany({})
  return await bots
})

export { index_get as default }
//# sourceMappingURL=index.get.mjs.map
