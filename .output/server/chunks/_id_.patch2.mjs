import { defineEventHandler, readBody, createError } from 'h3'
import prisma from './prisma.mjs'
import '@prisma/client'

const _id__patch = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h
  try {
    const body = await readBody(event)
    const id = Number((_a = event.context.params) == null ? void 0 : _a.id)
    if (!id) {
      throw new Error('Missing ID parameter.')
    }
    let gallery = await prisma.gallery.findUnique({ where: { id } })
    if (!gallery) {
      throw new Error('Gallery not found.')
    }
    gallery = await prisma.gallery.update({
      where: { id },
      data: {
        name: (_b = body.name) != null ? _b : gallery.name,
        content: (_c = body.content) != null ? _c : gallery.content,
        description: (_d = body.description) != null ? _d : gallery.description,
        highlightImage: (_e = body.highlightImage) != null ? _e : gallery.highlightImage,
        isNSFW: (_f = body.isNSFW) != null ? _f : gallery.isNSFW,
        isAuth: (_g = body.isAuth) != null ? _g : gallery.isAuth,
        user: (_h = body.user) != null ? _h : gallery.user
      }
    })
    return gallery
  } catch (error) {
    let errorMessage = 'An error occurred while updating the gallery.'
    if (error instanceof Error) {
      errorMessage += ` Details: ${error.message}`
    }
    throw createError({
      statusCode: 500,
      statusMessage: errorMessage
    })
  }
})

export { _id__patch as default }
//# sourceMappingURL=_id_.patch2.mjs.map
