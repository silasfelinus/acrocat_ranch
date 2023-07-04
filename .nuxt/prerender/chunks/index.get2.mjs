import { defineEventHandler, createError, sendError } from 'file:///home/silasfelinus/code/kindrobots/node_modules/h3/dist/index.mjs';
import prisma from './prisma.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/@prisma/client/index.js';

const index_get = defineEventHandler(async (event) => {
  var _a;
  const id = Number((_a = event.context.params) == null ? void 0 : _a.id);
  const conversation = await prisma.conversation.findUnique({
    where: {
      id: Number(id)
    }
  });
  if (!conversation) {
    const notFoundError = createError({
      statusCode: 404,
      statusMessage: "conversation not found "
    });
    sendError(event, notFoundError);
  }
  return conversation;
});

export { index_get as default };
//# sourceMappingURL=index.get2.mjs.map
