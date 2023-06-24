import { defineEventHandler } from 'file:///home/silasfelinus/code/kindrobots/node_modules/h3/dist/index.mjs';
import { PrismaClient } from 'file:///home/silasfelinus/code/kindrobots/node_modules/@prisma/client/index.js';

const prisma = new PrismaClient();
const index_get = defineEventHandler(async (event) => {
  const tags = await prisma.tag.findMany();
  return {
    tags
  };
});

export { index_get as default };
//# sourceMappingURL=index.get3.mjs.map
