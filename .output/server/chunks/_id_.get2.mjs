import { defineEventHandler, createError, sendError } from 'h3';
import prisma from './prisma.mjs';
import '@prisma/client';

const _id__get = defineEventHandler(async (event) => {
  var _a;
  const id = Number((_a = event.context.params) == null ? void 0 : _a.id);
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id)
    }
  });
  if (!user) {
    const notFoundError = createError({
      statusCode: 404,
      statusMessage: "User not found "
    });
    sendError(event, notFoundError);
  }
  return user;
});

export { _id__get as default };
//# sourceMappingURL=_id_.get2.mjs.map
