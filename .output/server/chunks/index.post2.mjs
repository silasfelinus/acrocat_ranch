import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const index_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  let gallery = null;
  if (body.name)
    await prisma.gallery.create({
      data: {
        id: body.id,
        name: body.name,
        content: body.content,
        description: body.description,
        highlightImage: body.highlightImage,
        isNSFW: body.isNSFW,
        isAuth: body.isAuth,
        user: body.user
      }
    }).then((response) => {
      gallery = response;
    });
  return {
    gallery
  };
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
