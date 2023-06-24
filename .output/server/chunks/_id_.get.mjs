import { defineEventHandler, createError, sendError } from 'h3';
import prisma from './prisma.mjs';
import '@prisma/client';

const _id__get = defineEventHandler(async (event) => {
  var _a;
  const id = Number((_a = event.context.params) == null ? void 0 : _a.id);
  const bot = await prisma.bot.findUnique({
    where: {
      id: Number(id)
    }
  });
  if (!bot) {
    const notFoundError = createError({
      statusCode: 404,
      statusMessage: "Bot not found "
    });
    sendError(event, notFoundError);
  }
  return bot;
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
