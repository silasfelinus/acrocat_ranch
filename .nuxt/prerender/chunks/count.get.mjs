import { defineEventHandler } from 'file:///home/silasfelinus/code/kindrobots/node_modules/h3/dist/index.mjs';
import { PrismaClient } from 'file:///home/silasfelinus/code/kindrobots/node_modules/@prisma/client/index.js';

const prisma = new PrismaClient();
const count_get = defineEventHandler(async (event) => {
  try {
    if (event.req.method === "GET") {
      const count = await prisma.bot.count();
      event.res.setHeader("Content-Type", "application/json");
      event.res.statusCode = 200;
      event.res.end(JSON.stringify({ count }));
    } else {
      event.res.statusCode = 405;
      event.res.end("Method Not Allowed");
    }
  } catch (error) {
    console.error("Failed to fetch bot count:", error);
    event.res.setHeader("Content-Type", "application/json");
    event.res.statusCode = 500;
    event.res.end(JSON.stringify({ error: "Failed to fetch bot count" }));
  } finally {
    await prisma.$disconnect();
  }
});

export { count_get as default };
//# sourceMappingURL=count.get.mjs.map
