import { eventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const index_get = eventHandler(async () => {
  return await prisma.gallery.findMany();
});

export { index_get as default };
//# sourceMappingURL=index.get2.mjs.map
