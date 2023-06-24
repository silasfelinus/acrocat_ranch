import { eventHandler, readBody, createError } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const index_put = eventHandler(async (event) => {
  const body = await readBody(event);
  const id = body.id;
  const name = body.name;
  const content = body.content;
  const description = body.description;
  const highlightImage = body.highlightImage;
  const isNSFW = body.isNSFW;
  const isAuth = body.isAuth;
  const user = body.user;
  if (!(id || name))
    return createError({
      statusCode: 400,
      statusMessage: "Missing ID or email"
    });
  let gallery = null;
  if (id || name)
    gallery = await prisma.gallery.update({
      where: {
        id
      },
      data: {
        name,
        content,
        description,
        highlightImage,
        isNSFW,
        isAuth,
        user
      }
    });
  return gallery;
});

export { index_put as default };
//# sourceMappingURL=index.put.mjs.map
