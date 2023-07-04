import { defineEventHandler, readBody, createError } from 'file:///home/silasfelinus/code/kindrobots/node_modules/h3/dist/index.mjs';
import prisma from './prisma.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/@prisma/client/index.js';

const createmany_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!Array.isArray(body)) {
      throw new TypeError("The request body should be an array of bots to create.");
    }
    const data = body.map((bot) => {
      const botData = {};
      for (let key in bot) {
        if (bot[key] !== void 0) {
          botData[key] = bot[key];
        }
      }
      return botData;
    });
    await prisma.bot.createMany({ data });
    return { message: "Bots created successfully." };
  } catch (error) {
    let errorMessage = "An error occurred while creating the bots.";
    if (error instanceof Error) {
      errorMessage += ` Details: ${error.message}`;
    }
    throw createError({
      statusCode: 500,
      statusMessage: errorMessage
    });
  }
});

export { createmany_post as default };
//# sourceMappingURL=createmany.post.mjs.map
