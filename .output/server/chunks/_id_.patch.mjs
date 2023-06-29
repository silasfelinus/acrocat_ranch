import { defineEventHandler, readBody, createError } from 'h3'
import prisma from './prisma.mjs'
import '@prisma/client'

const _id__patch = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p
  try {
    const body = await readBody(event)
    const id = Number((_a = event.context.params) == null ? void 0 : _a.id)
    if (!id) {
      throw new Error('Missing ID parameter.')
    }
    let bot = await prisma.bot.findUnique({ where: { id } })
    if (!bot) {
      throw new Error('Bot not found.')
    }
    bot = await prisma.bot.update({
      where: { id },
      data: {
        name: (_b = body.name) != null ? _b : bot.name,
        botType: (_c = body.botType) != null ? _c : bot.botType,
        description: (_d = body.description) != null ? _d : bot.description,
        avatarImage: (_e = body.avatarImage) != null ? _e : bot.avatarImage,
        model: (_f = body.model) != null ? _f : bot.model,
        post: (_g = body.post) != null ? _g : bot.post,
        temperature: (_h = body.temperature) != null ? _h : bot.temperature,
        maxTokens: (_i = body.maxTokens) != null ? _i : bot.maxTokens,
        prompt: (_j = body.prompt) != null ? _j : bot.prompt,
        image: (_k = body.image) != null ? _k : bot.image,
        mask: (_l = body.mask) != null ? _l : bot.mask,
        style: (_m = body.style) != null ? _m : bot.style,
        n: (_n = body.n) != null ? _n : bot.n,
        intro: (_o = body.intro) != null ? _o : bot.intro,
        size: (_p = body.size) != null ? _p : bot.size
      }
    })
    return bot
  } catch (error) {
    let errorMessage = 'An error occurred while updating the bot.'
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
//# sourceMappingURL=_id_.patch.mjs.map
