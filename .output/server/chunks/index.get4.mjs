import { eventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const index_get = eventHandler(async () => {
  return await prisma.user.findMany();
});

export { index_get as default };
//# sourceMappingURL=index.get4.mjs.map
