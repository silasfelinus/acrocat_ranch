import { defineEventHandler } from 'h3'
import prisma from './prisma.mjs'
import '@prisma/client'

const index_get = defineEventHandler(async () => {
  const galleries = await prisma.gallery.findMany({})
  return await galleries
})

export { index_get as default }
//# sourceMappingURL=index.get2.mjs.map
