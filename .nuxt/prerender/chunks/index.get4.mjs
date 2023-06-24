import { eventHandler } from 'file:///home/silasfelinus/code/kindrobots/node_modules/h3/dist/index.mjs';
import { PrismaClient } from 'file:///home/silasfelinus/code/kindrobots/node_modules/@prisma/client/index.js';

const prisma = new PrismaClient();
const index_get = eventHandler(async () => {
  return await prisma.user.findMany();
});

export { index_get as default };
//# sourceMappingURL=index.get4.mjs.map
