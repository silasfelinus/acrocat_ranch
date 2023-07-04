import { defineEventHandler, readBody, createError } from 'file:///home/silasfelinus/code/kindrobots/node_modules/h3/dist/index.mjs';
import prisma from './prisma.mjs';
import 'file:///home/silasfelinus/code/kindrobots/node_modules/@prisma/client/index.js';

const index_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const requiredFields = ["content", "role", "type", "conversationId"];
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new Error(`Missing data. Please make sure to provide ${field}.`);
      }
    }
    const message = await prisma.message.create({
      data: {
        content: body.content,
        role: body.sender,
        type: body.type,
        tokenCount: body.tokenCount,
        conversationId: body.conversationId
      }
    });
    return message;
  } catch (error) {
    let errorMessage = "An error occurred while creating the message.";
    if (error instanceof Error) {
      errorMessage += ` Details: ${error.message}`;
    }
    throw createError({
      statusCode: 500,
      statusMessage: errorMessage
    });
  }
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
