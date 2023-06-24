import { eventHandler, readBody, createError } from 'h3';
import prisma from './prisma.mjs';
import '@prisma/client';

const _id__patch = eventHandler(async (event) => {
  const body = await readBody(event);
  const id = body.id;
  const email = body.email;
  const userName = body.name;
  if (!(id && email))
    return createError({
      statusCode: 400,
      statusMessage: "Missing ID or email"
    });
  let user = null;
  if (id && email)
    user = await prisma.user.update({
      where: {
        id
      },
      data: {
        userName,
        email
      }
    });
  return user;
});

export { _id__patch as default };
//# sourceMappingURL=_id_.patch2.mjs.map
