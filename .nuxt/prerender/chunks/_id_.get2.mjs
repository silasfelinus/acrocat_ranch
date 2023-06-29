import {
  defineEventHandler,
  createError,
  sendError
} from 'file:///home/silasfelinus/code/kindrobots/node_modules/h3/dist/index.mjs'
import prisma from './prisma.mjs'
import 'file:///home/silasfelinus/code/kindrobots/node_modules/@prisma/client/index.js'

const _id__get = defineEventHandler(async (event) => {
  var _a
  const id = Number((_a = event.context.params) == null ? void 0 : _a.id)
  const gallery = await prisma.gallery.findUnique({
    where: {
      id: Number(id)
    }
  })
  if (!gallery) {
    const notFoundError = createError({
      statusCode: 404,
      statusMessage: 'Gallery not found '
    })
    sendError(event, notFoundError)
  }
  return gallery
})

export { _id__get as default }
//# sourceMappingURL=_id_.get2.mjs.map
