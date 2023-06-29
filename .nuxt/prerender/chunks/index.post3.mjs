import {
  defineEventHandler,
  readBody
} from 'file:///home/silasfelinus/code/kindrobots/node_modules/h3/dist/index.mjs'
import { PrismaClient } from 'file:///home/silasfelinus/code/kindrobots/node_modules/@prisma/client/index.js'

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
