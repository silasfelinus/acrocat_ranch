import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const index_get = defineEventHandler(async (event) => {
  const tags = await prisma.tag.findMany();
  return {
    tags
  };
});

export { index_get as default };
//# sourceMappingURL=index.get4.mjs.map
