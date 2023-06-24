import { defineEventHandler } from 'file:///home/silasfelinus/code/kindrobots/node_modules/h3/dist/index.mjs';
import prisma from './prisma.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/@prisma/client/index.js';

const index_get = defineEventHandler(async () => {
  const bots = await prisma.bot.findMany({});
  return await bots;
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
