import { defineEventHandler, readBody } from 'h3'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const index_post = defineEventHandler(async (event) => {
  const body = await readBody(event)
  let tag = null
  if (body.name)
    tag = await prisma.tag.create({
      data: {
        name: body.name
      }
    })
  return {
    tag
  }
})

export { index_post as default }
//# sourceMappingURL=index.post3.mjs.map
